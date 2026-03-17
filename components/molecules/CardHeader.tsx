'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { H4 } from '@/components/atoms/Heading'
import { Body } from '@/components/atoms/Body'

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  className?: string
}

export function CardHeader({
  title,
  subtitle,
  icon,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn('flex items-start gap-3', className)}
      {...props}
    >
      {icon && (
        <div className="flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <H4 className="text-lg text-foreground font-bold">
          {title}
        </H4>
        {subtitle && (
          <Body size="sm" className="text-muted-foreground mt-1">
            {subtitle}
          </Body>
        )}
      </div>
    </div>
  )
}
