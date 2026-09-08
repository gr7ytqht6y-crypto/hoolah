import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

export default function Layout({ children, maxWidth = 'lg', className = '' }: LayoutProps) {
  const maxWidthClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full',
  }

  return (
    <div className={`container-app ${maxWidthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  )
}