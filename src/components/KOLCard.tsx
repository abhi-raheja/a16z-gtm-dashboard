import React from 'react';
import Image from 'next/image';
import { KOL } from '@/data/kols';
import { FaXTwitter } from 'react-icons/fa6';

// Category colors mapping
const categoryColors: { [key: string]: string } = {
    'DeFi': 'bg-blue-100 text-blue-800',
    'Gaming': 'bg-purple-100 text-purple-800',
    'AI': 'bg-green-100 text-green-800',
    'Infrastructure': 'bg-orange-100 text-orange-800',
    'Consumer': 'bg-pink-100 text-pink-800',
    'Security': 'bg-red-100 text-red-800',
    'NFT': 'bg-indigo-100 text-indigo-800',
    'Media': 'bg-yellow-100 text-yellow-800',
    'Developer Tools': 'bg-cyan-100 text-cyan-800',
    'Data': 'bg-emerald-100 text-emerald-800',
    'Web3': 'bg-violet-100 text-violet-800'
};

// Pricing mapping
const tierPricing: { [key: string]: string } = {
    'Tier 1': '$5,000',
    'Tier 2': '$2,500',
    'Tier 3': '$1,500'
};

interface KOLCardProps {
    kol: KOL;
}

export default function KOLCard({ kol }: KOLCardProps) {
    // Function to get Twitter profile image URL
    const getTwitterProfileImage = (username: string) => {
        return `https://unavatar.io/twitter/${username}`;
    };

    // Function to format follower count
    const formatFollowers = (followers: string) => {
        return followers.replace(/[kK]/, 'K');
    };

    // Function to get category color
    const getCategoryColor = (category: string) => {
        return categoryColors[category] || 'bg-gray-100 text-gray-800';
    };

    // Function to get pricing
    const getPricing = (tier: string) => {
        return tierPricing[tier] || '$1,500';
    };

    return (
        <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center space-x-4">
                {/* Profile Image */}
                <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                        src={getTwitterProfileImage(kol.twitter)}
                        alt={kol.name}
                        fill
                        className="rounded-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Name and Category */}
                <div className="flex-grow">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{kol.name}</h3>
                        {kol.twitter && (
                            <a
                                href={`https://twitter.com/${kol.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-black transition-colors"
                            >
                                <FaXTwitter className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                    <div className="mt-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(kol.category)}`}>
                            {kol.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-4 flex items-center space-x-4">
                <div className="text-sm">
                    <span className="font-medium text-gray-900">
                        {formatFollowers(kol.followers)}
                    </span>
                    <span className="text-gray-500"> followers</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="text-sm">
                    <span className="font-medium text-gray-900">{getPricing(kol.tier)}</span>
                    <span className="text-gray-500"> per post</span>
                </div>
            </div>

            {/* Request Intro Button */}
            <div className="mt-4">
                <button
                    onClick={() => {
                        window.open(`mailto:help@a16z.com?subject=Request Introduction: ${kol.name}&body=I would like to request an introduction to ${kol.name}.%0D%0A%0D%0AUse Case:%0D%0A%0D%0ATimeline:%0D%0A%0D%0AAdditional Context:`, '_blank');
                    }}
                    className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                >
                    Request Intro
                </button>
            </div>
        </div>
    );
}
