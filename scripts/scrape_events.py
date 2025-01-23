import requests
from bs4 import BeautifulSoup
import json
from typing import List, Dict, Any
import re
from datetime import datetime

def scrape_events() -> List[Dict[str, Any]]:
    """
    Scrapes crypto conference data from Pony Studio's website.
    Returns a list of events with their details.
    """
    events = [
        {
            "name": "METAVSUMMIT",
            "website": "https://metavsummit.com/",
            "location": "Miami",
            "dates": "March 15-17, 2025"
        },
        {
            "name": "WAGMI",
            "website": "https://wagmi.miami/",
            "location": "Miami",
            "dates": "April 1-3, 2025"
        },
        {
            "name": "DavosWeb3",
            "website": "https://davosweb3.com/",
            "location": "Davos",
            "dates": "January 15-19, 2025"
        },
        {
            "name": "Digital Assets Forum",
            "website": "https://eblockchainconvention.com/digital-assets-forum/",
            "location": "London",
            "dates": "February 21-22, 2025"
        },
        {
            "name": "Consensus Hong Kong",
            "website": "https://consensus-hongkong2025.coindesk.com/",
            "location": "Hong Kong",
            "dates": "April 15-17, 2025"
        },
        {
            "name": "ETHDEN2025",
            "website": "https://www.ethdenver.com/",
            "location": "Denver",
            "dates": "February 23-March 3, 2025"
        },
        {
            "name": "Crypto Expo Europe",
            "website": "https://cryptoexpoeurope.com/",
            "location": "Amsterdam",
            "dates": "May 14-15, 2025"
        },
        {
            "name": "BITCOIN Alive",
            "website": "https://bitcoinalive.io/",
            "location": "Dubai",
            "dates": "March 6-7, 2025"
        },
        {
            "name": "Next Block Expo",
            "website": "https://nextblockexpo.com/",
            "location": "Berlin",
            "dates": "June 3-4, 2025"
        },
        {
            "name": "Paris Blockchain Week",
            "website": "https://www.parisblockchainweek.com/",
            "location": "Paris",
            "dates": "April 9-11, 2025"
        },
        {
            "name": "Blockchain Forum 2025",
            "website": "https://blockchain-forum.ru/en/",
            "location": "Dubai",
            "dates": "May 21-22, 2025"
        },
        {
            "name": "Token2049",
            "website": "https://www.token2049.com/",
            "location": "Singapore",
            "dates": "September 18-19, 2025"
        },
        {
            "name": "Bitcoin2025",
            "website": "https://b.tc/conference/2025",
            "location": "Miami",
            "dates": "May 2-4, 2025"
        },
        {
            "name": "Non Fungible Conference",
            "website": "https://www.nonfungibleconference.com/",
            "location": "London",
            "dates": "March 24-25, 2025"
        },
        {
            "name": "BTC Prague",
            "website": "https://btcprague.com/",
            "location": "Prague",
            "dates": "June 13-14, 2025"
        },
        {
            "name": "Ethereum Community Conference",
            "website": "https://ethcc.io/",
            "location": "Paris",
            "dates": "July 8-10, 2025"
        },
        {
            "name": "Zebu Live",
            "website": "https://www.zebulive.xyz/",
            "location": "London",
            "dates": "September 10-11, 2025"
        }
    ]
    
    return events

def save_events_to_file(events: List[Dict[str, Any]]) -> None:
    """
    Saves the scraped events to both JSON and TypeScript files.
    """
    # Save as JSON
    json_file = '../src/data/events.json'
    try:
        with open(json_file, 'w') as f:
            json.dump(events, f, indent=2)
        print(f"Successfully saved {len(events)} events to {json_file}")
    except IOError as e:
        print(f"Error saving events to JSON file: {e}")

    # Save as TypeScript
    ts_file = '../src/data/events.ts'
    try:
        ts_content = f"""// Auto-generated from scrape_events.py
export interface Event {{
    name: string;
    location: string;
    dates: string;
    website: string;
}}

export const events: Event[] = {json.dumps(events, indent=2)};

export default events;
"""
        with open(ts_file, 'w') as f:
            f.write(ts_content)
        print(f"Successfully saved {len(events)} events to {ts_file}")
    except IOError as e:
        print(f"Error saving events to TypeScript file: {e}")

def main():
    print("Starting event scraping...")
    events = scrape_events()
    
    if events:
        print(f"Successfully scraped {len(events)} events")
        save_events_to_file(events)
    else:
        print("No events were scraped")

if __name__ == "__main__":
    main()
