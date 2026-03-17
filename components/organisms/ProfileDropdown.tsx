'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Body, Caption } from '@/components/atoms'
import { Avatar } from '@/components/molecules'

interface DropdownItem {
  id: string | number
  label: string
  icon?: React.ReactNode
  isDivider?: boolean
  isHighlighted?: boolean
  onClick?: () => void
}

interface ProfileDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar: {
    src: string
    alt: string
  }
  userName?: string
  items: DropdownItem[]
  className?: string
  onClose?: () => void
}

export function ProfileDropdown({
  avatar,
  userName,
  items,
  className,
  onClose,
  ...props
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = (item: DropdownItem) => {
    item.onClick?.()
    setIsOpen(false)
    onClose?.()
  }

  return (
    <div className={cn('relative inline-block', className)} {...props}>
      {/* Trigger Button */}
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Avatar
          src={avatar.src}
          alt={avatar.alt}
          size="md"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
          role="menu"
        >
          {/* User Info Header */}
          {userName && (
            <div className="px-4 py-3 border-b border-border">
              <Body size="sm" weight="semibold" className="text-foreground">
                {userName}
              </Body>
            </div>
          )}

          {/* Menu Items */}
          <div className="py-1">
            {items.map((item) => {
              if (item.isDivider) {
                return (
                  <div
                    key={item.id}
                    className="my-1 border-t border-border"
                  />
                )
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    'w-full px-4 py-2 flex items-center gap-2 text-left transition-colors',
                    item.isHighlighted
                      ? 'text-primary-foreground bg-primary hover:bg-primary/90'
                      : 'text-foreground hover:bg-muted'
                  )}
                  role="menuitem"
                >
                  {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                  <Body size="sm" className="text-current flex-1">
                    {item.label}
                  </Body>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
