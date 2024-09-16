import { XMarkIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

interface NavItem {
  name: string
  href: string
  onClick?: () => void
}

interface ResponsiveMenuProps {
  navItems: NavItem[]
  isOpen: boolean
  toggleMenu: () => void
}

const ResponsiveMenu: FC<ResponsiveMenuProps> = ({
  navItems,
  isOpen,
  toggleMenu
}) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-screen z-50 bg-black/80 text-white lg:hidden transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className="absolute top-4 right-4 p-2"
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
      <ul className="flex flex-col items-center justify-center h-full space-y-6">
        {navItems.map(({ name, href, onClick }) => (
          <li key={name}>
            <a href={href} onClick={onClick}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResponsiveMenu
