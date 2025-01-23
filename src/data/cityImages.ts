interface CityImageMap {
    [key: string]: string;
}

export const cityImages: CityImageMap = {
    'Miami': 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
    'Davos': '/images/davos.jpg',
    'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    'Hong Kong': 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80',
    'Denver': 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=800&q=80',
    'Amsterdam': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
    'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    'Berlin': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    'Paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    'Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    'Prague': 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
    // Default image for any city not in the list
    'default': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80'
};

export default cityImages;
