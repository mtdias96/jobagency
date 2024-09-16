'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Logo from '../Logo'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="text-white p-4 mt-7">
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="relative">
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          <div
            className={`fixed top-0 right-0 w-full h-full bg-black/60 text-white lg:hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              className="absolute top-4 right-4 p-2"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <ul className="flex flex-col items-center justify-center h-full space-y-6">
              <li>
                <a href="#banner" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" onClick={() => setIsOpen(false)}>
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setIsOpen(false)}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex space-x-10 opacity-70 font-sans">
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#technologies">Tecnologias</a>
            </li>
            <li>
              <a href="#portfolio">Projetos</a>
            </li>
            <li>
              <a href="#contact">Sobre</a>
            </li>
          </ul>
        </div>

        <a
          href="#"
          className="w-40 h-11 border border-white rounded-md backdrop-blur-sm  items-center justify-center hidden lg:flex"
        >
          Contate-nos
        </a>
      </nav>
    </header>
  )
}

export default Header
