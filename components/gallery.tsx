"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Residential Cleanup",
    category: "Residential",
    image: "/junk-removal-residential-cleanup-before-after.jpg",
  },
  {
    id: 2,
    title: "Commercial Debris",
    category: "Commercial",
    image: "/commercial-junk-removal-construction-debris.jpg",
  },
  {
    id: 3,
    title: "Estate Cleanout",
    category: "Estate",
    image: "/estate-cleanout-junk-removal.jpg",
  },
  {
    id: 4,
    title: "Yard Waste Removal",
    category: "Yard",
    image: "/yard-waste-debris-removal-landscaping.jpg",
  },
  {
    id: 5,
    title: "Appliance Removal",
    category: "Appliances",
    image: "/old-appliance-removal-junk.jpg",
  },
  {
    id: 6,
    title: "Furniture Disposal",
    category: "Furniture",
    image: "/furniture-removal-junk-disposal.jpg",
  },
  {
    id: 7,
    title: "Construction Cleanup",
    category: "Construction",
    image: "/construction-site-cleanup-debris-removal.jpg",
  },
  {
    id: 8,
    title: "Garage Cleanout",
    category: "Garage",
    image: "/garage-cleanout-junk-removal.jpg",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
    setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length])
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
    setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length])
  }

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-text mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            See the transformations we've made for our satisfied customers across Corpus Christi
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category)
                setCurrentIndex(0)
                setSelectedImage(null)
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-background"
                  : "bg-surface border border-border text-text hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => {
                setSelectedImage(image)
                setCurrentIndex(filteredImages.indexOf(image))
              }}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-64 sm:h-72"
            >
              <img
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-primary hover:text-primary/80 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrev}
                className="p-3 bg-primary text-background rounded-lg hover:bg-primary/80 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="text-center text-text">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-text-muted">{selectedImage.category}</p>
                <p className="text-sm text-text-muted mt-2">
                  {currentIndex + 1} of {filteredImages.length}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="p-3 bg-primary text-background rounded-lg hover:bg-primary/80 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
