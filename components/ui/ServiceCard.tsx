import React from 'react'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  gradient?: 'cyan' | 'purple' | 'magenta' | 'brand'
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  gradient = 'brand'
}: ServiceCardProps) {
  
  const gradients = {
    cyan: 'from-brand-cyan/10 to-brand-cyan/5 group-hover:from-brand-cyan/20 group-hover:to-brand-cyan/10',
    purple: 'from-brand-purple/10 to-brand-purple/5 group-hover:from-brand-purple/20 group-hover:to-brand-purple/10',
    magenta: 'from-brand-magenta/10 to-brand-magenta/5 group-hover:from-brand-magenta/20 group-hover:to-brand-magenta/10',
    brand: 'from-brand-cyan/10 via-brand-purple/10 to-brand-magenta/10 group-hover:from-brand-cyan/20 group-hover:via-brand-purple/20 group-hover:to-brand-magenta/20'
  }
  
  const iconColors = {
    cyan: 'text-brand-cyan',
    purple: 'text-brand-purple',
    magenta: 'text-brand-magenta',
    brand: 'text-brand-purple'
  }
  
  return (
    <Link 
      href={href}
      className="group relative overflow-hidden"
    >
      <div className={`
        relative h-full p-8 rounded-2xl 
        bg-gradient-to-br ${gradients[gradient]}
        border border-gray-200 
        transition-all duration-300
        group-hover:border-brand-purple/30
        group-hover:shadow-brand
        group-hover:-translate-y-1
      `}>
        {/* Icon with gradient background */}
        <div className={`
          inline-flex p-4 rounded-xl mb-6
          bg-gradient-to-br from-white to-gray-50
          shadow-lg group-hover:shadow-xl
          transition-all duration-300
          group-hover:scale-110
        `}>
          <Icon className={`w-8 h-8 ${iconColors[gradient]}`} />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Arrow Link */}
        <div className="flex items-center text-brand-purple font-semibold group-hover:text-brand-magenta transition-colors">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
        
        {/* Decorative gradient blur */}
        <div className={`
          absolute -bottom-10 -right-10 w-32 h-32 
          bg-gradient-to-br from-brand-purple/20 to-brand-magenta/20 
          rounded-full blur-3xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        `} />
      </div>
    </Link>
  )
}