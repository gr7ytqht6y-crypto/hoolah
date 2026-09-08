import { Link } from 'react-router-dom'

interface NavigationProps {
  activeNav: string
  setActiveNav: (nav: string) => void
}

export default function Navigation({ activeNav, setActiveNav }: NavigationProps) {
  const links = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'tools', label: 'Tools', path: '/tools' },
    { id: 'about', label: 'About', path: '/about' },
  ]

  return (
    <nav className="bg-neutral-50 border-b border-neutral-200 sticky top-0 z-40">
      <div className="container-app">
        <div className="flex gap-lg overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setActiveNav(link.id)}
              className={`px-md py-sm text-base font-medium transition-fast border-b-2 whitespace-nowrap ${
                activeNav === link.id
                  ? 'text-primary-600 border-primary-600'
                  : 'text-neutral-600 border-transparent hover:text-neutral-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}