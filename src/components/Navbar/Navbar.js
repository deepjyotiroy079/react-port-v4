import React, { useState } from 'react'
import { Facebook, Linkedin, GitHub, Instagram, Twitter, Moon, ExternalLink } from 'react-feather';

const Navbar = () => {
  const size=28;
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <nav className='relative container mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='hidden md:flex space-x-6'>
          <a href='#' className='hover:text-violet-400' >About</a>
          <a href='#' className='hover:text-violet-400' >Experience</a>
          <a href='#' className='hover:text-violet-400' >Skills</a>
          <a href='#' className='hover:text-violet-400' >Contact</a>
        </div>
        <div>
          <Moon size={size} className='hover:text-violet-400' />
        </div>
        {/* Hamburger icon */}
        <section className="flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-1.5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 bg-gray-800"></span>
            <span className="block h-0.5 w-6 bg-gray-800"></span>
            <span className="block h-0.5 w-6 bg-gray-800"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 mt-[-5px] mr-[-6px]"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex font-semibold flex-col items-center justify-between min-h-[80px] space-y-10 mt-[-20px]">
              <li className="uppercase">
                <a href="/">About</a>
              </li>
              <li className="uppercase">
                <a href='/'>Experience</a>
              </li>
              <li className="uppercase">
                <a href='/'>Skills</a>
              </li>
              <li className="uppercase">
                <a href='/'>Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Mobile Menu */}

    </nav>
  )
}

export default Navbar