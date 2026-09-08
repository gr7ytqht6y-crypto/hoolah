import { ReactNode } from 'react'

interface ButtonProps {
  onClick?: () => void
  className?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  title?: string
}

export default function Button({
  onClick,
  className = '',
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  title,
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-md focus-ring transition-fast cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400',
    ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  }

  const sizeClasses = {
    sm: 'px-sm py-xs text-sm',
    md: 'px-md py-sm text-base',
    lg: 'px-lg py-md text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}