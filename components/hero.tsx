"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, continue anyway
      })
    }
  }, [])

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <video ref={videoRef} autoPlay muted loop playsInline poster="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F6e5ab5c2e0cd43ecb67a81073a8db740?format=webp&width=1600" preload="auto" className="absolute inset-0 w-full h-full object-cover">
        <source src="https://videos.pexels.com/video-files/5434275/5434275-hd_1280_720_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text mb-6 leading-tight">
            Big Al's <span className="text-primary">Debris</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast, Reliable, and Eco-Friendly Junk Removal in Corpus Christi, TX
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#contact"
              className="px-8 py-4 bg-primary text-background font-bold rounded-lg hover:glow-primary-hover transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 group animate-pulse-glow"
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div className="p-4 bg-surface/50 backdrop-blur rounded-lg border border-border hover:border-primary transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-text-muted">Jobs Completed</div>
            </div>
            <div className="p-4 bg-surface/50 backdrop-blur rounded-lg border border-border hover:border-primary transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-text-muted">Years Experience</div>
            </div>
            <div className="p-4 bg-surface/50 backdrop-blur rounded-lg border border-border hover:border-primary transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-text-muted">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
