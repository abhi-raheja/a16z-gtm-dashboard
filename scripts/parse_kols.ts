import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

interface KOL {
    name: string;
    twitter: string;
    followers: string;
    category: string;
    tier: string;
}

const results: KOL[] = [];

fs.createReadStream(path.join(process.cwd(), 'public', 'Marketing with Clients f96fe0efd2c441d6bdb679925bcf6082.csv'))
    .pipe(csv())
    .on('data', (data) => {
        // Clean up Twitter URL to get username
        let twitter = data['X/Twitter'] || '';
        twitter = twitter.trim().replace(/^https?:\/\/(www\.)?(twitter|x)\.com\//, '').replace(/\s+$/, '');

        const kol: KOL = {
            name: data.Name,
            twitter: twitter,
            followers: data.Followers,
            category: data.Category,
            tier: data.Tier
        };
        results.push(kol);
    })
    .on('end', () => {
        const outputPath = path.join(process.cwd(), 'src', 'data', 'kols.ts');
        const fileContent = `
export interface KOL {
    name: string;
    twitter: string;
    followers: string;
    category: string;
    tier: string;
}

export const kols: KOL[] = ${JSON.stringify(results, null, 2)};

export default kols;
`;
        fs.writeFileSync(outputPath, fileContent);
        console.log('KOLs data has been written to src/data/kols.ts');
    });
