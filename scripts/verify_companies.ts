import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';
import companies from '../src/data/companies';

interface CompanyData {
    name: string;
    exists_on_a16z: boolean;
    twitter_handle: string;
    twitter_url: string;
    twitter_bio: string;
    pinned_tweet_url: string;
    current_description: string;
}

async function main() {
    // Start browser
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Get a16z crypto portfolio companies from their GitHub repo
    await page.goto('https://raw.githubusercontent.com/a16z/a16z-crypto-portfolio/main/portfolio.json');
    
    // Parse the JSON data
    const content = await page.textContent('pre') || '[]';
    const portfolioData = JSON.parse(content);
    const a16zCompanies = portfolioData.map((item: any) => item.name);

    console.log('Found companies on a16z:', a16zCompanies);

    // Prepare data for CSV
    const companyData: CompanyData[] = [];

    // Process each company
    for (const company of companies) {
        const data: CompanyData = {
            name: company.name,
            exists_on_a16z: a16zCompanies.some(a16z => 
                a16z.toLowerCase().includes(company.name.toLowerCase()) || 
                company.name.toLowerCase().includes(a16z.toLowerCase())
            ),
            twitter_handle: company.twitter?.handle || '',
            twitter_url: company.twitter?.url || '',
            twitter_bio: company.twitter?.bio || '',
            pinned_tweet_url: company.marketingCampaign?.pinnedTweetUrl || '',
            current_description: company.description || ''
        };
        companyData.push(data);
    }

    // Sort by name
    companyData.sort((a, b) => a.name.localeCompare(b.name));

    // Write to CSV
    const csvContent = stringify(companyData, {
        header: true,
        columns: [
            'name',
            'exists_on_a16z',
            'twitter_handle',
            'twitter_url',
            'twitter_bio',
            'pinned_tweet_url',
            'current_description'
        ]
    });

    const outputPath = path.join(__dirname, '..', 'company_verification.csv');
    fs.writeFileSync(outputPath, csvContent);

    console.log(`CSV file written to: ${outputPath}`);
    console.log(`Total companies processed: ${companyData.length}`);
    console.log(`Companies found on a16z.com: ${companyData.filter(c => c.exists_on_a16z).length}`);
    console.log(`Companies not found on a16z.com: ${companyData.filter(c => !c.exists_on_a16z).length}`);

    // List companies not found on a16z.com
    console.log('\nCompanies not found on a16z.com:');
    companyData
        .filter(c => !c.exists_on_a16z)
        .forEach(c => console.log(`- ${c.name}`));

    await browser.close();
}

main().catch(console.error);
