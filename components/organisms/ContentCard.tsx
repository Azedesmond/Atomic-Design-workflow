'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { H4, H6 } from '@/components/atoms/Heading'
import { Body, Caption } from '@/components/atoms'
import { CardImage, CardHeader, BadgeGroup, Avatar, AvatarGroup } from '@/components/molecules'

interface BadgeItem {
  id: string | number
  label: string
  variant?: 'primary-blue' | 'primary-fade' | 'primary-lila' | 'primary-orange' | 'secondary-pink' | 'secondary-yellow' | 'neutral-grey'
}

type ContentCardLayout = 'vertical' | 'horizontal' | 'compact'

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  image?: {
    src: string
    alt: string
    aspectRatio?: 'square' | 'video' | 'portrait'
  }
  badges?: BadgeItem[]
  avatar?: {
    src: string
    alt: string
  }
  avatarGroup?: Array<{ src: string; alt: string; id: string | number }>
  layout?: ContentCardLayout
  icon?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function ContentCard({
  title,
  description,
  image,
  badges,
  avatar,
  avatarGroup,
  layout = 'vertical',
  icon,
  footer,
  className,
  ...props
}: ContentCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card shadow-sm overflow-hidden',
        {
          'flex flex-col': layout === 'vertical',
          'flex flex-row': layout === 'horizontal',
          'p-4': layout === 'compact',
        },
        className
      )}
      {...props}
    >
      {/* Image Section */}
      {image && layout !== 'compact' && (
        <CardImage
          src={image.src}
          alt={image.alt}
          aspectRatio={image.aspectRatio}
        />
      )}

      {/* Content Section */}
      <div className={cn(
        'p-4 flex flex-col gap-3',
        layout === 'horizontal' && 'flex-1'
      )}>
        {/* Header */}
        {(title || avatar || icon) && (
          <div className="flex items-start gap-3">
            {avatar && (
              <Avatar
                src={avatar.src}
                alt={avatar.alt}
                size="md"
              />
            )}
            {icon && (
              <div className="flex-shrink-0">
                {icon}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <H6 className="text-foreground font-bold">
                {title}
              </H6>
            </div>
          </div>
        )}

        {/* Description */}
        {description && (
          <Body size="sm" className="text-foreground">
            {description}
          </Body>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <BadgeGroup badges={badges} />
        )}

        {/* Avatar Group */}
        {avatarGroup && avatarGroup.length > 0 && (
          <AvatarGroup avatars={avatarGroup} />
        )}

        {/* Footer */}
        {footer && (
          <div className="pt-2 border-t border-border">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
