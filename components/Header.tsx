'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-warm-white/95 backdrop-blur-md border-b border-nude/50 shadow-md' : 'bg-warm-white border-b border-nude'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-ink font-bold tracking-widest text-xl transition-opacity duration-300 hover:opacity-70">
            NUDE
          </Link>
          <nav className="flex gap-8">
            <Link
              href="/"
              className={`text-sm tracking-wide transition-all duration-300 ${
                isActive('/') ? 'text-ink font-semibold' : 'text-stone hover:text-ink'
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`text-sm tracking-wide transition-all duration-300 ${
                isActive('/shop') ? 'text-ink font-semibold' : 'text-stone hover:text-ink'
              }`}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className={`text-sm tracking-wide transition-all duration-300 ${
                isActive('/blog') ? 'text-ink font-semibold' : 'text-stone hover:text-ink'
              }`}
            >
              Journal
            </Link>
            <a href="#" className="text-sm tracking-wide text-stone hover:text-ink transition-all duration-300">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
