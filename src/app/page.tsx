'use client';

import React, { useState } from 'react'
import Header from '@/components/Header'
import CompanyList from '@/components/CompanyList'
import SearchwithCategories from '@/components/SearchwithCategories'
import { agencies } from '@/data/agencies'
import companies from '@/data/companies'
import events from '@/data/events'
import kols from '@/data/kols'
import CompanyCard from '@/components/CompanyCard'
import EventCard from '@/components/EventCard'
import KOLCard from '@/components/KOLCard'
import CommunityFeed from '@/components/CommunityFeed'
import FilterBar from '@/components/FilterBar'
import AnimatedGlobe from '@/components/AnimatedGlobe'
import TypewriterText from '@/components/TypewriterText'
import ComingSoon from '@/components/ComingSoon'

// Get unique categories from all agencies
const allCategories = Array.from(
  new Set(agencies.flatMap(agency => agency.categories))
).sort();

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'companies' | 'agencies' | 'events' | 'kols' | 'community' | 'latest'>('companies');
  const [selectedAgencyCategories, setSelectedAgencyCategories] = useState<string[]>([]);
  const [selectedCompanyCategories, setSelectedCompanyCategories] = useState<string[]>([]);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  const handleAgencyCategoryClick = (category: string) => {
    setSelectedAgencyCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleCompanyCategoryClick = (category: string) => {
    setSelectedCompanyCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleFirstLineComplete = () => {
    setShowSecondLine(true);
  };

  const handleSecondLineComplete = () => {
    setParagraphVisible(true);
  };

  // Calculate category counts
  const companyCategoryCounts = companies.reduce((acc, company) => {
    acc[company.category] = (acc[company.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const agencyCategoryCounts = agencies.reduce((acc, agency) => {
    agency.categories.forEach(category => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // Create a Map to store unique KOLs based on Twitter handle
  const uniqueKols = kols.reduce((map, kol) => {
    if (!map.has(kol.twitter)) {
      map.set(kol.twitter, kol);
    }
    return map;
  }, new Map());

  return (
    <React.Fragment>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <div className="relative">
          {/* Hero Section with dark background */}
          <div className="bg-black text-white relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent opacity-90"></div>
            
            {/* Radial gradient for subtle glow */}
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(circle at top right, rgba(144, 238, 144, 0.1), transparent 60%)',
            }}></div>
            
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 flex justify-between items-center relative">
              <div className="max-w-2xl relative z-10">
                <h1 className="text-5xl font-bold leading-[1.1] tracking-tight">
                  <TypewriterText 
                    wordList={["teams", "founders", "marketers", "growth hackers"]}
                    onComplete={() => setParagraphVisible(true)}
                  />
                </h1>
                <p className={`text-xl mt-8 text-gray-400 whitespace-nowrap transition-opacity duration-500 ${paragraphVisible ? 'opacity-100' : 'opacity-0'}`}>
                  Learn from and collaborate with founders from our portfolio companies.
                </p>
                
                {/* Adding the subtle line decoration */}
                <div className={`mt-12 h-px w-16 bg-gradient-to-r from-gray-700 to-transparent transition-opacity duration-500 ${paragraphVisible ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              <div className="relative z-0 transform hover:scale-105 transition-transform duration-500">
                <AnimatedGlobe />
              </div>
            </div>
          </div>

          {/* Clean break instead of gradient transition */}
          <div className="h-16"></div>

          {/* Search Section */}
          <div className="max-w-7xl mx-auto px-6">
            <SearchwithCategories 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto py-12">
            {selectedCategory === 'companies' && (
              <div>
                <FilterBar 
                  categories={Array.from(new Set(companies.map(company => company.category)))}
                  selectedCategories={selectedCompanyCategories}
                  onCategoryClick={handleCompanyCategoryClick}
                  itemCounts={companyCategoryCounts}
                  isAgencyFilter={false}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companies
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .filter(company => 
                      selectedCompanyCategories.length === 0 || 
                      selectedCompanyCategories.includes(company.category)
                    )
                    .map((company) => (
                      <CompanyCard
                        key={company.name}
                        name={company.name}
                        description={company.description}
                        categories={[company.category]}
                        twitter={company.twitter}
                        isAgency={false}
                        pinnedTweetUrl={company.twitter?.pinnedTweetUrl}
                      />
                    ))}
                </div>
              </div>
            )}
            {selectedCategory === 'agencies' && (
              <div>
                <FilterBar 
                  categories={allCategories}
                  selectedCategories={selectedAgencyCategories}
                  onCategoryClick={handleAgencyCategoryClick}
                  itemCounts={agencyCategoryCounts}
                  isAgencyFilter={true}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agencies
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .filter(agency => 
                      selectedAgencyCategories.length === 0 || 
                      agency.categories.some(category => 
                        selectedAgencyCategories.includes(category)
                      )
                    )
                    .map((agency) => (
                      <CompanyCard
                        key={agency.name}
                        name={agency.name}
                        description={agency.description}
                        categories={agency.categories}
                        customers={agency.customers}
                        isAgency={true}
                        pinnedTweetUrl={agency.twitter?.pinnedTweetUrl}
                      />
                    ))}
                </div>
              </div>
            )}
            {selectedCategory === 'events' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                  {events
                    .sort((a, b) => {
                      // Sort by date if available, otherwise by name
                      if (a.dates && b.dates) {
                        return a.dates.localeCompare(b.dates);
                      }
                      return a.name.localeCompare(b.name);
                    })
                    .map((event) => (
                      <EventCard key={event.name} event={event} />
                    ))}
                </div>
              </div>
            )}
            {selectedCategory === 'kols' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                  {Array.from(uniqueKols.values())
                    .sort((a, b) => b.followers.localeCompare(a.followers))
                    .map((kol) => (
                      <KOLCard key={`${kol.name}-${kol.twitter}`} kol={kol} />
                    ))}
                </div>
              </div>
            )}
            {selectedCategory === 'community' && <ComingSoon />}
            {selectedCategory === 'latest' && <ComingSoon />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}