'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { Tag } from '@/components/atoms/Tag'

interface DropdownSelectProps {
  label?: string
  options: SelectOption[]
  onSelect?: (option: SelectOption) => void
  onRemove?: (optionId: string | number) => void
  placeholder?: string
  multi?: boolean
  searchable?: boolean
  clearable?: boolean
  className?: string
  triggerClassName?: string
  menuClassName?: string
}

export interface SelectOption {
  id: string | number
  label: string
  disabled?: boolean
  icon?: ReactNode
}

export function DropdownSelect({
  label,
  options,
  onSelect,
  onRemove,
  placeholder = 'Select...',
  multi = false,
  searchable = false,
  clearable = true,
  className = '',
  triggerClassName = '',
  menuClassName = '',
}: DropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<SelectOption[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filter options based on search term
  const filteredOptions = options.filter(opt =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen, searchable])

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

      const enabledOptions = filteredOptions.filter(opt => !opt.disabled)

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setHighlightedIndex(prev =>
            prev < enabledOptions.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setHighlightedIndex(prev =>
            prev > 0 ? prev - 1 : enabledOptions.length - 1
          )
          break
        case 'Enter':
          event.preventDefault()
          if (highlightedIndex >= 0 && enabledOptions[highlightedIndex]) {
            handleSelect(enabledOptions[highlightedIndex])
          }
          break
        case 'Escape':
          event.preventDefault()
          setIsOpen(false)
          setSearchTerm('')
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
  }, [isOpen, highlightedIndex, filteredOptions])

  function handleSelect(option: SelectOption) {
    if (multi) {
      const isAlreadySelected = selected.some(s => s.id === option.id)
      if (isAlreadySelected) {
        const updated = selected.filter(s => s.id !== option.id)
        setSelected(updated)
        onRemove?.(option.id)
      } else {
        const updated = [...selected, option]
        setSelected(updated)
        onSelect?.(option)
      }
    } else {
      setSelected([option])
      onSelect?.(option)
      setIsOpen(false)
      setSearchTerm('')
    }
    setHighlightedIndex(-1)
  }

  function handleRemove(optionId: string | number) {
    const updated = selected.filter(s => s.id !== optionId)
    setSelected(updated)
    onRemove?.(optionId)
  }

  const displayValue =
    selected.length === 0
      ? placeholder
      : multi
      ? `${selected.length} selected`
      : selected[0].label

  return (
    <div ref={containerRef} className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--neutral-black)]">
          {label}
        </label>
      )}

      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between
          px-3 py-2 rounded-lg
          border-2 border-[var(--primary-blue)]
          bg-white text-[var(--neutral-black)]
          hover:border-opacity-80 transition-colors
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-[var(--primary-blue)]
          ${triggerClassName}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-sm">{displayValue}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {multi && selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map(option => (
            <Tag
              key={option.id}
              variant="primary"
              size="sm"
              label={option.label}
              closable
              onClose={() => handleRemove(option.id)}
            />
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className={`
            absolute top-full left-0 right-0 z-50 mt-1
            bg-white border border-[var(--border)]
            rounded-lg shadow-lg
            ${menuClassName}
          `}
          role="listbox"
        >
          {searchable && (
            <div className="p-2 border-b border-[var(--border)]">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => {
                  setSearchTerm(e.target.value)
                  setHighlightedIndex(0)
                }}
                className={`
                  w-full px-3 py-2 rounded
                  border border-[var(--border)]
                  text-sm focus:outline-none
                  focus:ring-2 focus:ring-[var(--primary-blue)]
                `}
                aria-label="Search options"
              />
            </div>
          )}

          <div className="max-h-56 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-[var(--muted-foreground)]">
                No options found
              </div>
            ) : (
              filteredOptions.map((option, index) => {
                const isDisabled = option.disabled || false
                const isSelected = selected.some(s => s.id === option.id)
                const enabledOptions = filteredOptions.filter(
                  opt => !opt.disabled
                )
                const enabledIndex = enabledOptions.findIndex(
                  o => o.id === option.id
                )

                return (
                  <button
                    key={option.id}
                    onClick={() => !isDisabled && handleSelect(option)}
                    onMouseEnter={() =>
                      !isDisabled && setHighlightedIndex(enabledIndex)
                    }
                    className={`
                      w-full text-left px-4 py-2 flex items-center gap-2
                      transition-colors text-sm
                      ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      ${
                        enabledIndex === highlightedIndex && !isDisabled
                          ? 'bg-[var(--primary-blue)] text-white'
                          : 'hover:bg-gray-100 text-[var(--neutral-black)]'
                      }
                      ${isSelected ? 'font-semibold' : ''}
                    `}
                    disabled={isDisabled}
                    role="option"
                    aria-selected={isSelected}
                  >
                    {option.icon && (
                      <span className="flex-shrink-0">{option.icon}</span>
                    )}
                    <span>{option.label}</span>
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}
