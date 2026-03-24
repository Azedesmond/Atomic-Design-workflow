import React from 'react'
import { cn } from '@/lib/utils'

interface MainTemplateProps {
  header?: React.ReactNode
  navigation?: React.ReactNode
  hero?: React.ReactNode
  sidebar?: React.ReactNode
  main: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function MainTemplate({
  header,
  navigation,
  hero,
  sidebar,
  main,
  footer,
  className,
}: MainTemplateProps) {
  return (
    <div className={cn('flex flex-col min-h-screen bg-white', className)}>
      {/* Header */}
      {header && (
        <header className="sticky top-0 z-50">
          {header}
        </header>
      )}

      {/* Navigation Bar */}
      {navigation && (
        <nav>
          {navigation}
        </nav>
      )}

      {/* Hero Section */}
      {hero && (
        <section className="w-full">
          {hero}
        </section>
      )}

      {/* Main Content with optional Sidebar */}
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        {sidebar && (
          <aside className="hidden lg:flex lg:w-64 bg-card border-r border-border overflow-y-auto">
            {sidebar}
          </aside>
        )}

        {/* Main Content Area */}
        <main className="flex-1 w-full overflow-y-auto">
          {main}
        </main>
      </div>

      {/* Footer */}
      {footer && (
        <footer className="bg-card border-t border-border">
          {footer}
        </footer>
      )}
    </div>
  )
}
