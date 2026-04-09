import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
  type = 'button'
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-brand-cyan text-white hover:bg-brand-cyan-dark focus:ring-brand-cyan shadow-cyan hover:shadow-cyan/50 hover:scale-105',
    secondary: 'bg-brand-purple text-white hover:bg-brand-purple-dark focus:ring-brand-purple shadow-brand hover:shadow-brand-lg hover:scale-105',
    accent: 'bg-brand-magenta text-white hover:bg-brand-magenta-dark focus:ring-brand-magenta shadow-magenta hover:shadow-magenta/50 hover:scale-105',
    outline: 'border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white focus:ring-brand-cyan',
    ghost: 'text-brand-purple hover:bg-brand-purple/10 focus:ring-brand-purple',
    gradient: 'bg-gradient-brand text-white hover:opacity-90 focus:ring-brand-purple shadow-brand-lg hover:scale-105'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3'
  }
  
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }
  
  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `
  
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={iconSizes[size]} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={iconSizes[size]} />}
    </>
  )
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  )
}