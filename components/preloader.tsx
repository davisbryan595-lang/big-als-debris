"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo Container */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-black text-primary animate-bounce">BA</div>
          </div>
          {/* Rotating Border */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text mb-2">Big Al's Debris</h2>
          <p className="text-text-muted">Loading...</p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full animate-pulse"
            style={{
              animation: "loading 2s ease-in-out infinite",
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0%, 100% { width: 0%; }
          50% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
