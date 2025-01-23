import companies from '../data/companies';
import { agencies } from '../data/agencies';
import events from '../data/events.json';
import { kols } from '../data/kols';

export type SearchResult = {
    id: string;
    type: 'company' | 'agency' | 'event' | 'kol' | 'campaign' | 'community';
    title: string;
    description?: string;
    category?: string;
    url?: string;
    date?: string;
    location?: string;
    followers?: string;
    twitter?: string;
    tier?: string;
    matchedField: string;
    relevanceScore: number;
};

export function searchAcrossCategories(query: string): SearchResult[] {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    const results: SearchResult[] = [];

    // Search in companies
    companies.forEach(company => {
        let score = 0;
        let matchedField = '';

        // Check name
        if (company.name.toLowerCase().includes(query.toLowerCase())) {
            score += 10;
            matchedField = 'name';
        }

        // Check description
        if (company.description.toLowerCase().includes(query.toLowerCase())) {
            score += 5;
            matchedField = matchedField || 'description';
        }

        // Check marketing campaign
        if (company.marketingCampaign?.description?.toLowerCase().includes(query.toLowerCase())) {
            score += 3;
            matchedField = matchedField || 'marketing campaign';
        }

        if (score > 0) {
            results.push({
                id: company.id,
                type: 'company',
                title: company.name,
                description: company.description,
                url: company.website,
                matchedField,
                relevanceScore: score
            });

            // Add marketing campaign as a separate result if it exists
            if (company.marketingCampaign) {
                results.push({
                    id: `${company.id}-campaign`,
                    type: 'campaign',
                    title: `${company.name}'s Marketing Campaign`,
                    description: company.marketingCampaign.description,
                    matchedField: 'marketing campaign',
                    relevanceScore: score - 2
                });
            }
        }
    });

    // Search in agencies
    agencies.forEach(agency => {
        let score = 0;
        let matchedField = '';

        // Check name
        if (agency.name.toLowerCase().includes(query.toLowerCase())) {
            score += 10;
            matchedField = 'name';
        }

        // Check description
        if (agency.description.toLowerCase().includes(query.toLowerCase())) {
            score += 5;
            matchedField = matchedField || 'description';
        }

        // Check categories
        if (agency.categories.some(cat => cat.toLowerCase().includes(query.toLowerCase()))) {
            score += 3;
            matchedField = matchedField || 'category';
        }

        if (score > 0) {
            results.push({
                id: agency.id,
                type: 'agency',
                title: agency.name,
                description: agency.description,
                category: agency.categories.join(', '),
                url: agency.website,
                matchedField,
                relevanceScore: score
            });
        }
    });

    // Search in events
    events.forEach((event, index) => {
        let score = 0;
        let matchedField = '';

        // Check name
        if (event.name.toLowerCase().includes(query.toLowerCase())) {
            score += 10;
            matchedField = 'name';
        }

        // Check location
        if (event.location.toLowerCase().includes(query.toLowerCase())) {
            score += 5;
            matchedField = matchedField || 'location';
        }

        if (score > 0) {
            results.push({
                id: `event-${index}`,
                type: 'event',
                title: event.name,
                description: `${event.location} - ${event.dates}`,
                location: event.location,
                date: event.dates,
                url: event.website,
                matchedField,
                relevanceScore: score
            });
        }
    });

    // Search in KOLs
    kols.forEach((kol, index) => {
        let score = 0;
        let matchedField = '';

        // Check name
        if (kol.name.toLowerCase().includes(query.toLowerCase())) {
            score += 10;
            matchedField = 'name';
        }

        // Check Twitter handle
        if (kol.twitter.toLowerCase().includes(query.toLowerCase())) {
            score += 8;
            matchedField = matchedField || 'twitter';
        }

        // Check category
        if (kol.category.toLowerCase().includes(query.toLowerCase())) {
            score += 5;
            matchedField = matchedField || 'category';
        }

        if (score > 0) {
            results.push({
                id: `kol-${index}`,
                type: 'kol',
                title: kol.name,
                description: `@${kol.twitter} • ${kol.category}`,
                category: kol.category,
                twitter: kol.twitter,
                followers: kol.followers,
                tier: kol.tier,
                url: `https://twitter.com/${kol.twitter}`,
                matchedField,
                relevanceScore: score
            });
        }
    });

    // Sort results by relevance score
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}
