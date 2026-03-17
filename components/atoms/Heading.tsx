import React from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

const headingStyles = {
  1: 'text-h1 font-bold leading-tight',
  2: 'text-h2 font-bold leading-tight',
  3: 'text-h3 font-bold leading-tight',
  4: 'text-h4 font-bold leading-tight',
  5: 'text-h5 font-bold leading-tight',
  6: 'text-h6 font-bold leading-tight',
}

export function Heading({ level, children, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as const
  
  return (
    <Tag 
      className={cn(headingStyles[level], 'text-foreground font-quicksand', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function H1({ children, className, ...props }: Omit<HeadingProps, 'level'>) {
  return <Heading level={1} className={className} {...props}>{children}</Heading>
}

export function H2({ children, className, ...props }: Omit<HeadingProps, 'level'>) {
  return <Heading level={2} className={className} {...props}>{children}</Heading>
}

export function H3({ children, className, ...props }: Omit<HeadingProps, 'level'>) {
  return <Heading level={3} className={className} {...props}>{children}</Heading>
}

export function H4({ children, className, ...props }: Omit<HeadingProps, 'level'>) {
  return <Heading level={4} className={className} {...props}>{children}</Heading>
}

export function H5({ children, className, ...props }: Omit<HeadingProps, 'level'>) {
  return <Heading level={5} className={className} {...props}>{children}</Heading>
}

export function H6({ children, className, ...props }: Omit<HeadingProps, 'level'>) {
  return <Heading level={6} className={className} {...props}>{children}</Heading>
}
