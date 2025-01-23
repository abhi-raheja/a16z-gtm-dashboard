'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <header className="bg-white text-black pt-8 pb-8 pl-6 pr-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image 
                                src="/a16zcrypto_Logo.svg"
                                alt="a16z Logo" 
                                width={180}
                                height={35}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-xs text-gray-600 font-black hover:text-black">
                            Made with ❤️ by <Link href="https://x.com/abhihereandnow">Abhi Raheja</Link>
                        </p>
                    </div>
                    <nav className="flex items-center space-x-8">
                        <Link 
                            href="https://x.com/a16zcrypto"
                            target="_blank"
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                fontWeight: 'bold'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            X/Twitter
                        </Link>
                        <div className="relative">
                            <button
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                About
                            </button>
                            {showTooltip && (
                                <div style={{ 
                                    position: 'absolute',
                                    top: 'calc(100% + 8px)',
                                    right: '0',
                                    minWidth: '300px',
                                    maxWidth: '300px',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 50
                                }}>
                                    <div style={{ 
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '20px',
                                        transform: 'rotate(45deg)',
                                        width: '16px',
                                        height: '16px',
                                        backgroundColor: 'black'
                                    }} />
                                    <p style={{ 
                                        position: 'relative',
                                        zIndex: 10,
                                        margin: 0,
                                        lineHeight: '1.5'
                                    }}> 
                                        A curated collection of GTM resources and latest marketing updates from a16z crypto portfolio companies. 
                                        Learn how others are doing it and accelerate your go-to-market strategy.
                                    </p>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}