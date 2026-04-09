import React from 'react'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
  service?: string
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  service
}: TestimonialCardProps) {
  
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-brand transition-all duration-300 group">
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center shadow-lg">
        <Quote className="w-6 h-6 text-white" />
      </div>
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Service Badge */}
      {service && (
        <div className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-semibold rounded-full mb-4">
          {service}
        </div>
      )}
      
      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{text}"
      </p>
      
      {/* Customer Info */}
      <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-cyan/5 to-brand-magenta/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}