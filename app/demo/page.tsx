'use client'

import React from 'react'
import { H1, H2, H3 } from '@/components/atoms/Heading'
import { Body, Caption } from '@/components/atoms'
import { Badge, BadgeGroup, Avatar, AvatarGroup } from '@/components/molecules'
import { ContentCard, CardGrid, ProfileDropdown, SearchBar, CTAButton } from '@/components/organisms'

export default function DemoPage() {
  const sampleBadges = [
    { id: 1, label: 'Frontend', variant: 'primary-blue' as const },
    { id: 2, label: 'Design', variant: 'secondary-pink' as const },
    { id: 3, label: 'React', variant: 'primary-lila' as const },
  ]

  const sampleAvatars = [
    { id: 1, src: '/api/placeholder/40/40', alt: 'User 1' },
    { id: 2, src: '/api/placeholder/40/40', alt: 'User 2' },
    { id: 3, src: '/api/placeholder/40/40', alt: 'User 3' },
    { id: 4, src: '/api/placeholder/40/40', alt: 'User 4' },
  ]

  const dropdownItems = [
    { id: 1, label: 'Register', isHighlighted: true },
    { id: 2, label: 'Sign In' },
    { id: 3, label: 'Become Expert' },
    { id: 4, label: 'Enterprise' },
    { id: 5, isDivider: true },
    { id: 6, label: 'Help & Support' },
  ]

  return (
    <main className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <section>
          <H1 className="text-foreground mb-4">Molecules & Organisms Demo</H1>
          <Body size="lg" className="text-muted-foreground max-w-2xl">
            Explore the complete component library built following Atomic Design principles.
            All components are production-ready and fully responsive.
          </Body>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <H2 className="text-foreground">Badges</H2>
          
          <div className="space-y-4">
            <div>
              <H3 className="text-lg text-foreground mb-3">Single Badges</H3>
              <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
                <Badge variant="primary-blue">Primary Blue</Badge>
                <Badge variant="primary-fade">Primary Fade</Badge>
                <Badge variant="primary-lila">Primary Lila</Badge>
                <Badge variant="primary-orange">Primary Orange</Badge>
                <Badge variant="secondary-pink">Secondary Pink</Badge>
                <Badge variant="secondary-yellow">Secondary Yellow</Badge>
                <Badge variant="neutral-grey">Neutral Grey</Badge>
              </div>
            </div>

            <div>
              <H3 className="text-lg text-foreground mb-3">Badge Group</H3>
              <div className="p-6 bg-card rounded-lg border border-border">
                <BadgeGroup badges={sampleBadges} />
              </div>
            </div>
          </div>
        </section>

        {/* Avatars Section */}
        <section className="space-y-6">
          <H2 className="text-foreground">Avatars</H2>
          
          <div className="space-y-4">
            <div>
              <H3 className="text-lg text-foreground mb-3">Avatar Sizes</H3>
              <div className="flex items-center gap-6 p-6 bg-card rounded-lg border border-border">
                <Avatar src="/api/placeholder/24/24" alt="XS Avatar" size="xs" />
                <Avatar src="/api/placeholder/32/32" alt="SM Avatar" size="sm" />
                <Avatar src="/api/placeholder/40/40" alt="MD Avatar" size="md" />
                <Avatar src="/api/placeholder/48/48" alt="LG Avatar" size="lg" />
                <Avatar src="/api/placeholder/64/64" alt="XL Avatar" size="xl" />
              </div>
            </div>

            <div>
              <H3 className="text-lg text-foreground mb-3">Avatar Group</H3>
              <div className="p-6 bg-card rounded-lg border border-border">
                <AvatarGroup avatars={sampleAvatars} />
              </div>
            </div>
          </div>
        </section>

        {/* Content Cards Section */}
        <section className="space-y-6">
          <H2 className="text-foreground">Content Cards</H2>

          <div>
            <H3 className="text-lg text-foreground mb-3">Card Variations</H3>
            <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="md">
              {/* Card 1: With Image and Avatar */}
              <ContentCard
                title="Featured Event"
                description="Join us for an amazing workshop on modern web development"
                image={{
                  src: '/api/placeholder/300/300',
                  alt: 'Event thumbnail',
                  aspectRatio: 'square'
                }}
                avatar={{
                  src: '/api/placeholder/40/40',
                  alt: 'Host avatar'
                }}
                badges={[
                  { id: 1, label: 'Workshop', variant: 'primary-blue' },
                  { id: 2, label: '2 hours', variant: 'secondary-pink' }
                ]}
              />

              {/* Card 2: With Avatar Group */}
              <ContentCard
                title="Team Collaboration"
                description="Working together to build amazing products"
                image={{
                  src: '/api/placeholder/300/300',
                  alt: 'Team thumbnail',
                  aspectRatio: 'square'
                }}
                avatarGroup={sampleAvatars}
                badges={[
                  { id: 1, label: 'Team', variant: 'primary-lila' },
                  { id: 2, label: '4 members', variant: 'primary-orange' }
                ]}
              />

              {/* Card 3: Compact Layout */}
              <ContentCard
                title="Quick Update"
                description="Latest news from the platform"
                layout="compact"
                badges={[
                  { id: 1, label: 'News', variant: 'secondary-yellow' }
                ]}
              />
            </CardGrid>
          </div>
        </section>

        {/* CTA Buttons Section */}
        <section className="space-y-6">
          <H2 className="text-foreground">CTA Buttons</H2>

          <div className="space-y-4">
            <div>
              <H3 className="text-lg text-foreground mb-3">Button Variants</H3>
              <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
                <CTAButton variant="primary">Primary Action</CTAButton>
                <CTAButton variant="secondary">Secondary Action</CTAButton>
                <CTAButton variant="outline">Outline Button</CTAButton>
                <CTAButton variant="ghost">Ghost Button</CTAButton>
              </div>
            </div>

            <div>
              <H3 className="text-lg text-foreground mb-3">Button Sizes</H3>
              <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
                <CTAButton size="sm">Small</CTAButton>
                <CTAButton size="md">Medium</CTAButton>
                <CTAButton size="lg">Large</CTAButton>
              </div>
            </div>

            <div>
              <H3 className="text-lg text-foreground mb-3">Button States</H3>
              <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
                <CTAButton>Normal</CTAButton>
                <CTAButton disabled>Disabled</CTAButton>
                <CTAButton isLoading>Loading</CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Profile Section */}
        <section className="space-y-6">
          <H2 className="text-foreground">Search & Profile</H2>

          <div className="space-y-4">
            <div>
              <H3 className="text-lg text-foreground mb-3">Search Bar</H3>
              <div className="p-6 bg-card rounded-lg border border-border">
                <SearchBar
                  placeholder="Search for content..."
                  onSearch={(query) => console.log('Search:', query)}
                />
              </div>
            </div>

            <div>
              <H3 className="text-lg text-foreground mb-3">Profile Dropdown</H3>
              <div className="p-6 bg-card rounded-lg border border-border">
                <ProfileDropdown
                  avatar={{
                    src: '/api/placeholder/40/40',
                    alt: 'Profile avatar'
                  }}
                  userName="John Doe"
                  items={dropdownItems}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
