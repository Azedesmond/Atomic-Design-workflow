'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type GridColumns = 1 | 2 | 3 | 4

interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    mobile?: GridColumns
    tablet?: GridColumns
    desktop?: GridColumns
  }
  gap?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

const gapClasses = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
}

const columnsClasses = {
  mobile: {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  },
  tablet: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
  },
  desktop: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  },
}

export function CardGrid({
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  gap = 'md',
  children,
  className,
  ...props
}: CardGridProps) {
  return (
    <div
      className={cn(
        'grid',
        columnsClasses.mobile[columns.mobile || 1],
        columns.tablet && columnsClasses.tablet[columns.tablet],
        columns.desktop && columnsClasses.desktop[columns.desktop],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
