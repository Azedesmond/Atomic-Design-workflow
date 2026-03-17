'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Body } from '@/components/atoms'

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  onSearch?: (query: string) => void
  onBack?: () => void
  showBackButton?: boolean
  className?: string
}

export function SearchBar({
  placeholder = 'Search...',
  onSearch,
  onBack,
  showBackButton = false,
  className,
  ...props
}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch?.(value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch?.('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      handleClear()
    }
  }

  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={onBack}
          className="flex-shrink-0 p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Go back"
        >
          <svg
            className="w-5 h-5 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Search Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'w-full px-4 py-2 rounded-lg border border-border bg-input',
            'text-foreground placeholder-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            'transition-all'
          )}
          aria-label={placeholder}
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex-shrink-0 p-1 rounded hover:bg-muted transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
