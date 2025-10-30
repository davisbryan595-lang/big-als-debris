"use client"

import { Trash2, Home, Hammer, Leaf, ShoppingCart, Zap } from "lucide-react"

const services = [
  {
    icon: Trash2,
    title: "Commercial & Residential Junk Removal",
    description: "From homes to businesses, we haul it all with professional care and efficiency.",
  },
  {
    icon: Home,
    title: "Storage Units & Garage Clean Outs",
    description: "Clear out clutter with ease. We handle the heavy lifting so you don't have to.",
  },
  {
    icon: Hammer,
    title: "Construction Debris Haul Offs",
    description: "Keep your site clean and safe. We remove all construction waste responsibly.",
  },
  {
    icon: Leaf,
    title: "Yard Waste and Brush Removal",
    description: "Transform your yard today. Professional removal of all yard debris.",
  },
  {
    icon: ShoppingCart,
    title: "Garage & Estate Sale Leftovers",
    description: "We handle the leftovers so you don't have to. Quick and hassle-free removal.",
  },
  {
    icon: Zap,
    title: "Appliance & Furniture Removal",
    description: "Heavy items made easy. We safely remove and dispose of large items.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center bg-surface relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-text mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Comprehensive junk removal solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-background/50 backdrop-blur border border-border rounded-xl hover:border-primary transition-all duration-300 hover:glow-primary-hover hover:scale-105 cursor-pointer flex flex-col h-full justify-between w-full max-w-[360px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{service.description}</p>
                <div className="mt-4 inline-block text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
