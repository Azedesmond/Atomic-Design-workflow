'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface DropdownProps {
  trigger: ReactNode
  items: DropdownItemConfig[]
  onSelect?: (item: DropdownItemConfig) => void
  placeholder?: string
  className?: string
  triggerClassName?: string
  menuClassName?: string
  align?: 'left' | 'right'
}

export interface DropdownItemConfig {
  id: string | number
  label: string | ReactNode
  disabled?: boolean
  divider?: boolean
  icon?: ReactNode
  onSelect?: () => void
}

export function Dropdown({
  trigger,
  items,
  onSelect,
  className = '',
  triggerClassName = '',
  menuClassName = '',
  align = 'left',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setIsOpen(true)
        }
        return
      }

      const enabledItems = items.filter(item => !item.disabled && !item.divider)

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setHighlightedIndex(prev => 
            prev < enabledItems.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : enabledItems.length - 1
          )
          break
        case 'Enter':
          event.preventDefault()
          if (highlightedIndex >= 0 && enabledItems[highlightedIndex]) {
            const selectedItem = enabledItems[highlightedIndex]
            handleSelect(selectedItem)
          }
          break
        case 'Escape':
          event.preventDefault()
          setIsOpen(false)
          triggerRef.current?.focus()
          break
        default:
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, highlightedIndex, items])

  function handleSelect(item: DropdownItemConfig) {
    onSelect?.(item)
    item.onSelect?.()
    setIsOpen(false)
    setHighlightedIndex(-1)
  }

  const alignmentClass = align === 'right' ? 'right-0' : 'left-0'

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
    >
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          inline-flex items-center justify-between
          px-4 py-2 rounded-lg
          bg-[var(--primary-blue)] text-white
          hover:opacity-90 transition-opacity
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-[var(--primary-blue)]
          ${triggerClassName}
        `}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDown
          className={`ml-2 w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className={`
            absolute ${alignmentClass} top-full mt-2 z-50
            bg-white border border-[var(--border)]
            rounded-lg shadow-lg min-w-max
            ${menuClassName}
          `}
          role="menu"
        >
          {items.map((item, index) => {
            if (item.divider) {
              return (
                <div
                  key={`divider-${index}`}
                  className="h-px bg-[var(--border)] my-1"
                />
              )
            }

            const isDisabled = item.disabled || false
            const enabledItems = items.filter(i => !i.disabled && !i.divider)
            const enabledIndex = enabledItems.findIndex(i => i.id === item.id)

            return (
              <button
                key={item.id}
                onClick={() => !isDisabled && handleSelect(item)}
                onMouseEnter={() => !isDisabled && setHighlightedIndex(enabledIndex)}
                className={`
                  w-full text-left px-4 py-2
                  flex items-center gap-2
                  transition-colors
                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  ${
                    enabledIndex === highlightedIndex && !isDisabled
                      ? 'bg-[var(--primary-blue)] text-white'
                      : 'hover:bg-gray-100 text-[var(--neutral-black)]'
                  }
                `}
                disabled={isDisabled}
                role="menuitem"
                aria-disabled={isDisabled}
              >
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
