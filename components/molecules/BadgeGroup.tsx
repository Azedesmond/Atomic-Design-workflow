'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from './Badge'

interface BadgeItem {
  id: string | number
  label: string
  variant?: 'primary-blue' | 'primary-fade' | 'primary-lila' | 'primary-orange' | 'secondary-pink' | 'secondary-yellow' | 'neutral-grey'
}

interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  badges: BadgeItem[]
  className?: string
}

export function BadgeGroup({ badges, className, ...props }: BadgeGroupProps) {
  return (
    <div
      className={cn('flex flex-wrap gap-2', className)}
      {...props}
      role="list"
    >
      {badges.map((badge) => (
        <div key={badge.id} role="listitem">
          <Badge variant={badge.variant}>{badge.label}</Badge>
        </div>
      ))}
    </div>
  )
}
