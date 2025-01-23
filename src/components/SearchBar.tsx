'use client';

import { useState, useEffect, useRef } from 'react';
import { searchAcrossCategories, SearchResult } from '../services/search';
import Link from 'next/link';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim()) {
            const searchResults = searchAcrossCategories(query);
            setResults(searchResults);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    };

    const getResultIcon = (type: SearchResult['type']) => {
        switch (type) {
            case 'company':
                return '🏢';
            case 'agency':
                return '🎯';
            case 'event':
                return '📅';
            case 'campaign':
                return '📣';
            case 'kol':
                return '👤';
            case 'community':
                return '👥';
            default:
                return '📌';
        }
    };

    return (
        <div className="relative flex-1" ref={dropdownRef}>
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search companies, agencies, events, campaigns..."
                    className="w-full px-6 py-4 text-lg rounded-xl border-[2px] border-black focus:outline-none focus:border-black placeholder:text-gray-400"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                        className="text-gray-400"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </svg>
                </div>
            </div>

            {/* Search Results Dropdown */}
            {isOpen && results.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border-2 border-black max-h-[70vh] overflow-y-auto">
                    {results.map((result, index) => (
                        <Link
                            href={result.url || '#'}
                            key={`${result.id}-${index}`}
                            className="block"
                        >
                            <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0">
                                <div className="flex items-start space-x-3">
                                    <span className="text-2xl">{getResultIcon(result.type)}</span>
                                    <div>
                                        <h3 className="font-semibold text-lg">{result.title}</h3>
                                        {result.description && (
                                            <p className="text-gray-600 text-sm mt-1">{result.description}</p>
                                        )}
                                        <div className="flex items-center space-x-2 mt-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                {result.type}
                                            </span>
                                            {result.category && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {result.category}
                                                </span>
                                            )}
                                            {result.location && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    {result.location}
                                                </span>
                                            )}
                                            {result.date && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                    {result.date}
                                                </span>
                                            )}
                                            {result.followers && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                    {result.followers} followers
                                                </span>
                                            )}
                                            {result.tier && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    {result.tier}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}