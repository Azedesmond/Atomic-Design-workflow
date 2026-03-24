'use client'

import React, { useState } from 'react'
import { MainTemplate } from '@/templates/MainTemplate'
import { ContentCard, CardGrid, ProfileDropdown, SearchBar, CTAButton } from '@/components/organisms'
import { H1, Body } from '@/components/atoms'
import { Badge } from '@/components/molecules'

// Mock data for content cards
const skillCards = [
  {
    id: 1,
    title: 'Projektmanagement',
    description: 'Als Projektmanagement wird das Verwalten, Planen, Steuern und Kontrollieren von Projekten bezeichnet. Es...',
    image: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      alt: 'Projektmanagement',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'Netzwerk', variant: 'primary-blue' as const },
      { id: 2, label: 'API', variant: 'primary-blue' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Frontend Development beschreibt eine Highfunction web Anwendung. In diesem Kurs lernen Sie...',
    image: {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      alt: 'Frontend Development',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'JavaScript', variant: 'primary-blue' as const },
      { id: 2, label: 'Bootstrap', variant: 'primary-blue' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 3,
    title: 'Grafikdesign',
    description: 'Entdecken Sie wesentlichen, Design-Thinking, Muster, den Ansatz und die hohe...',
    image: {
      src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      alt: 'Grafikdesign',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'Photoshop', variant: 'primary-orange' as const },
      { id: 2, label: 'Sketch', variant: 'primary-orange' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 4,
    title: 'Training',
    description: 'Training ist die physiotheque und Optimierung verbreitete Kosten...',
    image: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      alt: 'Training',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'Personal', variant: 'primary-lila' as const },
      { id: 2, label: 'Keynote', variant: 'primary-lila' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 5,
    title: 'Künstlerische',
    description: 'Ein intensiv in der Kunst Handwerk zur Multimedia, da zu einer...',
    image: {
      src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      alt: 'Künstlerische',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'English', variant: 'primary-fade' as const },
      { id: 2, label: 'Spanish', variant: 'primary-fade' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 6,
    title: 'Design',
    description: 'Design und Gedanken über Zeichnung, Muster, die zu über Seiten...',
    image: {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      alt: 'Design',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'Research', variant: 'secondary-pink' as const },
      { id: 2, label: 'Prototype', variant: 'secondary-pink' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 7,
    title: 'Management',
    description: 'In dieser verlängen Formeln wird unter Management ausgerechnet...',
    image: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      alt: 'Management',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'Lean', variant: 'secondary-pink' as const },
      { id: 2, label: 'Agile', variant: 'secondary-pink' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 8,
    title: 'Lean Startup',
    description: 'Lean Startup ist in der Betriebswirtschaftslehre der Analytiken...',
    image: {
      src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      alt: 'Lean Startup',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'Scrum', variant: 'primary-blue' as const },
      { id: 2, label: 'Metrics', variant: 'primary-blue' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
  {
    id: 9,
    title: 'Blockchain',
    description: 'Blockchain, Chromabruch, Ethik aufs Blick des Leaks und in der...',
    image: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      alt: 'Blockchain',
      aspectRatio: 'square' as const,
    },
    badges: [
      { id: 1, label: 'STD', variant: 'primary-lila' as const },
      { id: 2, label: 'Architecture', variant: 'primary-lila' as const },
    ],
    footer: <Body size="sm" className="text-muted-foreground">Mehr anzeigen</Body>,
  },
]

// Navigation items
const navItems = [
  { label: 'Skillflash', href: '#' },
  { label: 'Expert:in werden', href: '#' },
  { label: 'Enterprise', href: '#' },
]

// Profile dropdown items
const profileItems = [
  { id: 1, label: 'Registrieren', onClick: () => console.log('Registrieren') },
  { id: 2, label: 'Anmelden', onClick: () => console.log('Anmelden') },
  { id: 3, label: 'Expert:in werden', onClick: () => console.log('Expert:in werden') },
  { id: 4, label: 'Enterprise', onClick: () => console.log('Enterprise') },
  { id: 5, label: 'Hilfe?', onClick: () => console.log('Hilfe') },
]

// User avatar
const userAvatar = {
  src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces',
  alt: 'User Profile',
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Header component
  const header = (
    <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-border bg-white">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold text-foreground">Skillflash</h1>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Skills finden..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="hidden sm:block px-3 py-2 rounded-md bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <ProfileDropdown
          avatar={userAvatar}
          userName="Aze"
          items={profileItems}
        />
      </div>
    </div>
  )

  // Navigation bar
  const navigation = (
    <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-8 bg-gradient-to-r from-[#FF6E4B] via-[#FF4D7B] to-[#B84FB8]">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-white hover:opacity-80 font-semibold text-sm transition-opacity"
        >
          {item.label}
        </a>
      ))}
    </div>
  )

  // Hero section
  const hero = (
    <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#FF6E4B] via-[#FF4D7B] to-[#B84FB8] overflow-hidden">
      {/* Curved wave background */}
      <div className="absolute inset-x-0 bottom-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,40L120,45C240,50,480,60,720,60C960,60,1200,50,1320,45L1440,40L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl">
        <H1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3 font-bold">
          Expert:innen, Events und diverse Skills
        </H1>
        <Body className="text-white text-opacity-95 mb-8 text-base leading-relaxed">
          Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.
        </Body>

        {/* Search Bar */}
        <SearchBar
          placeholder="Skills für den Erfolg finden..."
          onSearch={(query) => setSearchQuery(query)}
          className="mb-6"
        />

        <CTAButton
          onClick={() => console.log('Configure search')}
          variant="primary"
          size="md"
        >
          Suche konfigurieren
        </CTAButton>
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
        {skillCards.map((card) => (
          <ContentCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            badges={card.badges}
            layout="vertical"
            footer={card.footer}
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
