'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Avatar } from './Avatar'
import { Caption } from '@/components/atoms/Caption'

interface AvatarItem {
  src: string
  alt: string
  id: string | number
}

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: AvatarItem[]
  maxDisplay?: number
  label?: string
  className?: string
}

export function AvatarGroup({
  avatars,
  maxDisplay = 3,
  label,
  className,
  ...props
}: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, maxDisplay)
  const remaining = Math.max(0, avatars.length - maxDisplay)

  return (
    <div
      className={cn('flex flex-col items-start gap-2', className)}
      {...props}
    >
      <div className="flex -space-x-2">
        {displayAvatars.map((avatar) => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            alt={avatar.alt}
            size="sm"
            className="ring-2 ring-background"
          />
        ))}
        {remaining > 0 && (
          <div className="relative w-8 h-8 rounded-full bg-muted flex items-center justify-center ring-2 ring-background flex-shrink-0">
            <Caption size="xs" weight="semibold" className="!text-foreground">
              +{remaining}
            </Caption>
          </div>
        )}
      </div>
      {label && (
        <Caption size="sm" className="text-muted-foreground">
          {label}
        </Caption>
      )}
    </div>
  )
}
