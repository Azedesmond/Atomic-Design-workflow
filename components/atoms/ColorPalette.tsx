import React from 'react'
import { cn } from '@/lib/utils'

interface ColorProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  hex: string
  className?: string
}

export function Color({ name, hex, className, ...props }: ColorProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)} {...props}>
      <div 
        className="w-24 h-24 rounded-md border border-border shadow-sm"
        style={{ backgroundColor: hex }}
        role="presentation"
      />
      <p className="text-sm font-semibold text-foreground text-center">{name}</p>
      <p className="text-xs text-muted-foreground font-mono">{hex.toUpperCase()}</p>
    </div>
  )
}

// Primary Colors
export const COLORS = {
  primary: {
    fade: '#FF006E',
    blue: '#3A86FF',
    lila: '#8338EC',
    orange: '#FB5607',
  },
  secondary: {
    pink: '#FF84E0',
    yellow: '#FFBE0B',
  },
  neutral: {
    white: '#FFFFFF',
    grey: '#B7B7B7',
    black: '#200E38',
  },
}
