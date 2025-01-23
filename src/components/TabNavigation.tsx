'use client';

import { useState } from 'react';

const tabs = [
    { id: 'latest', label: 'Latest Campaigns', color: '#F3F4F6' },
    { id: 'companies', label: 'Companies', color: '#E5E7EB' },
    { id: 'agencies', label: 'Marketing Agencies', color: '#D1D5DB' },
    { id: 'events', label: 'Upcoming Events', color: '#E5E7EB' },
    { id: 'kols', label: 'KOLs', color: '#F3F4F6' }
];

export default function TabNavigation({ activeTab, onTabChange }: { 
    activeTab: string;
    onTabChange: (tabId: string) => void;
}) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-5 gap-20">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            py-6
                            px-4
                            text-center
                            font-medium
                            text-base
                            border-10
                            border-black
                            transition-all
                            ${activeTab === tab.id
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-gray-100'
                            }
                        `}
                        style={{
                            marginLeft: index === 0 ? '0' : '-2px'  // Prevent double borders
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}