export interface Agency {
    id: string;
    name: string;
    description: string;
    website: string;
    categories: string[];
    customers: string[];
    twitter?: {
        handle: string | null;
        url: string | null;
        bio: string | null;
    };
}

export const agencies: Agency[] = [
    {
        id: "1",
        name: "Hype",
        description: "A leading crypto and web3 marketing agency specializing in strategic communications, brand development, and community growth.",
        website: "https://www.hype.partners/",
        categories: ["Growth", "Content", "Branding"],
        customers: ["Sui", "Ethena", "Ledger"],
        twitter: {
            handle: "hypepartners",
            url: "https://x.com/hypepartners",
            bio: null
        }
    },
    {
        id: "2",
        name: "Serotonin",
        description: "A full-service marketing firm dedicated to emerging technologies and web3 projects, offering comprehensive marketing solutions and strategic advisory.",
        website: "https://serotonin.co/",
        categories: ["Content", "PR", "Branding", "Events"],
        customers: ["Alchemy", "Story", "Galxe"],
        twitter: {
            handle: "serotonin_hq",
            url: "https://twitter.com/serotonin_hq",
            bio: null
        }
    },
    {
        id: "3",
        name: "Invisible North",
        description: "A creative agency specializing in brand strategy, design, and experiential marketing for web3 and technology companies.",
        website: "https://invisiblenorth.com/",
        categories: ["Events"],
        customers: ["Coinbase", "a16z", "Consensys"],
        twitter: {
            handle: "InvisibleNorth_",
            url: "https://x.com/InvisibleNorth_",
            bio: null
        }
    },
    {
        id: "4",
        name: "Myosin",
        description: "A specialized marketing agency focused on blockchain technology and crypto projects, providing strategic communications and growth solutions.",
        website: "https://myosin.co/",
        categories: ["Content", "PR"],
        customers: ["Ripple", "Risc Zero", "Polygon"],
        twitter: {
            handle: "myosin_xyz",
            url: "https://x.com/myosin_xyz",
            bio: null
        }
    },
    {
        id: "5",
        name: "Scrib3",
        description: "A content-focused marketing agency specializing in web3 narratives, technical documentation, and community engagement.",
        website: "https://scrib3.io/",
        categories: ["Content", "PR", "Branding", "Events"],
        customers: ["Monad", "Optimism", "Uniswap"],
        twitter: {
            handle: "scrib3_co",
            url: "https://x.com/scrib3_co",
            bio: null
        }
    },
    {
        id: "6",
        name: "Market Across",
        description: "A global marketing agency specializing in blockchain and cryptocurrency projects, offering PR, content creation, and strategic marketing services.",
        website: "https://marketacross.com/",
        categories: ["Content", "PR"],
        customers: ["Bybit", "Pyth", "Immutable"],
        twitter: {
            handle: "marketacross",
            url: "https://twitter.com/marketacross",
            bio: null
        }
    }
];
