'use client'

import React, { useState } from 'react'
import { MainTemplate } from '@/templates/MainTemplate'
import { ContentCard, CardGrid, ProfileDropdown, SearchBar, CTAButton } from '@/components/organisms'
import { H1, Body } from '@/components/atoms'
import { NAV_ITEMS, PROFILE_MENU_ITEMS, DEFAULT_USER_AVATAR, SKILL_CARDS } from '@/lib/constants'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Header component - removed, header is integrated into navigation bar
  const header = null

  // Navigation bar with header elements
  const navigation = (
    <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-gradient-to-r from-[#FF6E4B] via-[#FF4D7B] to-[#B84FB8]">
      <div className="flex items-center gap-2">
        <h1 className="text-white font-bold text-lg">Skillflash</h1>
        {NAV_ITEMS.slice(1).map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center gap-2 px-3 py-2 text-white font-semibold text-sm transition-all duration-300 hover:gap-4"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">›</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-white bg-opacity-20 rounded-lg px-3 py-2">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Skills finden.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-white placeholder-white placeholder-opacity-70 text-sm focus:outline-none"
          />
          <svg className="w-4 h-4 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
          </svg>
        </div>
        <button className="md:hidden text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ProfileDropdown
          avatar={DEFAULT_USER_AVATAR}
          userName="User"
          items={PROFILE_MENU_ITEMS}
        />
      </div>
    </div>
  )

  // Hero section
  const hero = (
    <div 
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#FF6E4B] via-[#FF4D7B] to-[#B84FB8] overflow-hidden"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 95%, 0 85%)',
      }}
    >
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-4 pb-20">
        <H1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 font-bold leading-tight tracking-tight">
          Bring Deine Skills auf das nächste Level
        </H1>
        <Body className="text-white text-opacity-95 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
          Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.
        </Body>

        {/* Search Bar with Button */}
        <div className="flex flex-col items-center gap-6">
          <SearchBar
            placeholder="Skills für den Erfolg finden.."
            onSearch={(query) => setSearchQuery(query)}
            showButton={true}
            onSearchClick={() => console.log('Search clicked')}
            className="w-full max-w-2xl"
          />

          <CTAButton
            onClick={() => console.log('Configure search')}
            variant="tertiary"
            size="md"
          >
            Suche konfigurieren ⇘
          </CTAButton>
        </div>
      </div>
    </div>
  )

  // Main content
  const mainContent = (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <CardGrid
        columns={{
          mobile: 1,
          tablet: 2,
          desktop: 3,
        }}
        gap="lg"
      >
        {SKILL_CARDS.map((card) => (
          <ContentCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            badges={card.badges}
            layout="vertical"
            footer={<Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>}
          />
        ))}
      </CardGrid>
    </div>
  )

  return (
    <MainTemplate
      header={header}
      navigation={navigation}
      hero={hero}
      main={mainContent}
    />
  )
}
