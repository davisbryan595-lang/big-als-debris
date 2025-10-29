"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Big Al's Debris removed years of accumulated junk from my garage in just one day. Professional, efficient, and they even recycled most of it. Highly recommended!",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "Property Manager",
    content:
      "We use Big Al's for all our commercial cleanups. They're reliable, affordable, and always on time. Best junk removal service in Corpus Christi!",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "Estate Executor",
    content:
      "Handling my mother's estate was overwhelming, but Big Al's made it easy. They cleared everything out respectfully and efficiently. Thank you!",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Contractor",
    content:
      "I recommend Big Al's to all my clients for post-construction cleanup. They handle large debris loads with ease and professionalism.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Business Owner",
    content:
      "Quick response, fair pricing, and excellent service. They cleared out our old office furniture and equipment without any hassle.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    id: 6,
    name: "Robert Thompson",
    role: "Homeowner",
    content:
      "The team was friendly, professional, and got the job done faster than expected. Will definitely call them again for future cleanups.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-text mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Big Al's Debris for their junk removal needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-surface/50 border border-border rounded-lg hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-muted mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="font-bold text-text">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-8 bg-surface/50 border border-border rounded-lg text-center hover:border-primary transition-colors">
            <div className="text-4xl font-black text-primary mb-2">4.9/5</div>
            <p className="text-text-muted">Average Rating</p>
            <p className="text-sm text-text-muted mt-2">Based on 500+ reviews</p>
          </div>
          <div className="p-8 bg-surface/50 border border-border rounded-lg text-center hover:border-primary transition-colors">
            <div className="text-4xl font-black text-primary mb-2">2000+</div>
            <p className="text-text-muted">Happy Customers</p>
            <p className="text-sm text-text-muted mt-2">Across Corpus Christi</p>
          </div>
          <div className="p-8 bg-surface/50 border border-border rounded-lg text-center hover:border-primary transition-colors">
            <div className="text-4xl font-black text-primary mb-2">100%</div>
            <p className="text-text-muted">Satisfaction Guarantee</p>
            <p className="text-sm text-text-muted mt-2">Or your money back</p>
          </div>
        </div>
      </div>
    </section>
  )
}
