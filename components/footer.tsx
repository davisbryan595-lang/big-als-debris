"use client"

import Link from "next/link"
import { Facebook, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-background">
                BA
              </div>
              <span className="font-bold text-lg text-text">Big Al's Debris</span>
            </div>
            <p className="text-text-muted">Your trusted junk removal experts in Corpus Christi, TX</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About" },
                { href: "#areas", label: "Areas Served" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-text mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:3616953499" className="block text-text-muted hover:text-primary transition-colors">
                (361) 695-3499
              </a>
              <a
                href="mailto:Bigalsjunkremove@gmail.com"
                className="block text-text-muted hover:text-primary transition-colors break-all"
              >
                Bigalsjunkremove@gmail.com
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mt-4"
              >
                <Facebook size={20} />
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">© 2025 Big Al's Debris. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
