import React from 'react'
import { Phone, MessageSquare } from 'lucide-react'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  variant?: 'gradient' | 'cyan' | 'purple' | 'magenta'
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Call Now',
  primaryButtonHref = 'tel:+971501234567',
  secondaryButtonText = 'Book Service',
  secondaryButtonHref = '/contact',
  variant = 'gradient'
}: CTASectionProps) {
  
  const variants = {
    gradient: 'bg-gradient-brand',
    cyan: 'bg-brand-cyan',
    purple: 'bg-brand-purple',
    magenta: 'bg-brand-magenta'
  }
  
  return (
    <section className={`relative overflow-hidden ${variants[variant]} py-20`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            {description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={primaryButtonHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:bg-gray-100 shadow-2xl min-w-[200px] justify-center text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              {primaryButtonText}
            </a>
                        <a
              href={secondaryButtonHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-brand-purple min-w-[200px] justify-center text-lg transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  )
}