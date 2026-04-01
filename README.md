# Skillflash - Expert Skills & Training Platform

A modern, responsive web application built with Next.js, React, and TailwindCSS following Atomic Design principles.

## Project Structure

```
/
├── app/
│   ├── page.tsx           # Home page - main landing page
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── globals.css        # Global styles and design tokens
│   ├── demo/              # Component showcase (Molecules & Organisms)
│   └── demo-interactive/  # Interactive components demo (Tags & Dropdowns)
│
├── components/
│   ├── atoms/             # Basic design system elements
│   │   ├── Heading.tsx    # H1-H6 typography atoms
│   │   ├── Body.tsx       # Body text typography
│   │   ├── Caption.tsx    # Caption/small text
│   │   ├── Tag.tsx        # Versatile tag component
│   │   ├── ColorPalette.tsx
│   │   └── index.ts
│   │
│   ├── molecules/         # Simple component combinations
│   │   ├── Badge.tsx      # Colored badge/pill
│   │   ├── BadgeGroup.tsx # Multiple badges wrapper
│   │   ├── Avatar.tsx     # User profile avatar
│   │   ├── AvatarGroup.tsx# Multiple avatars display
│   │   ├── CardHeader.tsx # Title + subtitle component
│   │   ├── CardImage.tsx  # Image container with aspect ratio
│   │   ├── Dropdown.tsx   # Dropdown menu with keyboard nav
│   │   ├── DropdownSelect.tsx # Multi-select dropdown
│   │   └── index.ts
│   │
│   └── organisms/         # Complex composed components
│       ├── ContentCard.tsx    # Full featured card (image, title, badges)
│       ├── CardGrid.tsx       # Responsive grid layout
│       ├── ProfileDropdown.tsx# User profile menu
│       ├── SearchBar.tsx      # Search input with controls
│       ├── CTAButton.tsx      # Call-to-action button
│       └── index.ts
│
├── templates/
│   └── MainTemplate.tsx   # Main layout template (header, nav, hero, main, footer)
│
├── lib/
│   ├── utils.ts          # Utility functions (cn for Tailwind merging)
│   └── constants.ts      # App-wide constants and mock data
│
└── public/               # Static assets

```

## Design System

### Colors
- **Primary**: Blue (#3A86FF), Fade (#FF006E), Lila (#8338EC), Orange (#FB5607)
- **Secondary**: Pink (#FF84E0), Yellow (#FFBE0B)
- **Neutral**: White, Grey (#B7B7B7), Black (#200E38)

### Typography
- **Headings**: Quicksand (Bold, 64px → 24px)
- **Body**: Source Sans Pro (Regular/Semibold, 18px → 12px)

### Design Tokens
All colors, spacing, and typography sizes are defined as CSS custom properties in `globals.css` and referenced throughout the application.

## Component Hierarchy

```
Atoms (Basic elements)
  ↓
Molecules (Atom combinations)
  ↓
Organisms (Complex feature components)
  ↓
Templates (Page layouts)
  ↓
Pages (Full page implementations)
```

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

### Pages
- **Homepage** (`/`) - Main skill showcase
- **Molecules Demo** (`/demo`) - Component library showcase
- **Interactive Demo** (`/demo-interactive`) - Tags and dropdowns

## Key Features

- **Fully Responsive**: Mobile-first design with Tailwind breakpoints
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation
- **Type Safe**: Full TypeScript support throughout
- **Design Tokens**: Centralized color and typography system
- **Production Ready**: Optimized components with proper error handling

## Technologies

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4
- **Typography**: Next.js Google Fonts (Quicksand, Source Sans Pro)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Vercel Analytics

## Development Guidelines

### Adding Components
1. **Atoms**: Single-purpose UI elements with minimal props
2. **Molecules**: Combine atoms, add basic interactivity
3. **Organisms**: Complex features, full functionality
4. **Templates**: Page-level layouts
5. **Pages**: Route handlers, use templates and components

### Style Guidelines
- Use Tailwind CSS utility classes only
- Reference design tokens via CSS variables
- Keep components reusable and prop-driven
- Use semantic HTML elements

### Accessibility
- Always include alt text for images
- Use semantic HTML (button, nav, main, etc.)
- Add ARIA labels where necessary
- Test keyboard navigation
