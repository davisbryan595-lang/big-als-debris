"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Facebook } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-text mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Ready for a free quote? Contact us today and let's get your space cleaned up!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <a
            href="tel:3616953499"
            className="p-8 bg-surface rounded-xl border border-border hover:border-primary transition-all duration-300 hover:glow-primary-hover group cursor-pointer"
          >
            <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Call Us</h3>
            <p className="text-primary font-semibold text-lg">(361) 695-3499</p>
            <p className="text-text-muted text-sm mt-2">Available 24/7</p>
          </a>

          <a
            href="mailto:Bigalsjunkremove@gmail.com"
            className="p-8 bg-surface rounded-xl border border-border hover:border-primary transition-all duration-300 hover:glow-primary-hover group cursor-pointer"
          >
            <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Email Us</h3>
            <p className="text-primary font-semibold break-all">Bigalsjunkremove@gmail.com</p>
            <p className="text-text-muted text-sm mt-2">We'll respond quickly</p>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-surface rounded-xl border border-border hover:border-primary transition-all duration-300 hover:glow-primary-hover group cursor-pointer"
          >
            <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-colors">
              <Facebook className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Follow Us</h3>
            <p className="text-primary font-semibold">Facebook</p>
            <p className="text-text-muted text-sm mt-2">Stay updated with us</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-surface rounded-xl border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="(361) 695-3499"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell us about your junk removal needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-background font-bold rounded-lg hover:glow-primary-hover transition-all duration-300 hover:scale-105"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
