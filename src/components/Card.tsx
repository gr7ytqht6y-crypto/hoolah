import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  title?: string
  description?: string
}

export default function Card({ children, className = '', title, description }: CardProps) {
  return (
    <div className={`bg-neutral-0 border border-neutral-200 rounded-lg p-lg transition-fast hover:shadow-md hover:border-neutral-300 ${className}`}>
      {title && (
        <div className="mb-md">
          <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
          {description && <p className="text-neutral-600 text-sm mt-xs">{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}