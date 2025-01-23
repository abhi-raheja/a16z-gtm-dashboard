'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';

const categories = [
    { id: 'companies', label: 'Companies' },
    { id: 'agencies', label: 'Marketing Agencies' },
    { id: 'events', label: 'Upcoming Events' },
    { id: 'kols', label: 'KOLs' },
    { id: 'latest', label: 'Latest Marketing Campaigns' },
    { id: 'community', label: 'Community' }
];

interface SearchwithCategoriesProps {
    selectedCategory: string;
    onCategoryChange: (category: 'companies' | 'agencies' | 'events' | 'kols' | 'latest' | 'community') => void;
}

export default function SearchwithCategories({ selectedCategory, onCategoryChange }: SearchwithCategoriesProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex items-center space-x-4">
                <SearchBar />
                
                {/* Category Selector */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between bg-black text-white px-6 py-4 text-lg rounded-xl min-w-[180px] border-2 border-black focus:outline-none"
                    >
                        <span>{categories.find(c => c.id === selectedCategory)?.label}</span>
                        <svg
                            className={`w-5 h-5 ml-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-full bg-black border-2 border-black rounded-xl shadow-lg z-50">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => {
                                        onCategoryChange(category.id as typeof selectedCategory);
                                        setIsOpen(false);
                                    }}
                                    className={`
                                        block w-full text-left px-4 py-3 text-white hover:bg-gray-900 transition-colors
                                        ${selectedCategory === category.id ? 'bg-gray-900' : ''}
                                        first:rounded-t-lg last:rounded-b-lg
                                    `}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}