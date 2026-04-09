import React from 'react'

interface Stat {
  number: string
  label: string
  suffix?: string
}

interface StatsSectionProps {
  stats: Stat[]
  variant?: 'light' | 'gradient'
}

export default function StatsSection({ 
  stats,
  variant = 'light' 
}: StatsSectionProps) {
  
  return (
    <section className={`
      py-16
      ${variant === 'gradient' 
        ? 'bg-gradient-brand text-white' 
        : 'bg-gradient-to-br from-gray-50 to-white'
      }
    `}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Number with gradient effect */}
              <div className={`
                text-5xl md:text-6xl font-bold mb-2
                ${variant === 'gradient'
                  ? 'text-white'
                  : 'bg-gradient-brand bg-clip-text text-transparent'
                }
                group-hover:scale-110 transition-transform duration-300
              `}>
                {stat.number}
                {stat.suffix && (
                  <span className="text-3xl md:text-4xl">{stat.suffix}</span>
                )}
              </div>
              
              {/* Label */}
              <div className={`
                text-sm md:text-base font-semibold uppercase tracking-wider
                ${variant === 'gradient'
                  ? 'text-white/80'
                  : 'text-gray-600'
                }
              `}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}