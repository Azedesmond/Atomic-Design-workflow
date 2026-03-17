'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  size?: AvatarSize
  className?: string
  initials?: string
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
}

export function Avatar({
  src,
  alt,
  size = 'md',
  className,
  initials = '?',
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 24px, 40px"
        />
      ) : (
        <span className="text-xs font-semibold text-muted-foreground">
          {initials}
        </span>
      )}
    </div>
  )
}
