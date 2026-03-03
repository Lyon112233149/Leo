"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, ArrowRight } from "lucide-react"

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <>
      {/* CTA Section */}
      <section ref={ref} className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-6 text-balance">
              準備好重新設計你的身體了嗎？
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              預約一次體態診斷，開始你的身體建築之旅
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base transition-all duration-400 hover:scale-105 shadow-lg hover:shadow-xl group"
              aria-label="預約體態診斷"
            >
              <a
                href="https://docs.google.com/forms/d/16ph6vlRDvGYOibW5Z4Pz5PaIbX35q6LjjOKLTo8Pkuo/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                重新設計我的身體
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-center md:text-left">
              <a href="#" className="font-serif text-xl tracking-tight text-foreground">
                <span className="font-semibold">Body</span> Architect
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Shan Wealth · 身體建築師
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/leochenhuman?igsh=ODloNTFkZzI3ZDNl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="追蹤 Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Body Architect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden z-40">
        <Button
          asChild
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3"
          aria-label="預約體態診斷"
        >
          <a
            href="https://docs.google.com/forms/d/16ph6vlRDvGYOibW5Z4Pz5PaIbX35q6LjjOKLTo8Pkuo/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            預約體態診斷
          </a>
        </Button>
      </div>
    </>
  )
}
