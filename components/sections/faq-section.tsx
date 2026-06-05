"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "為什麼皮拉提斯單價較高？",
    answer:
      "在身體使用上的調整與極高專注度的體感開發，需要教練全程專注指導每一個動作細節，確保正確啟動深層肌群，這種一對一的精細調整是皮拉提斯訓練的核心價值。",
  },
  {
    question: "受過傷可以訓練嗎？",
    answer:
      "這正是整復師提供的價值。我們會先評估您的傷況與身體狀態，在安全排列的前提下進行修復性訓練，讓身體重新建立正確的動作模式。",
  },
  {
    question: "訓練多久可以看到效果？",
    answer:
      "每個人的身體狀況不同，一般來說，透過持續的訓練，約 4-8 週可以感受到體態與身體控制力的改變。長期的結構穩定則需要更完整的訓練週期。",
  },
  {
    question: "沒有運動經驗可以開始嗎？",
    answer:
      "完全沒問題。我們的訓練從基礎的身體覺知開始，透過整復調整與呼吸控制建立穩固的地基，再逐步進入更進階的訓練。",
  },
  {
    question: "上課時間如何安排？",
    answer:
      "課程採預約制，可以根據您的時間彈性安排。建議每週至少訓練 1-2 次，以維持訓練的連貫性與效果。",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="faq"
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
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
            常見問題
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
