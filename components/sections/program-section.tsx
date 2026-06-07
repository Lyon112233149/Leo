"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const programs = [
  {
    name: "初階體驗",
    subtitle: "入門評估",
    description: "首次體態診斷與動作評估，了解自身身體結構現況，制定初步訓練方向。",
    featured: false,
  },
  {
    name: "體態重建",
    subtitle: "黃金週期",
    description: "系統性姿勢矯正與核心強化，搭配定期追蹤調整，打造穩定的身體基礎。",
    featured: true,
  },
  {
    name: "身體優化",
    subtitle: "進階訓練",
    description: "高階肌力規劃與運動表現提升，長期維持結構穩定，全面提升生活品質。",
    featured: false,
  },
]

function selectPlan(name: string) {
  document.dispatchEvent(new CustomEvent("body-architect:plan", { detail: name }))
  setTimeout(() => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, 50)
}

export function ProgramSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="programs"
      ref={ref}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Program Investment
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-4 text-balance">
            專案計畫
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            根據你的目標與身體狀況，選擇最適合的訓練方向，預約諮詢後量身規劃
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className={`h-full relative ${program.featured
                    ? "border-primary shadow-lg scale-105"
                    : "border-border hover:border-primary/30"
                  } transition-all duration-400 hover:shadow-lg`}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      <Star className="w-3 h-3" />
                      推薦方案
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-serif text-2xl tracking-tight text-foreground">
                    {program.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium mt-1">
                    {program.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <Button
                    onClick={() => selectPlan(program.name)}
                    className={`w-full ${program.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      } transition-all duration-300`}
                    aria-label={`預約${program.name}`}
                  >
                    預約體驗
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-[300px] snap-center"
              >
                <Card
                  className={`h-full relative ${program.featured
                      ? "border-primary shadow-lg"
                      : "border-border"
                    }`}
                >
                  {program.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        <Star className="w-3 h-3" />
                        推薦
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-serif text-xl tracking-tight text-foreground">
                      {program.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium mt-1">
                      {program.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-center text-muted-foreground text-sm leading-relaxed">
                      {program.description}
                    </p>
                    <Button
                      onClick={() => selectPlan(program.name)}
                      className={`w-full ${program.featured
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                        }`}
                      aria-label={`預約${program.name}`}
                    >
                      預約體驗
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
