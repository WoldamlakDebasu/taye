"use client"
import { motion } from "framer-motion"
import { Heart, Users, TrendingUp, Globe } from "lucide-react"


const impacts = [
  {
    icon: Users,
    number: "50,000+",
    label: "Lives Impacted",
  },
  {
    icon: TrendingUp,
    number: "$5M+",
    label: "Funds Raised",
  },
  {
    icon: Globe,
    number: "30+",
    label: "Countries Reached",
  },
  {
    icon: Heart,
    number: "100+",
    label: "Charity Events",
  },
]

const initiatives = [
  {
    title: "Education for All",
    description:
      "Supporting educational programs and scholarship initiatives for underprivileged children across Africa.",
  },
  {
    title: "Healthcare Access",
    description: "Facilitating medical camps and healthcare awareness campaigns in rural communities.",
  },
  {
    title: "Women Empowerment",
    description: "Leading workshops and mentorship programs for women entrepreneurs and leaders.",
  },
  {
    title: "Disaster Relief",
    description:
      "Coordinating emergency response and fundraising efforts for communities affected by natural disasters.",
  },
]

export function HumanitarianSection() {
  return (
    <section id="humanitarian" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Humanitarian Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Making a Difference</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Committed to creating positive change and empowering communities worldwide
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-lg bg-card border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                <impact.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{impact.number}</div>
              <div className="text-sm text-muted-foreground">{impact.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-foreground mb-3">{initiative.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


