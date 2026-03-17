import React from 'react'
import { cn } from '@/lib/utils'

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'base' | 'lg'
  weight?: 'regular' | 'semibold'
  children: React.ReactNode
  className?: string
}

const bodyStyles = {
  sm: 'text-sm leading-relaxed',
  base: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed',
}

const weightStyles = {
  regular: 'font-normal',
  semibold: 'font-semibold',
}

export function Body({
  size = 'base',
  weight = 'regular',
  children,
  className,
  ...props
}: BodyProps) {
  return (
    <p 
      className={cn(
        bodyStyles[size],
        weightStyles[weight],
        'text-foreground font-source-sans-pro',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
