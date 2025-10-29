"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Small Load",
    price: "$99",
    description: "Perfect for small cleanups",
    features: [
      "Up to 1/4 truck load",
      "Single room or area",
      "Same-day service available",
      "Free estimate",
      "Eco-friendly disposal",
    ],
    highlighted: false,
  },
  {
    name: "Medium Load",
    price: "$199",
    description: "Most popular choice",
    features: [
      "Up to 1/2 truck load",
      "Multiple rooms",
      "Priority scheduling",
      "Free estimate",
      "Eco-friendly disposal",
      "Furniture removal included",
    ],
    highlighted: true,
  },
  {
    name: "Large Load",
    price: "$349",
    description: "For major cleanouts",
    features: [
      "Up to full truck load",
      "Entire house/property",
      "Same-day service",
      "Free estimate",
      "Eco-friendly disposal",
      "Heavy appliance removal",
      "Junk sorting & recycling",
    ],
    highlighted: false,
  },
  {
    name: "Custom Quote",
    price: "Call",
    description: "For specialized needs",
    features: [
      "Estate cleanouts",
      "Commercial debris",
      "Construction cleanup",
      "Multiple truck loads",
      "Custom scheduling",
      "Dedicated crew",
      "Flexible pricing",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-text mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for quality junk removal services.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                tier.highlighted
                  ? "lg:scale-105 border-2 border-primary bg-surface/80 shadow-2xl shadow-primary/20"
                  : "border border-border bg-surface/50 hover:border-primary"
              }`}
            >
              {/* Highlighted Badge */}
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-background py-2 text-center font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${tier.highlighted ? "pt-16" : ""}`}>
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-text mb-2">{tier.name}</h3>
                <p className="text-text-muted text-sm mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-black text-primary">{tier.price}</span>
                  {tier.price !== "Call" && <span className="text-text-muted ml-2">starting</span>}
                </div>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 mb-8 block text-center ${
                    tier.highlighted
                      ? "bg-primary text-background hover:bg-primary/80"
                      : "border-2 border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  {tier.price === "Call" ? "Get Quote" : "Book Now"}
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-surface/50 border border-border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-text mb-4">Need Something Different?</h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            We offer flexible pricing for commercial projects, estate cleanouts, and specialized services. Contact us
            for a free, no-obligation estimate.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/80 transition-colors"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
