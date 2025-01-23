import { NextResponse } from 'next/server';

const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAAKMyQEAAAAAy0KLkKQNypO%2Ffz2sMeRVgDgaD18%3DhRtWfM3qApdtCll3f9CaRNLLQdhGfV71EQyh1XKkhS6lF3zsYf';
const COMMUNITY_ID = '1533904603997036545';

async function fetchCommunityTweets() {
    try {
        // Search for tweets about crypto/web3 marketing
        const searchQueries = [
            'crypto marketing strategy',
            'web3 marketing tips',
            'crypto GTM',
            'web3 go to market',
            'crypto startup marketing',
            'blockchain marketing strategy',
            'NFT marketing',
            'DeFi marketing',
            'crypto community building',
            'web3 growth strategy'
        ];

        let allTweets: any[] = [];
        let allUsers: any[] = [];

        for (const query of searchQueries) {
            const encodedQuery = encodeURIComponent(query);
            const tweetsUrl = `https://api.twitter.com/2/tweets/search/recent?query=${encodedQuery}&max_results=20&expansions=author_id&tweet.fields=created_at,text,public_metrics,id,context_annotations&user.fields=name,username,profile_image_url,description`;
            
            console.log('Fetching tweets for query:', query);
            
            const tweetsResponse = await fetch(tweetsUrl, {
                headers: {
                    'Authorization': `Bearer ${BEARER_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                next: { revalidate: 300 } // Cache for 5 minutes
            });

            if (!tweetsResponse.ok) {
                console.error('Twitter API Error for query:', query, await tweetsResponse.text());
                continue;
            }

            const tweetsData = await tweetsResponse.json();
            console.log('Tweets response for query:', query, JSON.stringify(tweetsData, null, 2));

            if (tweetsData.data && tweetsData.data.length > 0) {
                // Filter tweets to ensure they're relevant to crypto/web3 marketing
                const relevantTweets = tweetsData.data.filter((tweet: any) => {
                    const text = tweet.text.toLowerCase();
                    
                    // Check for crypto/web3 terms
                    const hasCryptoTerms = 
                        text.includes('crypto') || 
                        text.includes('web3') || 
                        text.includes('blockchain') ||
                        text.includes('defi') ||
                        text.includes('nft') ||
                        text.includes('token') ||
                        text.includes('dao') ||
                        text.includes('dapp');
                    
                    // Check for marketing/GTM terms
                    const hasMarketingTerms = 
                        text.includes('marketing') || 
                        text.includes('gtm') ||
                        text.includes('go to market') ||
                        text.includes('growth') ||
                        text.includes('community') ||
                        text.includes('strategy') ||
                        text.includes('adoption');

                    // Tweet must contain both crypto and marketing terms
                    return hasCryptoTerms && hasMarketingTerms;
                });

                // Check user bio/description for relevance
                const relevantTweetsWithUsers = relevantTweets.filter((tweet: any) => {
                    const user = tweetsData.includes?.users?.find(
                        (u: any) => u.id === tweet.author_id
                    );
                    
                    if (!user?.description) return false;

                    const userBio = user.description.toLowerCase();
                    return (
                        userBio.includes('crypto') ||
                        userBio.includes('web3') ||
                        userBio.includes('blockchain') ||
                        userBio.includes('marketing') ||
                        userBio.includes('growth') ||
                        userBio.includes('strategy')
                    );
                });

                allTweets.push(...relevantTweetsWithUsers);
                if (tweetsData.includes?.users) {
                    allUsers.push(...tweetsData.includes.users);
                }
            }
        }

        // If we found any tweets, return them
        if (allTweets.length > 0) {
            // Remove duplicates
            allTweets = [...new Map(allTweets.map(tweet => [tweet.id, tweet])).values()];
            allUsers = [...new Map(allUsers.map(user => [user.id, user])).values()];

            // Sort by engagement (likes + retweets) to get high-quality content
            allTweets.sort((a, b) => {
                const aEngagement = a.public_metrics.like_count + a.public_metrics.retweet_count;
                const bEngagement = b.public_metrics.like_count + b.public_metrics.retweet_count;
                return bEngagement - aEngagement;
            });

            // Take the top 10 most engaging tweets
            allTweets = allTweets.slice(0, 10);

            // Add tweet URLs
            allTweets = allTweets.map(tweet => ({
                ...tweet,
                url: `https://twitter.com/i/web/status/${tweet.id}`
            }));

            return {
                data: allTweets,
                includes: {
                    users: allUsers
                }
            };
        }

        console.log('No relevant tweets found, falling back to mock data');
        return mockTweets;
    } catch (error) {
        console.error('Error fetching tweets:', error);
        console.log('Falling back to mock data due to error');
        return mockTweets;
    }
}

// Mock data as fallback
const mockTweets = {
    data: [
        {
            id: '1',
            text: 'Key insights on crypto marketing: 1. Community-first approach 2. Educational content strategy 3. Cross-chain engagement 4. Token-gated experiences. Building trust is essential in Web3 GTM.',
            created_at: '2025-01-21T12:00:00.000Z',
            author_id: '1',
            url: 'https://twitter.com/i/web/status/1',
            public_metrics: {
                like_count: 150,
                retweet_count: 45,
                reply_count: 12
            }
        },
        {
            id: '2',
            text: 'Web3 Marketing Playbook 2025: 1. NFT-powered loyalty programs 2. DAO-based decision making 3. DeFi user acquisition strategies 4. Blockchain analytics for growth.',
            created_at: '2025-01-20T15:30:00.000Z',
            author_id: '1',
            url: 'https://twitter.com/i/web/status/2',
            public_metrics: {
                like_count: 230,
                retweet_count: 78,
                reply_count: 25
            }
        },
        {
            id: '3',
            text: 'Crypto GTM Strategy: Focus on these pillars: 1. Security & trust building 2. Community engagement 3. Token utility & value 4. Cross-chain compatibility. What\'s working for your project?',
            created_at: '2025-01-19T18:45:00.000Z',
            author_id: '1',
            url: 'https://twitter.com/i/web/status/3',
            public_metrics: {
                like_count: 180,
                retweet_count: 56,
                reply_count: 42
            }
        }
    ],
    includes: {
        users: [{
            id: '1',
            name: 'a16z GTM',
            username: 'a16zGTM',
            profile_image_url: 'https://pbs.twimg.com/profile_images/1420130336283242499/jXQQT4a8_400x400.jpg'
        }]
    }
};

export async function GET() {
    try {
        const data = await fetchCommunityTweets();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in GET handler:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to fetch tweets' },
            { status: 500 }
        );
    }
}
