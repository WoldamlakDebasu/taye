"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Professional image carousel data
  const professionalImages = [
    {
      src: "/taye_profile.jpg",
      alt: "Taye Worku - Professional MC and Event Host",
      title: "Elite MC & Host",
      subtitle: "Leading Corporate Events"
    },
    {
      src: "/taye7.jpg", 
      alt: "Taye Worku - Expert Moderator",
      title: "Expert Moderator",
      subtitle: "International Conferences"
    },
    {
      src: "/taye5.jpg",
      alt: "Taye Worku - Humanitarian Leader", 
      title: "Humanitarian Leader",
      subtitle: "Community Development"
    }
  ]

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === professionalImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [professionalImages.length])

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-4 py-2 rounded-full">
                About
              </h2>
            </motion.div>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-balance leading-tight text-black">
              Crafting Memorable
              <span className="block text-accent">Experiences</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professional Image Carousel Section */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="relative group perspective-1000"
            >
              <div className="relative">
                {/* Dynamic Background Effects */}
                <div className="absolute -inset-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/20 via-transparent to-purple-400/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                </div>

                {/* Main Image Carousel Container */}
                <motion.div 
                  className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20 group-hover:shadow-accent/20 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image Carousel */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={professionalImages[currentImageIndex].src}
                        alt={professionalImages[currentImageIndex].alt}
                        fill
                        className="object-cover object-center filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-700"
                        priority={currentImageIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Sophisticated Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent group-hover:from-accent/20 transition-all duration-500" />
                  
                  {/* Dynamic Status Badge */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={`badge-${currentImageIndex}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                      className="absolute bottom-6 left-6 right-6"
                    >
                      <div className="bg-gradient-to-r from-accent/95 to-yellow-500/95 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl">
                        <h4 className="text-black font-bold text-xl mb-1">{professionalImages[currentImageIndex].title}</h4>
                        <p className="text-black/80 text-sm font-semibold">{professionalImages[currentImageIndex].subtitle}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Image Navigation Dots */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {professionalImages.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-accent shadow-lg scale-125' 
                          : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                {/* Floating Achievement Indicators */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-yellow-500 rounded-xl p-3 shadow-xl border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-black font-black text-lg">21+</div>
                    <div className="text-black/80 text-xs font-bold">YEARS</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 shadow-xl border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-white font-black text-lg">500+</div>
                    <div className="text-white/90 text-xs font-bold">EVENTS</div>
                  </div>
                </motion.div>


              </div>
            </motion.div>

            {/* Text Section */}
            <div className="space-y-8">
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p className="text-pretty text-black font-normal">
                  Born December 27, 1977, Taye Worku is an insightful Master of Ceremonies, Event Manager, Public Relations Specialist, 
                  Moderator, Interpreter, and Communications Specialist with over <span className="font-bold text-accent">21 years</span> of 
                  experience successfully managing multi-disciplinary responsibilities across government, private sector, NGOs, UN agencies, 
                  embassies, and international organizations.
                </p>

                <p className="text-pretty text-gray-800 font-normal">
                  Starting his career as an English teacher for over 12 years in private and international schools in Addis Ababa, 
                  Taye transitioned into event management and communications. He holds a <span className="font-bold text-black">Masters candidate 
                  in Journalism and Communication from Addis Ababa University</span> and a Bachelor's Degree in English Language and Literature 
                  with Translation Minor from AAU's Institute of Language Studies.
                </p>

                <motion.div initial={false} animate={{ height: isExpanded ? "auto" : 0 }} className="overflow-hidden">
                  <div className="space-y-6 pt-4">
                    <p className="text-pretty text-gray-800 font-normal">
                      His humanitarian achievements include fundraising over <span className="font-bold text-accent">4.5 million birr</span> 
                      for various charity organizations including Macedonia Home for The Elderly, Muday Charity Association, 
                      Meseret Humanitarian Organization, and Niya Foundation/Joy Autism Centre. He has also organized 
                      exercise book campaigns benefiting over 6,000 school children.
                    </p>

                    <p className="text-pretty text-gray-800 font-normal">
                      Since January 2014, Taye has served as Communication Campaign Manager at E.M Communications PLC, 
                      managing Social Behavioral Change Communication interventions across health, nutrition, rural land, 
                      and business sectors in Amhara, Oromia, SNNP, and Tigray regions. His extensive 24-year work life 
                      has positioned him uniquely to connect the right people for specific tasks.
                    </p>

                    <div className="pt-8">
                      <h4 className="text-2xl font-bold text-black mb-6">Key Achievements</h4>
                      <div className="grid gap-4">
                        {[
                          "Hosted events for H.E PM Abiy Ahmed, President Sahle-work Zewdie, and international leaders",
                          "Moderated conferences for UNFPA, UNDP, UNICEF, WFP, FAO, ILO, IOM, USAID, and EU",
                          "Managed corporate events for Total Energies, Coca-Cola, MIDROC, Huawei, ZTE, and Ethiopian Airlines",
                          "Raised 4.5+ million birr for humanitarian causes through strategic fundraising events",
                        ].map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-lg bg-white border border-neutral-200 shadow-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-glow" />
                            <span className="text-gray-800 font-normal">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <Button
                  variant="ghost"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-accent hover:text-accent/80 hover:bg-accent/10 gap-2 font-semibold rounded-full px-6"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
