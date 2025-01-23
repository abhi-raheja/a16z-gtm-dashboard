const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const results = [];

// Function to clean Twitter URL and extract username
function cleanTwitterHandle(url) {
    if (!url) return '';
    // Remove spaces, quotes and trailing slashes
    url = url.trim().replace(/["']/g, '').replace(/\/+$/, '');
    // Handle both x.com and twitter.com URLs
    url = url.replace(/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\//, '');
    return url;
}

// Function to clean name field
function cleanName(name) {
    if (!name) return '';
    // Remove BOM and trim
    return name.replace(/^\uFEFF/, '').trim();
}

// Function to clean category
function cleanCategory(category) {
    if (!category) return '';
    // Replace "Informational/DeFi" with "DeFi"
    return category.replace('Informational/DeFi', 'DeFi');
}

// Function to clean tier
function cleanTier(tier) {
    if (!tier) return 'Tier 3';
    // Extract just the tier number
    const match = tier.match(/Tier (\d+)/i);
    return match ? `Tier ${match[1]}` : 'Tier 3';
}

fs.createReadStream(path.join(process.cwd(), 'public', 'Marketing with Clients f96fe0efd2c441d6bdb679925bcf6082.csv'))
    .pipe(csv())
    .on('data', (data) => {
        // Get the name field (could be either with or without BOM)
        const nameField = Object.keys(data).find(key => key.replace(/^\uFEFF/, '') === 'Name');
        const name = cleanName(data[nameField]);
        const twitter = cleanTwitterHandle(data['X/Twitter']);
        
        const kol = {
            name: name,
            twitter: twitter,
            followers: data.Followers,
            category: cleanCategory(data.Category),
            tier: cleanTier(data.Tier)
        };
        
        // Only add if we have a name and twitter handle
        if (kol.name && kol.twitter) {
            results.push(kol);
        }
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
        console.log(`Processed ${results.length} KOLs`);
    });
