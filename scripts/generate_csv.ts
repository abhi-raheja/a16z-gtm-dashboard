import { writeFile } from 'fs/promises';
import { stringify } from 'csv-stringify/sync';
import companies from '../src/data/companies';

interface CompanyData {
    name: string;
    twitter_handle: string;
    twitter_url: string;
    twitter_bio: string;
    pinned_tweet_url: string;
    current_description: string;
}

async function main() {
    // Prepare data for CSV
    const companyData: CompanyData[] = companies.map(company => ({
        name: company.name || '',
        twitter_handle: company.twitter?.handle || '',
        twitter_url: company.twitter?.url || '',
        twitter_bio: company.twitter?.bio || '',
        pinned_tweet_url: company.twitter?.pinned_tweet_url || '',
        current_description: company.description || ''
    }));

    // Convert to CSV
    const csv = stringify(companyData, {
        header: true,
        columns: ['name', 'twitter_handle', 'twitter_url', 'twitter_bio', 'pinned_tweet_url', 'current_description']
    });

    // Write to file
    await writeFile('companies.csv', csv);
    console.log('CSV file has been written successfully');
}

main().catch(console.error);
