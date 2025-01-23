import React from 'react';
import Image from 'next/image';
import { Event } from '@/data/events';
import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { cityImages } from '@/data/cityImages';

interface EventCardProps {
    event: Event;
}

function getCityImage(location: string): string {
    // Try to find an exact match first
    if (location in cityImages) {
        return cityImages[location];
    }
    
    // If no exact match, try to find a partial match
    const cityMatch = Object.keys(cityImages).find(city => 
        location.toLowerCase().includes(city.toLowerCase())
    );
    
    return cityMatch ? cityImages[cityMatch] : cityImages.default;
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            {/* City Image */}
            <div className="relative h-48">
                <Image
                    src={getCityImage(event.location)}
                    alt={`${event.location} cityscape`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-6">
                {/* Event Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {event.name}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                    {/* Location */}
                    <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{event.location}</span>
                    </div>
                    
                    {/* Dates */}
                    <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{event.dates}</span>
                    </div>
                </div>

                {/* Website Button */}
                <a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-900 text-white rounded-md
                             hover:bg-gray-800 transition-colors duration-300"
                >
                    <span>Visit Website</span>
                    <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                </a>
            </div>
        </div>
    );
}
