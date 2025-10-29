"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Our Work" },
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
            <div className="w-16 h-16 flex items-center justify-center group-hover:glow-primary-hover transition-all overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F6e5ab5c2e0cd43ecb67a81073a8db740?format=webp&width=800"
                alt="Big Al's Debris logo"
                className="w-full h-full object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </div>
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
