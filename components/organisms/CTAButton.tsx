'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Body } from '@/components/atoms'

type CTAVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary'
type CTASize = 'sm' | 'md' | 'lg'

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CTAVariant
  size?: CTASize
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<CTAVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg active:bg-primary/80 transition-all duration-200',
  secondary: 'bg-secondary text-white hover:bg-secondary/90 hover:shadow-lg active:bg-secondary/80 transition-all duration-200',
  outline: 'border border-border text-foreground hover:bg-muted hover:shadow-lg active:bg-muted/80 transition-all duration-200',
  ghost: 'text-foreground hover:bg-muted hover:shadow-lg active:bg-muted/80 transition-all duration-200',
  tertiary: 'text-white hover:text-white/80 transition-all duration-200 bg-transparent',
}

const sizeStyles: Record<CTASize, string> = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
}

export function CTAButton({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}: CTAButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg',
        'font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="inline-flex items-center justify-center">
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
          <Body size="sm" weight="semibold" className="text-current">
            {children}
          </Body>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          <Body size="sm" weight="semibold" className="text-current">
            {children}
          </Body>
          {icon && iconPosition === 'right' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  )
}
