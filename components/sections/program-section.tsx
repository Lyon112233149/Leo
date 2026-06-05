"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const programs = [
  {
    name: "動作矯正計畫",
    sessions: "24 堂",
    subtitle: "入門首選",
    description: "動作評估與基礎矯正建立",
    features: [
      "全身動作評估",
      "基礎動作矯正",
      "呼吸模式建立",
      "核心啟動訓練",
    ],
    featured: false,
  },
  {
    name: "體態重建計畫",
    sessions: "48 堂",
    subtitle: "黃金週期",
    description: "姿勢矯正與核心抗阻強化",
    features: [
      "完整體態矯正",
      "進階皮拉提斯",
      "核心抗阻訓練",
      "動作模式優化",
      "定期追蹤調整",
    ],
    featured: true,
  },
  {
    name: "身體優化專案",
    sessions: "72 堂",
    subtitle: "運動醫學等級",
    description: "高階訓練模式與長期結構穩定",
    features: [
      "全方位運動處方",
      "高階重訓規劃",
      "長期結構穩定",
      "運動表現提升",
      "終身健康管理",
    ],
    featured: false,
  },
]

function selectPlan(sessions: string) {
  document.dispatchEvent(new CustomEvent("body-architect:plan", { detail: sessions }))
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
            根據您的目標與狀況，選擇最適合的訓練方案
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
                  <CardDescription className="text-primary font-medium mb-1">
                    {program.sessions}
                  </CardDescription>
                  <CardTitle className="font-serif text-2xl tracking-tight text-foreground">
                    {program.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {program.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-muted-foreground text-sm">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => selectPlan(program.sessions.replace(" 堂", ""))}
                    className={`w-full ${program.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      } transition-all duration-300`}
                    aria-label={`預約${program.name}`}
                  >
                    立即預約
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
                    <CardDescription className="text-primary font-medium mb-1">
                      {program.sessions}
                    </CardDescription>
                    <CardTitle className="font-serif text-xl tracking-tight text-foreground">
                      {program.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {program.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-center text-muted-foreground text-sm">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${program.featured
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                        }`}
                      aria-label={`了解${program.name}更多資訊`}
                    >
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfk8hHXqVY3UpPSwHL2eKHTRlsASJZML6F00ZpWO2AiNlOCCg/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        了解更多
                      </a>
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
