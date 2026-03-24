'use client'

import { ReactNode } from 'react'
import { X } from 'lucide-react'

export type TagVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info' 
  | 'neutral'

export type TagSize = 'sm' | 'md' | 'lg'

interface TagProps {
  variant?: TagVariant
  size?: TagSize
  label: string | ReactNode
  closable?: boolean
  onClose?: () => void
  outlined?: boolean
  withDropdown?: boolean
  icon?: ReactNode
  className?: string
}

const variantStyles: Record<TagVariant, string> = {
  primary: 'bg-[var(--primary-blue)] text-white',
  secondary: 'bg-[var(--secondary-pink)] text-white',
  success: 'bg-[var(--primary-lila)] text-white',
  warning: 'bg-[var(--primary-orange)] text-white',
  danger: 'bg-[var(--primary-fade)] text-white',
  info: 'bg-[var(--secondary-yellow)] text-[var(--neutral-black)]',
  neutral: 'bg-[var(--neutral-grey)] text-white',
}

const outlinedStyles: Record<TagVariant, string> = {
  primary: 'border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] bg-white',
  secondary: 'border-2 border-[var(--secondary-pink)] text-[var(--secondary-pink)] bg-white',
  success: 'border-2 border-[var(--primary-lila)] text-[var(--primary-lila)] bg-white',
  warning: 'border-2 border-[var(--primary-orange)] text-[var(--primary-orange)] bg-white',
  danger: 'border-2 border-[var(--primary-fade)] text-[var(--primary-fade)] bg-white',
  info: 'border-2 border-[var(--secondary-yellow)] text-[var(--secondary-yellow)] bg-white',
  neutral: 'border-2 border-[var(--neutral-grey)] text-[var(--neutral-grey)] bg-white',
}

const sizeStyles: Record<TagSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
}

export function Tag({
  variant = 'primary',
  size = 'md',
  label,
  closable = false,
  onClose,
  outlined = false,
  withDropdown = false,
  icon,
  className = '',
}: TagProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full font-medium transition-all'
  const colorStyles = outlined ? outlinedStyles[variant] : variantStyles[variant]
  const sizeStyle = sizeStyles[size]

  return (
    <div
      className={`
        ${baseStyles}
        ${colorStyles}
        ${sizeStyle}
        ${className}
      `}
      role="status"
      aria-label={typeof label === 'string' ? label : undefined}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-1">{label}</span>
      {withDropdown && (
        <span className="flex-shrink-0 ml-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </span>
      )}
      {closable && (
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-1 hover:opacity-70 transition-opacity"
          aria-label={`Remove ${typeof label === 'string' ? label : 'tag'}`}
          type="button"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  )
}
