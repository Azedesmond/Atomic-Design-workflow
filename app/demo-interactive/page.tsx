'use client'

import { useState } from 'react'
import { Tag } from '@/components/atoms/Tag'
import { Dropdown, type DropdownItemConfig } from '@/components/molecules/Dropdown'
import { DropdownSelect, type SelectOption } from '@/components/molecules/DropdownSelect'
import { H2, H3 } from '@/components/atoms/Heading'
import { Body } from '@/components/atoms/Body'

const tagVariants = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral']
const tagSizes = ['sm', 'md', 'lg']

const dropdownItems: DropdownItemConfig[] = [
  { id: 1, label: 'Digitalisierung' },
  { id: 2, label: 'Digitale Transformation' },
  { id: 3, label: 'Digitale Innovation' },
]

const selectOptions: SelectOption[] = [
  { id: 1, label: 'Digitalisierung' },
  { id: 2, label: 'Digitale Transformation' },
  { id: 3, label: 'Digitale Innovation' },
  { id: 4, label: 'Technology' },
  { id: 5, label: 'Business' },
]

export default function InteractiveComponentsDemo() {
  const [removedTags, setRemovedTags] = useState<string[]>([])
  const [selectedDropdown, setSelectedDropdown] = useState<DropdownItemConfig | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([])

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-8">
          <H2>Interactive Components Library</H2>
          <Body className="text-gray-600 mt-2">
            Tags, Dropdowns, and Multi-Select Components
          </Body>
        </div>

        {/* Tags Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <H3 className="mb-8">Tags</H3>

          {/* Default Tags by Variant */}
          <div className="space-y-6">
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Default Tags (All Variants)
              </Body>
              <div className="flex flex-wrap gap-4">
                {(tagVariants as any[]).map(variant => (
                  <Tag
                    key={variant}
                    variant={variant}
                    label={variant.charAt(0).toUpperCase() + variant.slice(1)}
                    size="md"
                  />
                ))}
              </div>
            </div>

            {/* Outlined Tags */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Outlined Tags
              </Body>
              <div className="flex flex-wrap gap-4">
                {(tagVariants as any[]).map(variant => (
                  <Tag
                    key={`outlined-${variant}`}
                    variant={variant}
                    label={variant.charAt(0).toUpperCase() + variant.slice(1)}
                    size="md"
                    outlined
                  />
                ))}
              </div>
            </div>

            {/* Tags with Close Button */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Closable Tags
              </Body>
              <div className="flex flex-wrap gap-4">
                {(tagVariants as any[]).map(variant => (
                  !removedTags.includes(variant) && (
                    <Tag
                      key={`closable-${variant}`}
                      variant={variant as any}
                      label={variant.charAt(0).toUpperCase() + variant.slice(1)}
                      size="md"
                      closable
                      onClose={() => setRemovedTags(prev => [...prev, variant])}
                    />
                  )
                ))}
              </div>
            </div>

            {/* Tag Sizes */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Tag Sizes
              </Body>
              <div className="flex items-center gap-4">
                {(tagSizes as any[]).map(size => (
                  <Tag
                    key={`size-${size}`}
                    variant="primary"
                    label={`Size: ${size}`}
                    size={size}
                  />
                ))}
              </div>
            </div>

            {/* Tags with Dropdown Indicator */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Tags with Dropdown
              </Body>
              <div className="flex flex-wrap gap-4">
                {(tagVariants as any[]).slice(0, 4).map(variant => (
                  <Tag
                    key={`dropdown-${variant}`}
                    variant={variant as any}
                    label={variant.charAt(0).toUpperCase() + variant.slice(1)}
                    size="md"
                    withDropdown
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dropdowns Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <H3 className="mb-8">Dropdowns</H3>

          <div className="space-y-8">
            {/* Basic Dropdown */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Basic Dropdown
              </Body>
              <Dropdown
                trigger={selectedDropdown ? selectedDropdown.label : 'Select Option'}
                items={dropdownItems}
                onSelect={item => setSelectedDropdown(item)}
              />
              {selectedDropdown && (
                <Body className="text-sm text-gray-600 mt-4">
                  Selected: {selectedDropdown.label}
                </Body>
              )}
            </div>

            {/* Dropdown with Disabled Items */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Dropdown with Disabled Items
              </Body>
              <Dropdown
                trigger="Select..."
                items={[
                  { id: 1, label: 'Enabled Option' },
                  { id: 2, label: 'Disabled Option', disabled: true },
                  { id: 3, label: 'Another Enabled' },
                ]}
              />
            </div>

            {/* Dropdown with Divider */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Dropdown with Divider
              </Body>
              <Dropdown
                trigger="Menu"
                items={[
                  { id: 1, label: 'Option 1' },
                  { id: 2, label: 'Option 2' },
                  { id: 3, divider: true, label: '' },
                  { id: 4, label: 'Danger Action' },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Multi-Select Dropdown Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <H3 className="mb-8">Multi-Select Dropdowns</H3>

          <div className="space-y-8">
            {/* Basic Multi-Select */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Multi-Select Dropdown
              </Body>
              <DropdownSelect
                label="Select Skills"
                options={selectOptions}
                multi
                onSelect={option => {
                  setSelectedOptions(prev =>
                    prev.some(o => o.id === option.id)
                      ? prev
                      : [...prev, option]
                  )
                }}
                onRemove={id => {
                  setSelectedOptions(prev => prev.filter(o => o.id !== id))
                }}
              />
              {selectedOptions.length > 0 && (
                <Body className="text-sm text-gray-600 mt-4">
                  Selected ({selectedOptions.length}): {selectedOptions.map(o => o.label).join(', ')}
                </Body>
              )}
            </div>

            {/* Searchable Multi-Select */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Searchable Multi-Select
              </Body>
              <DropdownSelect
                label="Search & Select"
                options={selectOptions}
                multi
                searchable
                placeholder="Search by keyword..."
              />
            </div>

            {/* Single Select */}
            <div>
              <Body className="text-sm font-semibold mb-4 text-gray-700">
                Single Select Dropdown
              </Body>
              <DropdownSelect
                label="Choose One"
                options={selectOptions}
                multi={false}
                searchable
                placeholder="Pick an option..."
              />
            </div>
          </div>
        </section>

        {/* Usage Notes */}
        <section className="bg-blue-50 border-l-4 border-[var(--primary-blue)] p-6 rounded">
          <H3 className="mb-4">Component Features</H3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ <strong>Tags:</strong> 7 color variants, 3 sizes, closable, with dropdown indicator</li>
            <li>✓ <strong>Dropdown:</strong> Keyboard navigation (arrows, enter, escape), click-outside close</li>
            <li>✓ <strong>DropdownSelect:</strong> Multi-select, single-select, searchable, tag display</li>
            <li>✓ <strong>Accessibility:</strong> ARIA roles, keyboard navigation, focus management</li>
            <li>✓ <strong>Design Tokens:</strong> All colors and spacing from design system</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
