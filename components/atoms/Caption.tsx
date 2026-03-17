import React from 'react'
import { cn } from '@/lib/utils'

interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'xs' | 'sm'
  weight?: 'regular' | 'semibold'
  children: React.ReactNode
  className?: string
}

const captionStyles = {
  xs: 'text-xs leading-tight',
  sm: 'text-sm leading-tight',
}

const weightStyles = {
  regular: 'font-normal',
  semibold: 'font-semibold',
}

export function Caption({
  size = 'sm',
  weight = 'regular',
  children,
  className,
  ...props
}: CaptionProps) {
  return (
    <span 
      className={cn(
        captionStyles[size],
        weightStyles[weight],
        'text-muted-foreground font-source-sans-pro',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
