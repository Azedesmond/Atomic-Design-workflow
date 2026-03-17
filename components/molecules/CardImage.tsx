'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  aspectRatio?: 'square' | 'video' | 'portrait'
  className?: string
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
}

export function CardImage({
  src,
  alt,
  aspectRatio = 'square',
  className,
  ...props
}: CardImageProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg bg-muted',
        aspectRatioClasses[aspectRatio],
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  )
}
