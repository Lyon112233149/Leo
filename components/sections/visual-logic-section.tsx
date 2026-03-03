"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scale, Ruler, Target } from "lucide-react"

const principles = [
  {
    icon: Scale,
    title: "平衡",
    description: "正確的骨骼排列帶來自然的身體平衡",
  },
  {
    icon: Ruler,
    title: "比例",
    description: "追求符合身體黃金比例的體態美感",
  },
  {
    icon: Target,
    title: "結構",
    description: "美感來自於正確的結構，而非單純的數字",
  },
]

export function VisualLogicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Visual Logic
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-6 text-balance">
            美學與邏輯
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            我們追求的不是體重的數字，
            <br className="hidden md:block" />
            而是符合身體黃金比例的平衡
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <principle.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 md:p-12 bg-card border border-border rounded-lg max-w-3xl mx-auto text-center"
        >
          <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic">
            「美感來自於正確的結構」
          </blockquote>
          <p className="mt-4 text-muted-foreground">
            —— 身體建築師的核心信念
          </p>
        </motion.div>
      </div>
    </section>
  )
}
