import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
        'source-sans-pro': ['var(--font-source-sans-pro)'],
      },
      fontSize: {
        /* Heading Sizes */
        h1: ['64px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h4: ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        h5: ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        h6: ['24px', { lineHeight: '1.2', fontWeight: '700' }],
        
        /* Body Sizes */
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        
        /* Caption Sizes */
        'caption-sm': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption-xs': ['11px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      colors: {
        /* Design System Colors */
        'primary-fade': 'hsl(var(--primary-fade))',
        'primary-blue': 'hsl(var(--primary-blue))',
        'primary-lila': 'hsl(var(--primary-lila))',
        'primary-orange': 'hsl(var(--primary-orange))',
        'secondary-pink': 'hsl(var(--secondary-pink))',
        'secondary-yellow': 'hsl(var(--secondary-yellow))',
        'neutral-white': 'hsl(var(--neutral-white))',
        'neutral-grey': 'hsl(var(--neutral-grey))',
        'neutral-black': 'hsl(var(--neutral-black))',
        
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
