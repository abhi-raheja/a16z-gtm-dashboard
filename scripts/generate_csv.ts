import * as fs from 'fs';
import * as path from 'path';
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
        name: company.name,
        twitter_handle: company.twitter?.handle || '',
        twitter_url: company.twitter?.url || '',
        twitter_bio: company.twitter?.bio || '',
        pinned_tweet_url: company.marketingCampaign?.pinnedTweetUrl || '',
        current_description: company.description || ''
    }));

    // Sort by name
    companyData.sort((a, b) => a.name.localeCompare(b.name));

    // Write to CSV
    const csvContent = stringify(companyData, {
        header: true,
        columns: [
            'name',
            'twitter_handle',
            'twitter_url',
            'twitter_bio',
            'pinned_tweet_url',
            'current_description'
        ]
    });

    const outputPath = path.join(__dirname, '..', 'companies.csv');
    fs.writeFileSync(outputPath, csvContent);

    console.log(`CSV file written to: ${outputPath}`);
    console.log(`Total companies processed: ${companyData.length}`);
}

main().catch(console.error);
