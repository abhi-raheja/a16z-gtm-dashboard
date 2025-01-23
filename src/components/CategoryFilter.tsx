'use client';
import { Category } from '@/types/company';

interface CategoryFilterProps {
    selectedCategory: Category | '';
    onCategoryChange: (category: Category | '') => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <select 
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as Category | '')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
        >
            <option value="">All Categories</option>
            <option value="DeFi">DeFi</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="NFT">NFT</option>
            <option value="DAO">DAO</option>
            <option value="Gaming">Gaming</option>
            <option value="Security">Security</option>
        </select>
    );
}