import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-2xl">
      <div className="container-app">
        <div className="py-lg">
          <div className="flex flex-col gap-md">
            <div>
              <h3 className="text-lg font-bold text-neutral-900">Hoolah</h3>
              <p className="text-neutral-600 text-sm">Innovation & Infrastructure (66)</p>
            </div>
            <p className="text-neutral-600 text-sm flex items-center gap-xs">
              Made with <Heart size={16} className="text-primary-600" /> by Nexora
            </p>
            <p className="text-neutral-500 text-xs">
              © {currentYear} Hoolah. All rights reserved. Licensed under MIT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}