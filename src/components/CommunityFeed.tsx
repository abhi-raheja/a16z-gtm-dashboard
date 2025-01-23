import React from 'react';
import useSWR from 'swr';
import Tweet from './Tweet';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CommunityFeed = () => {
    const { data: tweets, error } = useSWR('/api/twitter', fetcher, {
        refreshInterval: 300000, // Refresh every 5 minutes
    });

    if (error) {
        console.error('Error fetching tweets:', error);
    }

    if (!tweets?.data || !tweets?.includes?.users) {
        return null;
    }

    return (
        <div className="w-full">
            {tweets.data.map((tweet: any) => {
                const author = tweets.includes.users.find(
                    (user: any) => user.id === tweet.author_id
                );
                return (
                    <Tweet
                        key={tweet.id}
                        text={tweet.text}
                        created_at={tweet.created_at}
                        author={author}
                        public_metrics={tweet.public_metrics}
                        url={tweet.url}
                    />
                );
            })}
        </div>
    );
};

export default CommunityFeed;
