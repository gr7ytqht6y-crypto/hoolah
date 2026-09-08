import { TextareaHTMLAttributes } from 'react'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export default function Input({
  label,
  error,
  helperText,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-900 mb-xs">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-md py-sm border rounded-md font-mono text-sm transition-fast focus-ring ${
          error
            ? 'border-red-500 focus:ring-red-500 focus:ring-offset-0'
            : 'border-neutral-300 focus:ring-primary-500 hover:border-neutral-400'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-600 text-sm mt-xs">{error}</p>}
      {helperText && !error && <p className="text-neutral-500 text-sm mt-xs">{helperText}</p>}
    </div>
  )
}