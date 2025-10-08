"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Taye's expertise in managing high-level events is exceptional. His ability to seamlessly moderate international conferences while maintaining professional excellence is truly remarkable.",
    author: "UNFPA Ethiopia",
    position: "Country Representative",
  },
  {
    quote:
      "We've worked with Taye on multiple Total Ethiopia events. His meticulous preparation and ability to adapt to any situation made our annual conventions a tremendous success.",
    author: "Total Energies Ethiopia",
    position: "Country Operations Manager",
  },
  {
    quote:
      "Taye's translation services during H.M Queen Maxima's visit were outstanding. His professionalism and cultural intelligence made complex diplomatic communications seamless.",
    author: "Netherlands Embassy Ethiopia",
    position: "Cultural Attaché",
  },
  {
    quote:
      "Having worked with Taye across multiple AFCA conferences, I can confidently say his expertise in moderating international coffee industry events is unmatched in the region.",
    author: "African Fine Coffees Association",
    position: "Executive Director",
  },
  {
    quote:
      "Taye's humanitarian leadership and fundraising capabilities are extraordinary. His events have raised millions for vulnerable communities while maintaining the highest professional standards.",
    author: "Muday Charity Association",
    position: "Executive Director",
  },
  {
    quote:
      "The Ethiopian Transport Investment Summit wouldn't have been the success it was without Taye's masterful facilitation. His understanding of complex topics and ability to engage stakeholders is impressive.",
    author: "Ethiopian Ministry of Transport",
    position: "Strategic Communications Director",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">What Clients Say</h3>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <Quote className="w-12 h-12 text-accent mx-auto opacity-50" />

              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground text-balance">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="space-y-2">
                <p className="font-semibold text-foreground text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full bg-transparent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-transparent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
