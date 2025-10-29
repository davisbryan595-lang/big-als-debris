import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import AreasServed from "@/components/areas-served"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <Testimonials />
      <About />
      <AreasServed />
      <Contact />
      <Footer />
    </main>
  )
}
