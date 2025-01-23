import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaRetweet, FaComment } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

interface TweetProps {
    text: string;
    created_at: string;
    author: {
        name: string;
        username: string;
        profile_image_url: string;
    };
    public_metrics: {
        like_count: number;
        retweet_count: number;
        reply_count: number;
    };
    url: string;
}

const Tweet: React.FC<TweetProps> = ({ text, created_at, author, public_metrics, url }) => {
    const [isHovered, setIsHovered] = useState(false);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatNumber = (num: number) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.2 }}
        >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 relative cursor-pointer">
                {/* Author info and X logo */}
                <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                        <Image
                            src={author.profile_image_url}
                            alt={author.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div className="ml-3">
                            <div className="font-semibold text-gray-900 dark:text-white">{author.name}</div>
                            <div className="text-gray-500 dark:text-gray-400">@{author.username}</div>
                        </div>
                    </div>
                    <FaXTwitter size={20} className="text-gray-500 hover:text-blue-500 transition-colors" />
                </div>

                {/* Tweet content */}
                <div className="text-gray-800 dark:text-gray-200 mb-3">{text}</div>

                {/* Date */}
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {formatDate(created_at)}
                </div>

                {/* Engagement metrics */}
                <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                        <FaComment className="w-4 h-4" />
                        <span>{formatNumber(public_metrics.reply_count)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaRetweet className="w-4 h-4" />
                        <span>{formatNumber(public_metrics.retweet_count)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaHeart className={`w-4 h-4 ${isHovered ? 'text-red-500' : ''}`} />
                        <span>{formatNumber(public_metrics.like_count)}</span>
                    </div>
                </div>

                {/* Hover effect overlay */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-lg"
                    />
                )}
            </div>
        </motion.a>
    );
};

export default Tweet;
