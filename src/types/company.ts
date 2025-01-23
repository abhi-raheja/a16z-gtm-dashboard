export interface MarketingCampaign {
    title: string;
    description: string;
    date: string;
    pinnedTweetUrl?: string;
}

export interface TwitterInfo {
    handle: string | null;
    url: string | null;
    bio: string | null;
    pinned_tweet_url: string | null;
}

export interface Company {
    id: string;
    name: string;
    description: string;
    website: string;
    category: string;
    twitter?: TwitterInfo;
    marketingCampaign?: MarketingCampaign;
}