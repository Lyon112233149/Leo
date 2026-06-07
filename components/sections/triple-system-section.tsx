"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Layers, Dumbbell, Brain, PenLine, Zap } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Align",
    subtitle: "美式整復",
    description: "讓脊椎重回正確排列，保持身體的中心線。",
  },
  {
    icon: Dumbbell,
    title: "Strengthen",
    subtitle: "肌力體能訓練",
    description: "給予身體排列適當的強度，讓體態擁有更好的生活品質。",
  },
  {
    icon: Brain,
    title: "Optimize",
    subtitle: "人體邏輯架構優化",
    description: "從動作模式與身體力學出發，找出排列失衡的根本成因，系統性重建運動表現。",
  },
  {
    icon: Zap,
    title: "Resolve",
    subtitle: "身體問題解決",
    description: "針對慢性疼痛、動作限制與身體病徵，提供精準評估與個人化解決策略。",
  },
  {
    icon: PenLine,
    title: "Consult",
    subtitle: "健康顧問規劃",
    description: "結合運動醫學與生活型態規劃，協助建立長期可持續的健康管理模式。",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function TripleSystemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Professional Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
            專業服務項目
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-400 hover:shadow-lg hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-400">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl tracking-tight text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
