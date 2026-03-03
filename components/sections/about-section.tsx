"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/leochenhuman?igsh=ODloNTFkZzI3ZDNl",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-lg transform translate-x-4 translate-y-4" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/377024-C5p3bC7jMLDKolPBAxtbCqy3ZnvlW7.jpg"
              alt="Shan Wealth 教練專業形象照"
              fill
              className="object-cover rounded-lg relative z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
                About the Architect
              </p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-2">
                職人自白
              </h2>
            </div>

            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
              <p className="text-sm text-foreground">
                台灣美式整復總會認證整復師
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                我看見身體代償，是一位「懂身體的人」。
              </p>
              <p>
                我的任務是將整復的地基、皮拉提斯的控制與重訓的強韌，
                拼湊成完整的健康圖版。
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">追蹤我的動態</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
              訓練實況
            </h3>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden bg-card border border-border shadow-lg">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dafca571-358d-4469-ba8b-2b6c482d87aa-692qpyEMM2fi5VyUxhAXqerA7pC9d6.mp4"
                controls
                className="w-full h-full object-cover"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/373877-34D3TDgX6Gb1KDoMvruvJktX9WbfPF.jpg"
              >
                您的瀏覽器不支援影片播放
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
