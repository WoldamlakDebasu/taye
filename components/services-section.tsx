"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mic, Users, Lightbulb, Calendar, Heart, Globe, Radio, FileText } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Mic,
    title: "Master of Ceremonies",
    description: "Hosting government, corporate and international events in both Amharic and English for over 15 years with high-level understanding and professionalism.",
    image: "/taye01.jpg",
  },
  {
    icon: Users,
    title: "Event Management & Moderation",
    description: "Complete event organization from concept to execution, managing high-profile events for UN agencies, government ministries, and Fortune 500 companies.",
    image: "/taye02.jpg",
  },
  {
    icon: Globe,
    title: "Translation & Interpretation",
    description: "Professional translation and interpretation services with expertise in English-Amharic, supporting international conferences and diplomatic events.",
    image: "/taye03.jpg",
  },
  {
    icon: Lightbulb,
    title: "Communication Strategy & Campaigns",
    description: "Social Behavioral Change Communication interventions, multimedia campaign design, and media management across health, nutrition, and business sectors.",
    image: "/taye04.jpg",
  },
  {
    icon: Radio,
    title: "Radio Hosting & Media Coordination",
    description: "Co-hosted radio shows on Sheger FM and Ahadu FM, discussing social issues and promoting charitable causes. Extensive media coordination and press briefing experience.",
    image: "/taye05.jpg",
  },
  {
    icon: Heart,
    title: "Humanitarian Leadership",
    description: "Fundraising events and awareness campaigns for charitable organizations, raising over 4.5 million birr for vulnerable communities and humanitarian causes.",
    image: "/taye_profile.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-4 py-2 rounded-full">
              Services
            </h2>
          </motion.div>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-balance text-white">
            Excellence in
            <span className="block text-accent">Every Role</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-light">
            Professional expertise across event management, communications, translation, media coordination, and humanitarian initiatives. 
            Trusted by organizations from UN agencies to Fortune 500 companies across Ethiopia and internationally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 relative">
                <div className="absolute inset-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/30 transition-all duration-500 shadow-lg border border-accent/30">
                      <service.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-200 leading-relaxed font-light text-lg">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


