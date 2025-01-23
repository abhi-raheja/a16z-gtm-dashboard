interface FilterBarProps {
    categories: string[];
    selectedCategories: string[];
    onCategoryClick: (category: string) => void;
    itemCounts: Record<string, number>;
    isAgencyFilter?: boolean;
}

// Marketing agency service colors
const agencyColors: Record<string, { bg: string; text: string; selected: { bg: string; text: string }; hover: string }> = {
    PR: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        selected: { bg: 'bg-blue-800', text: 'text-blue-100' },
        hover: 'hover:bg-blue-200'
    },
    Content: {
        bg: 'bg-pink-100',
        text: 'text-pink-800',
        selected: { bg: 'bg-pink-800', text: 'text-pink-100' },
        hover: 'hover:bg-pink-200'
    },
    Growth: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        selected: { bg: 'bg-yellow-800', text: 'text-yellow-100' },
        hover: 'hover:bg-yellow-200'
    },
    Branding: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        selected: { bg: 'bg-green-800', text: 'text-green-100' },
        hover: 'hover:bg-green-200'
    },
    Events: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        selected: { bg: 'bg-purple-800', text: 'text-purple-100' },
        hover: 'hover:bg-purple-200'
    }
};

// Company category colors
const companyColors: Record<string, { bg: string; text: string; selected: { bg: string; text: string }; hover: string }> = {
    Infrastructure: {
        bg: 'bg-indigo-100',
        text: 'text-indigo-800',
        selected: { bg: 'bg-indigo-800', text: 'text-indigo-100' },
        hover: 'hover:bg-indigo-200'
    },
    DeFi: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        selected: { bg: 'bg-orange-800', text: 'text-orange-100' },
        hover: 'hover:bg-orange-200'
    },
    Gaming: {
        bg: 'bg-rose-100',
        text: 'text-rose-800',
        selected: { bg: 'bg-rose-800', text: 'text-rose-100' },
        hover: 'hover:bg-rose-200'
    },
    NFT: {
        bg: 'bg-fuchsia-100',
        text: 'text-fuchsia-800',
        selected: { bg: 'bg-fuchsia-800', text: 'text-fuchsia-100' },
        hover: 'hover:bg-fuchsia-200'
    },
    DAO: {
        bg: 'bg-cyan-100',
        text: 'text-cyan-800',
        selected: { bg: 'bg-cyan-800', text: 'text-cyan-100' },
        hover: 'hover:bg-cyan-200'
    },
    Security: {
        bg: 'bg-teal-100',
        text: 'text-teal-800',
        selected: { bg: 'bg-teal-800', text: 'text-teal-100' },
        hover: 'hover:bg-teal-200'
    },
    Analytics: {
        bg: 'bg-lime-100',
        text: 'text-lime-800',
        selected: { bg: 'bg-lime-800', text: 'text-lime-100' },
        hover: 'hover:bg-lime-200'
    }
};

// Default colors for categories without specific colors
const defaultColors = {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    selected: { bg: 'bg-gray-800', text: 'text-gray-100' },
    hover: 'hover:bg-gray-200'
};

export default function FilterBar({ 
    categories, 
    selectedCategories, 
    onCategoryClick,
    itemCounts,
    isAgencyFilter = false 
}: FilterBarProps) {
    const categoryColors = isAgencyFilter ? agencyColors : companyColors;

    return (
        <div className="bg-gradient-to-br from-yellow-50 via-green-50 to-emerald-50 rounded-xl p-4 shadow-sm border border-gray-100 mb-8 relative overflow-hidden">
            {/* Abstract Pattern */}
            <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* Gradient Definitions */}
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 0.3 }} />
                        </linearGradient>
                        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#34D399', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#FBBF24', stopOpacity: 0.3 }} />
                        </linearGradient>
                        <pattern id="smallDots" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="5" cy="5" r="1" fill="#34D399" fillOpacity="0.3" />
                        </pattern>
                    </defs>

                    {/* Right-aligned Pattern Group */}
                    <g transform="translate(50, 0)">
                        {/* Background Shapes */}
                        <path d="M0,50 Q25,25 50,50" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                        <path d="M0,30 Q25,55 50,30" fill="none" stroke="url(#grad2)" strokeWidth="2" />
                        
                        {/* Colored Circles */}
                        <circle cx="30" cy="20" r="15" fill="#FCD34D" fillOpacity="0.1" />
                        <circle cx="10" cy="70" r="20" fill="#34D399" fillOpacity="0.1" />
                        <circle cx="40" cy="65" r="25" fill="#10B981" fillOpacity="0.1" />

                        {/* Floating Shapes */}
                        <rect x="35" y="45" width="10" height="10" fill="#FBBF24" fillOpacity="0.2" transform="rotate(45 40 50)" />
                        <rect x="15" y="25" width="8" height="8" fill="#34D399" fillOpacity="0.2" transform="rotate(30 20 30)" />
                        <rect x="25" y="75" width="12" height="12" fill="#10B981" fillOpacity="0.2" transform="rotate(60 30 80)" />

                        {/* Pattern Overlay */}
                        <rect width="50" height="100" fill="url(#smallDots)" />
                    </g>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Filter by {isAgencyFilter ? 'Services' : 'Category'}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                        const colors = categoryColors[category] || defaultColors;
                        const isSelected = selectedCategories.includes(category);
                        const count = itemCounts[category] || 0;
                        
                        return isAgencyFilter ? (
                            // Agency Filter Style - Simple, without counts
                            <button
                                key={category}
                                onClick={() => onCategoryClick(category)}
                                className={`
                                    px-4 py-2 rounded-lg text-sm font-medium transition-all
                                    transform hover:scale-105 active:scale-95
                                    ${isSelected 
                                        ? `${colors.selected.bg} ${colors.selected.text}` 
                                        : `${colors.bg} ${colors.text} ${colors.hover}`
                                    }
                                `}
                            >
                                {category}
                                {isSelected && (
                                    <span className="ml-2 inline-block">
                                        ✕
                                    </span>
                                )}
                            </button>
                        ) : (
                            // Company Filter Style - With counts and more prominent design
                            <button
                                key={category}
                                onClick={() => onCategoryClick(category)}
                                className={`
                                    group relative flex items-center gap-2 px-4 py-2 
                                    rounded-lg text-sm font-medium transition-all
                                    shadow-sm border border-opacity-10
                                    transform hover:scale-105 active:scale-95
                                    ${isSelected 
                                        ? `${colors.selected.bg} ${colors.selected.text} border-current` 
                                        : `${colors.bg} ${colors.text} ${colors.hover} border-current`
                                    }
                                `}
                            >
                                <span>{category}</span>
                                <span className={`
                                    inline-flex items-center justify-center 
                                    min-w-[1.5rem] px-1.5 py-0.5 rounded-full 
                                    ${isSelected 
                                        ? `bg-current bg-opacity-20 ${colors.selected.text}` 
                                        : `bg-current bg-opacity-10 ${colors.text}`
                                    }
                                `}>
                                    {count}
                                </span>
                                {isSelected && (
                                    <span className="ml-1">
                                        ✕
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
