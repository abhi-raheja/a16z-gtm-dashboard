import { TwitterInfo } from '../types/company';

interface CompanyCardProps {
    name: string;
    description: string;
    categories?: string[];
    customers?: string[];
    twitter?: TwitterInfo;
    isAgency?: boolean;
    pinnedTweetUrl?: string;
    onRequestIntro?: () => void;
}

const categoryColors = {
    PR: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        selected: 'bg-blue-500'
    },
    Content: {
        bg: 'bg-pink-100',
        text: 'text-pink-800',
        selected: 'bg-pink-500'
    },
    Growth: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        selected: 'bg-yellow-500'
    },
    Branding: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        selected: 'bg-green-500'
    },
    Events: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        selected: 'bg-purple-500'
    }
};

export default function CompanyCard({ 
    name, 
    description, 
    categories = [], 
    customers = [],
    twitter, 
    isAgency = false,
    pinnedTweetUrl,
    onRequestIntro 
}: CompanyCardProps) {
    // Only show description if it's different from the Twitter bio
    const shouldShowDescription = description !== twitter?.bio && description !== "Part of a16z's crypto portfolio.";

    const handleLatestCampaignClick = () => {
        if (pinnedTweetUrl) {
            window.open(pinnedTweetUrl, '_blank');
        } else if (twitter?.url) {
            window.open(twitter.url, '_blank');
        }
    };

    return (
        <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{name}</h3>
                {twitter?.url && (
                    <a 
                        href={twitter.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                )}
            </div>
            
            {/* Category Labels */}
            {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {categories.map((category) => {
                        const colors = categoryColors[category as keyof typeof categoryColors];
                        return (
                            <span
                                key={category}
                                className={`px-2 py-1 rounded-lg text-sm font-medium ${colors?.bg || 'bg-gray-100'} ${colors?.text || 'text-gray-800'}`}
                            >
                                {category}
                            </span>
                        );
                    })}
                </div>
            )}

            {twitter?.bio && (
                <p className="text-gray-600 mb-4 leading-relaxed">{twitter.bio}</p>
            )}
            {shouldShowDescription && (
                <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            )}

            {/* Customers Section */}
            {customers.length > 0 && (
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Popular Customers</h4>
                    <div className="flex flex-wrap gap-2">
                        {customers.map((customer) => (
                            <span
                                key={customer}
                                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors"
                            >
                                {customer}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex gap-3 mt-auto pt-4">
                {isAgency ? (
                    <button 
                        className="w-full px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 active:bg-gray-800 transition-colors text-sm font-medium shadow-sm hover:shadow-md"
                        onClick={onRequestIntro || (() => window.location.href = 'mailto:gtm@a16z.com')}
                    >
                        Request Intro
                    </button>
                ) : (
                    <button 
                        className="w-full px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 active:bg-gray-800 transition-colors text-sm font-medium shadow-sm hover:shadow-md"
                        onClick={handleLatestCampaignClick}
                    >
                        Latest Campaign
                    </button>
                )}
            </div>
        </div>
    );
}