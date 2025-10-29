"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#areas", label: "Areas Served" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-background group-hover:glow-primary-hover transition-all">
              BA
            </div>
            <span className="font-bold text-lg text-text hidden sm:inline">Big Al's</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2 bg-primary text-background font-bold rounded-lg hover:glow-primary-hover transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary hover:text-primary-light transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-text-muted hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block mx-4 mt-4 px-4 py-2 bg-primary text-background font-bold rounded-lg text-center hover:glow-primary-hover transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
