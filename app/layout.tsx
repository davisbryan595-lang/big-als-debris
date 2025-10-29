import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Preloader from "@/components/preloader"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Big Al's Debris - Junk Removal Corpus Christi, TX",
  description:
    "Fast, reliable, and eco-friendly junk removal services in Corpus Christi, TX. Commercial & residential debris removal, garage cleanouts, and more.",
  keywords: "junk removal, debris removal, Corpus Christi, Texas, garage cleanout, construction debris",
  openGraph: {
    title: "Big Al's Debris - Junk Removal Corpus Christi, TX",
    description: "Fast, reliable, and eco-friendly junk removal services in Corpus Christi, TX.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={montserrat.className}>
        <Preloader />
        {children}
      </body>
    </html>
  )
}
