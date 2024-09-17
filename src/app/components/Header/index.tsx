'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import Logo from '../Logo'
import ResponsiveMenu from './components/ResponsiveMenu'

interface NavItem {
  name: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#banner' },
  { name: 'Tecnologias', href: '#technologies' },
  { name: 'Projetos', href: '#portfolio' },
  { name: 'Sobre', href: '#contact' }
]

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <motion.header
      className="text-white p-4 mt-7 relative"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <Logo />

        <button
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        <ResponsiveMenu
          navItems={NAV_ITEMS}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />

        <ul className="hidden lg:flex space-x-10 opacity-70 font-sans">
          {NAV_ITEMS.map(({ name, href }) => (
            <li key={name}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="w-40 h-11 border border-white rounded-md backdrop-blur-sm  items-center justify-center hidden lg:flex"
        >
          Contate-nos
        </a>
      </nav>
    </motion.header>
  )
}

export default Header
