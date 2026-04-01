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
  showButton?: boolean
  onSearchClick?: () => void
}

export function SearchBar({
  placeholder = 'Search...',
  onSearch,
  onBack,
  showBackButton = false,
  className,
  showButton = false,
  onSearchClick,
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
    <div className={cn('flex items-stretch gap-3', className)} {...props}>
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

      {/* Search Input - Unified with arrow button INSIDE */}
      <div className="flex-1 relative flex items-center bg-white rounded-lg overflow-hidden">
        <svg className="w-5 h-5 text-[#FF5722] ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'flex-1 px-3 py-3 bg-white',
            'text-foreground placeholder-gray-500',
            'focus:outline-none',
            'transition-all'
          )}
          aria-label={placeholder}
        />

        {/* Arrow Button INSIDE input container on the right */}
        {showButton && (
          <button
            onClick={onSearchClick}
            className="bg-[#FF5722] hover:bg-[#E64A19] text-white p-3 transition-colors duration-200 flex items-center justify-center flex-shrink-0"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7m0 0l-7 7m7-7H5"
              />
            </svg>
          </button>
        )}

        {/* Clear Button */}
        {query && !showButton && (
          <button
            onClick={handleClear}
            className="mr-3 flex-shrink-0 p-1 rounded hover:bg-muted transition-colors"
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
