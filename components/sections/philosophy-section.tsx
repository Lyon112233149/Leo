"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
            品牌靈魂
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed tracking-tight">
              「這裡不賣按表抄課，
              <br className="hidden md:block" />
              只解決身體裡一直沒被處理的
              <span className="text-primary">起源痛點</span>」
            </p>
          </blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              當你與身體對話時，我負責翻譯，
              <br />
              並為你設計規劃。
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 w-24 h-px bg-primary mx-auto origin-center"
        />
      </div>
    </section>
  )
}
