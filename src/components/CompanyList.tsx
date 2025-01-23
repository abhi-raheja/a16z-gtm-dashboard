'use client';

import CompanyCard from './CompanyCard';
import companies from '../data/companies';

export default function CompanyList() {
    const handleViewCampaign = (companyId: string) => {
        console.log('View campaign for company:', companyId);
    };

    const handleRequestIntro = (companyId: string) => {
        console.log('Request intro for company:', companyId);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {companies.map((company) => (
                <CompanyCard
                    key={company.id}
                    name={company.name}
                    description={company.description}
                    twitter={company.twitter}
                    marketingCampaign={company.marketingCampaign}
                    onViewCampaign={() => handleViewCampaign(company.id)}
                    onRequestIntro={() => handleRequestIntro(company.id)}
                />
            ))}
        </div>
    );
}