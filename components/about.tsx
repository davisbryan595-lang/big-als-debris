"use client"

import { CheckCircle } from "lucide-react"

export default function About() {
  const stats = [
    { label: "Years in Business", value: "10+" },
    { label: "Jobs Completed", value: "1000+" },
    { label: "Customer Satisfaction", value: "99%" },
    { label: "Service Area", value: "Corpus Christi" },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-text mb-6">
              Why Choose <span className="text-primary">Big Al's Debris?</span>
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Locally owned and operated in Corpus Christi, we're committed to providing fast, reliable, and
              eco-friendly junk removal services. With over a decade of experience, we've built our reputation on
              integrity, professionalism, and customer satisfaction.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Fast and efficient service",
                "Eco-friendly disposal practices",
                "Transparent pricing",
                "Professional and courteous team",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-text">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:glow-primary-hover transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 bg-surface rounded-xl border border-border hover:border-primary transition-all duration-300 text-center group hover:glow-primary-hover"
              >
                <div className="text-4xl sm:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
