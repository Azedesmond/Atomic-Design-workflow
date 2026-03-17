'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Caption } from '@/components/atoms/Caption'

type BadgeVariant = 
  | 'primary-blue' 
  | 'primary-fade' 
  | 'primary-lila' 
  | 'primary-orange'
  | 'secondary-pink' 
  | 'secondary-yellow'
  | 'neutral-grey'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const badgeVariants: Record<BadgeVariant, string> = {
  'primary-blue': 'bg-[var(--primary-blue)] text-white',
  'primary-fade': 'bg-[var(--primary-fade)] text-white',
  'primary-lila': 'bg-[var(--primary-lila)] text-white',
  'primary-orange': 'bg-[var(--primary-orange)] text-white',
  'secondary-pink': 'bg-[var(--secondary-pink)] text-white',
  'secondary-yellow': 'bg-[var(--secondary-yellow)] text-[#333]',
  'neutral-grey': 'bg-[var(--neutral-grey)] text-white',
}

export function Badge({
  variant = 'primary-blue',
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center px-3 py-1.5 rounded-full',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      <Caption size="sm" weight="semibold" className="!text-current">
        {children}
      </Caption>
    </div>
  )
}
