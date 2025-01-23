import requests
from bs4 import BeautifulSoup
import json
from typing import Dict, List, Optional, Tuple
import re
from urllib.parse import urlparse, urljoin
import os
import tweepy
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def clean_twitter_text(text: str) -> str:
    """Clean Twitter text by removing URLs, mentions, and hashtags."""
    # Remove URLs
    text = re.sub(r'http\S+|www.\S+', '', text, flags=re.MULTILINE)
    # Remove mentions
    text = re.sub(r'@\w+', '', text)
    # Remove hashtags
    text = re.sub(r'#\w+', '', text)
    # Clean up extra whitespace
    text = ' '.join(text.split())
    return text.strip()

def get_twitter_info(client: tweepy.Client, handle: str) -> Tuple[Optional[str], Optional[str]]:
    """Get Twitter bio and pinned tweet URL for a user."""
    try:
        # Get user info including bio and pinned tweet ID
        user = client.get_user(
            username=handle,
            user_fields=['description', 'pinned_tweet_id']
        )
        if not user.data:
            return None, None
        
        user_data = user.data
        bio = clean_twitter_text(user_data.description) if user_data.description else None
        
        # Get pinned tweet if available
        pinned_tweet_url = None
        if hasattr(user_data, 'pinned_tweet_id') and user_data.pinned_tweet_id:
            pinned_tweet_url = f"https://x.com/{handle}/status/{user_data.pinned_tweet_id}"
        
        return bio, pinned_tweet_url
    except Exception as e:
        print(f"Error getting Twitter info for @{handle}: {e}")
        return None, None

def find_twitter_link(soup: BeautifulSoup, base_url: str) -> Optional[str]:
    """Find Twitter/X link in a webpage."""
    # Common classes and text for social media links
    social_selectors = [
        # Footer links
        'footer a[href*="twitter.com"]', 'footer a[href*="x.com"]',
        # Social media icons
        'a[href*="twitter.com"]', 'a[href*="x.com"]',
        # Common classes
        '.social a[href*="twitter.com"]', '.social a[href*="x.com"]',
        '.social-media a[href*="twitter.com"]', '.social-media a[href*="x.com"]',
        '.socials a[href*="twitter.com"]', '.socials a[href*="x.com"]'
    ]
    
    # Try CSS selectors first
    for selector in social_selectors:
        try:
            link = soup.select_one(selector)
            if link and 'href' in link.attrs:
                return urljoin(base_url, link['href'])
        except:
            continue
    
    # Fallback: look for any link containing twitter.com or x.com
    all_links = soup.find_all('a', href=True)
    for link in all_links:
        href = link['href']
        if 'twitter.com' in href or 'x.com' in href:
            return urljoin(base_url, href)
    
    return None

def extract_twitter_handle(url: str) -> Optional[str]:
    """Extract Twitter/X handle from a URL."""
    if not url:
        return None
    
    parsed = urlparse(url)
    if any(domain in parsed.netloc for domain in ['twitter.com', 'x.com']):
        # Remove trailing slashes and get the last part of the path
        path_parts = [p for p in parsed.path.split('/') if p]
        if path_parts:
            return path_parts[0]  # First part after domain should be the handle
    return None

def scrape_a16z_portfolio() -> List[Dict]:
    url = "https://a16zcrypto.com/portfolio/"
    print(f"Fetching data from {url}...")
    
    # Initialize Twitter client
    client = tweepy.Client(
        bearer_token=os.getenv('TWITTER_BEARER_TOKEN'),
        consumer_key=os.getenv('TWITTER_API_KEY'),
        consumer_secret=os.getenv('TWITTER_API_SECRET'),
        wait_on_rate_limit=True
    )
    
    # Fetch the a16z portfolio page
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch the page. Status code: {response.status_code}")
        return []
    
    # Parse HTML
    soup = BeautifulSoup(response.content, 'html.parser')
    companies = []
    seen_companies = set()
    missing_twitter = []
    missing_pinned = []
    
    # Find all links
    links = soup.find_all('a', href=True)
    
    for link in links:
        company_url = link['href']
        company_name = link.text.strip()
        
        # Skip if empty or internal links or already processed
        if (not company_name or 
            not company_url or 
            company_url.startswith('#') or
            company_name in seen_companies or
            'a16z' in company_url.lower()):
            continue
            
        # Skip if not a valid company URL
        if not company_url.startswith('http'):
            continue
        
        seen_companies.add(company_name)
        print(f"\nProcessing {company_name}...")
        
        try:
            # Visit company website
            print(f"Visiting {company_url}")
            company_response = requests.get(company_url, timeout=10)
            if company_response.status_code != 200:
                print(f"Failed to fetch company website. Status code: {company_response.status_code}")
                continue
            
            company_soup = BeautifulSoup(company_response.content, 'html.parser')
            
            # Find Twitter link
            twitter_url = find_twitter_link(company_soup, company_url)
            twitter_handle = None
            twitter_bio = None
            pinned_tweet_url = None
            
            if twitter_url:
                twitter_handle = extract_twitter_handle(twitter_url)
                if twitter_handle:
                    print(f"Found Twitter handle: @{twitter_handle}")
                    twitter_bio, pinned_tweet_url = get_twitter_info(client, twitter_handle)
                    if not twitter_bio:
                        print(f"No Twitter bio found for @{twitter_handle}")
                    if not pinned_tweet_url:
                        print(f"No pinned tweet found for @{twitter_handle}")
                        missing_pinned.append(company_name)
            else:
                print(f"No Twitter link found for {company_name}")
                missing_twitter.append(company_name)
            
            company = {
                'id': str(len(companies) + 1),
                'name': company_name,
                'description': twitter_bio or f"Part of a16z's crypto portfolio.",
                'website': company_url,
                'category': classify_company(company_name, company_url),
                'twitter': {
                    'handle': twitter_handle,
                    'url': f"https://x.com/{twitter_handle}" if twitter_handle else None,
                    'bio': twitter_bio
                },
                'marketingCampaign': {
                    'title': f'Latest from {company_name}',
                    'description': 'Recent developments and updates in blockchain technology.',
                    'date': '2024-12-01',
                    'pinnedTweetUrl': pinned_tweet_url
                }
            }
            
            companies.append(company)
            print(f"Successfully processed {company_name}")
            
        except Exception as e:
            print(f"Error processing {company_name}: {e}")
            continue
    
    print("\nCompanies missing Twitter links:")
    for company in missing_twitter:
        print(f"- {company}")
    
    print("\nCompanies missing pinned tweets:")
    for company in missing_pinned:
        print(f"- {company}")
    
    return companies

def classify_company(name: str, url: str) -> str:
    """Classify company based on name and URL"""
    name_lower = name.lower()
    url_lower = url.lower()
    
    if any(keyword in name_lower or keyword in url_lower 
           for keyword in ['swap', 'exchange', 'defi', 'finance', 'lending', 'compound']):
        return 'DeFi'
    elif any(keyword in name_lower or keyword in url_lower 
            for keyword in ['nft', 'collect', 'art', 'creator']):
        return 'NFT'
    elif any(keyword in name_lower or keyword in url_lower 
            for keyword in ['game', 'play', 'sport']):
        return 'Gaming'
    elif any(keyword in name_lower or keyword in url_lower 
            for keyword in ['dao', 'governance']):
        return 'DAO'
    elif any(keyword in name_lower or keyword in url_lower 
            for keyword in ['security', 'protect', 'privacy']):
        return 'Security'
    else:
        return 'Infrastructure'

def save_to_typescript(companies: List[Dict]) -> None:
    """Save companies data to TypeScript file"""
    ts_content = """import { Company } from '../types/company';
import { manualCompanyData } from './companies.manual';

// Original scraped data
const scrapedCompanies: Company[] = """ + json.dumps(companies, indent=2) + """ as Company[];

// Apply manual overrides
export default scrapedCompanies.map(company => {
    const manualData = manualCompanyData.find(m => m.name === company.name);
    if (!manualData) return company;
    
    return {
        ...company,
        description: manualData.description || company.description,
        twitter: manualData.twitter ? {
            ...company.twitter,
            ...manualData.twitter
        } : company.twitter,
        marketingCampaign: manualData.marketingCampaign ? {
            ...company.marketingCampaign,
            ...manualData.marketingCampaign
        } : company.marketingCampaign
    };
});"""
    
    # Create data directory if it doesn't exist
    output_dir = 'src/data'
    os.makedirs(output_dir, exist_ok=True)
    
    # Save to companies.ts
    output_path = os.path.join(output_dir, 'companies.ts')
    with open(output_path, 'w') as f:
        f.write(ts_content)
    print(f"\nSaved {len(companies)} companies to {output_path}")

if __name__ == "__main__":
    print("Starting a16z crypto portfolio scraper...")
    companies = scrape_a16z_portfolio()
    save_to_typescript(companies)
    print("\nDone! Check the companies.ts file for the results.")