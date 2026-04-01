/**
 * Application-wide constants and mock data
 * Used across pages and components
 */

// Navigation items
export const NAV_ITEMS = [
  { label: 'Skillflash', href: '#' },
  { label: 'Expert:in werden', href: '#' },
  { label: 'Enterprise', href: '#' },
]

// Profile dropdown menu items
export const PROFILE_MENU_ITEMS = [
  { id: 1, label: 'Registrieren', onClick: () => console.log('Registrieren') },
  { id: 2, label: 'Anmelden', onClick: () => console.log('Anmelden') },
  { id: 3, label: 'Expert:in werden', onClick: () => console.log('Expert:in werden') },
  { id: 4, label: 'Enterprise', onClick: () => console.log('Enterprise') },
  { id: 5, label: 'Hilfe?', onClick: () => console.log('Hilfe') },
]

// Default user avatar
export const DEFAULT_USER_AVATAR = {
  src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces',
  alt: 'User Profile',
}

// Skill cards mock data
export const SKILL_CARDS = [
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
  },
]
