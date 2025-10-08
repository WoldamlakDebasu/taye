"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "UNFPA", category: "UN Agency" },
  { name: "UNDP", category: "UN Agency" },
  { name: "UNICEF", category: "UN Agency" },
  { name: "WFP", category: "UN Agency" },
  { name: "Total Energies", category: "Energy Sector" },
  { name: "Coca-Cola S.C", category: "Global Brand" },
  { name: "MIDROC Investment", category: "Investment Group" },
  { name: "Huawei", category: "Technology" },
  { name: "Ethiopian Airlines", category: "Aviation" },
  { name: "African Union", category: "International Organization" },
  { name: "USAID", category: "Development Agency" },
  { name: "Save the Children", category: "Humanitarian" },
]

const events = [
  {
    title: "Inauguration of Koyisha and Gorgora Parks",
    description: "MC for ground breaking ceremonies by H.E PM Abiy Ahmed and regional presidents",
    year: "2021",
    category: "Government Event"
  },
  {
    title: "World Coffee Conference (4th)",
    description: "Hosted international coffee event at UNECA Hall with ICO and global coffee industry leaders",
    year: "2020",
    category: "International Conference"
  },
  {
    title: "African Fine Coffee Conference (AFCA) 15th & 16th",
    description: "MC for premier African coffee industry conferences at Millennium Hall, Addis Ababa",
    year: "2017-2019",
    category: "International Conference"
  },
  {
    title: "Translation for H.M Queen Maxima Visit",
    description: "Official translator for 2-day visit of Queen Maxima of Netherlands as UN Special Advocate",
    year: "2019",
    category: "Diplomatic Event"
  },
  {
    title: "Arab-Ethiopian Exhibition and Conference",
    description: "Hosted major industrial exports and investment conference at UNCC",
    year: "2015",
    category: "International Trade"
  },
  {
    title: "Total Ethiopia Annual Dealers' Convention",
    description: "Fully organized and hosted Total's annual convention and depot inauguration in Dukem",
    year: "2017",
    category: "Corporate Event"
  },
  {
    title: "Ethio-Sudan Business Forum",
    description: "MC for international business forum at Sheraton Addis promoting bilateral trade relations",
    year: "2019",
    category: "International Business"
  },
  {
    title: "Miss Universe Beauty Pageant",
    description: "MC for Ethiopian Miss Universe event at Radisson Blu, later invited to Moscow for international finals",
    year: "2013",
    category: "Entertainment"
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Trusted by Global Leaders</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Over 21 years hosting high-profile events for government officials, UN agencies, Fortune 500 companies, 
            and international organizations across Ethiopia and globally
          </p>
        </motion.div>

        {/* Featured Events */}
        <div className="mb-20">
          <h4 className="text-2xl font-semibold mb-8 text-center">Featured Events</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="h-full p-8 rounded-lg bg-background border border-border hover:border-accent/50 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h5 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {event.title}
                      </h5>
                      <span className="text-sm text-accent font-medium">{event.year}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">
                        {event.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div>
          <h4 className="text-2xl font-semibold mb-8 text-center">Trusted Partners</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all duration-300 text-center">
                  <h5 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {partner.name}
                  </h5>
                  <p className="text-xs text-muted-foreground">{partner.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
