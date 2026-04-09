import React from 'react'

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  gradient?: boolean
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  gradient = false
}: SectionHeadingProps) {
  
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }
  
  return (
    <div className={`flex flex-col ${alignments[align]} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {/* Badge */}
      {badge && (
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 via-brand-purple/10 to-brand-magenta/10 border border-brand-purple/20 mb-4">
          <span className="text-sm font-semibold bg-gradient-brand bg-clip-text text-transparent">
            {badge}
          </span>
        </div>
      )}
      
      {/* Title */}
      <h2 className={`
        text-4xl md:text-5xl font-bold mb-4
        ${gradient 
          ? 'bg-gradient-brand bg-clip-text text-transparent' 
          : 'text-gray-900'
        }
      `}>
        {title}
      </h2>
      
      {/* Description */}
      {description && (
        <p className="text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}