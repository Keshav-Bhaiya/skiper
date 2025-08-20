"use client"
import { useState } from "react"

const NavPart1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogoClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
      {/* Mobile Hamburger Menu */}
      <div className="relative md:hidden">
        <button
          className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
              <div className="py-2">
                <a
                  href="https://skiper-ui.com/docs/components/theme-toggle-animations"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Components
                </a>
                <a
                  href="https://skiper-ui.com/pricing"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="https://skiper-ui.com/newsletter"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Newsletter
                </a>
              </div>
            </div>
            {/* Background overlay */}
            <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)} />
          </>
        )}
      </div>

      {/* Logo Section with Smooth Scroll */}
      <a 
        className="flex items-center gap-1 sm:gap-2 cursor-pointer" 
        href="#"
        onClick={handleLogoClick}
      >
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 sm:size-6"
        >
          <ellipse cx="30.882" cy="30.803" rx="30.3097" ry="30.2769" fill="url(#paint0_radial_36_64)"></ellipse>
          <defs>
            <radialGradient
              id="paint0_radial_36_64"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)"
            >
              <stop offset="0.352001" stopColor="#090909"></stop>
              <stop offset="0.591494" stopColor="#2770EA"></stop>
              <stop offset="0.793825" stopColor="#FF7E97"></stop>
              <stop offset="0.972489" stopColor="#FF9203"></stop>
            </radialGradient>
          </defs>
        </svg>
        <h4 className="font-bold text-lg sm:text-xl">skiper/ui</h4>
        <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 border border-orange-600 rounded-full text-orange-600">
          Beta
        </span>
      </a>

      {/* Navigation Links - Hidden on mobile, shown on larger screens */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-2 lg:ml-4">
        <a href="https://skiper-ui.com/docs/components/theme-toggle-animations" className="text-gray-600 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300  transition-colors">
          Components
        </a>
        <a href="https://skiper-ui.com/pricing" className="text-gray-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300  transition-colors">
          Pricing
        </a>
        <a href="https://skiper-ui.com/newsletter" className="text-gray-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300  transition-colors">
          Newsletter
        </a>
      </div>
    </div>
  )
}

export default NavPart1