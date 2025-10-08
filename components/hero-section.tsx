"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Screen Professional Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/taye_profile.jpg"
          alt="Taye Worku - Professional MC and Event Host"
          fill
          className="object-cover object-center brightness-90 contrast-110 saturate-110"
          priority
          sizes="100vw"
          quality={95}
        />
        
        {/* Professional Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        
        {/* Dynamic Accent Overlays */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated Light Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-accent/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-blue-400/20 to-transparent blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Professional Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black/30 backdrop-blur-xl border border-accent/30 shadow-2xl"
          >
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
              21+ YEARS OF EXCELLENCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter text-balance"
          >
            <span className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent drop-shadow-2xl">
              TAYE WORKU
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl"></div>
            <p className="relative text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-balance max-w-4xl mx-auto py-6 px-8">
              <span className="text-white/90 font-medium">Master of Ceremonies</span>
              <span className="text-accent font-bold mx-2">•</span>
              <span className="text-white/90 font-medium">Event Manager</span>
              <span className="text-accent font-bold mx-2">•</span>
              <span className="text-white/90 font-medium">Moderator & Translator</span>
              <span className="text-accent font-bold mx-2">•</span>
              <span className="text-white/90 font-medium">Communications Expert</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed text-pretty bg-black/20 backdrop-blur-sm rounded-xl py-6 px-8 border border-white/10"
          >
            Master of Ceremonies with over 21 years of experience managing multi-disciplinary responsibilities across government, 
            private sector, NGOs, UN agencies, and international organizations. 
            <span className="text-accent font-semibold">Specializing in event management, moderation, translation, and communication campaigns.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-accent via-yellow-400 to-accent text-black hover:from-yellow-400 hover:via-accent hover:to-yellow-400 text-lg px-12 py-8 rounded-full shadow-2xl group font-bold border-2 border-white/20"
              >
                <a href="#contact" className="flex items-center gap-3">
                  BOOK ME FOR YOUR EVENT
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-12 py-8 rounded-full border-2 bg-black/30 backdrop-blur-xl hover:bg-accent/20 font-bold text-white border-white/30 hover:border-accent shadow-2xl"
              >
                <a href="#portfolio">VIEW PORTFOLIO</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-20"
          >
            <p className="text-xs text-muted-foreground mb-8 uppercase tracking-widest font-semibold">
              Trusted by Leading Organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                UNFPA
              </span>
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                UNDP
              </span>
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                Total Energies
              </span>
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                USAID
              </span>
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                Coca-Cola
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-accent/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-accent rounded-full shadow-glow" />
        </motion.div>
      </motion.div>
    </section>
  )
}
