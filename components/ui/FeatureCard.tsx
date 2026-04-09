import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: 'cyan' | 'purple' | 'magenta'
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = 'cyan'
}: FeatureCardProps) {
  
  const iconColors = {
    cyan: 'text-brand-cyan bg-brand-cyan/10',
    purple: 'text-brand-purple bg-brand-purple/10',
    magenta: 'text-brand-magenta bg-brand-magenta/10'
  }
  
  return (
    <div className="flex gap-4 group">
      {/* Icon */}
      <div className={`
        flex-shrink-0 w-14 h-14 rounded-xl
        flex items-center justify-center
        ${iconColors[iconColor]}
        group-hover:scale-110
        transition-transform duration-300
      `}>
        <Icon className="w-7 h-7" />
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-purple transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}