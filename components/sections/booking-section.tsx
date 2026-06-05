"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Check, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const TIME_SLOTS = [
  "06:00 – 07:00", "07:00 – 08:00", "08:00 – 09:00",
  "09:00 – 10:00", "10:00 – 11:00", "11:00 – 12:00",
  "13:00 – 14:00", "14:00 – 15:00", "15:00 – 16:00",
  "16:00 – 17:00", "17:00 – 18:00", "18:00 – 19:00",
  "19:00 – 20:00", "20:00 – 21:00", "21:00 – 22:00",
]

const PLANS = [
  { value: "24", sessions: "24", name: "動作矯正計畫", tier: "入門首選", desc: "全身動作評估 · 基礎動作矯正 · 呼吸模式建立 · 核心啟動訓練", featured: false },
  { value: "36", sessions: "36", name: "排列校正計畫", tier: "習慣養成", desc: "姿勢校正延伸 · 深層核心控制 · 動作模式建立 · 階段性追蹤", featured: false },
  { value: "48", sessions: "48", name: "體態重建計畫", tier: "黃金週期", desc: "完整體態矯正 · 進階皮拉提斯 · 核心抗阻訓練 · 動作優化 · 定期追蹤", featured: true },
  { value: "72", sessions: "72", name: "身體優化專案", tier: "運動醫學等級", desc: "全方位運動處方 · 高階重訓規劃 · 長期結構穩定 · 運動表現提升", featured: false },
  { value: "108", sessions: "108", name: "終身結構管理", tier: "完整蛻變", desc: "深度體態重塑 · 客製化處方 · 長期穩定維持 · 終身健康管理", featured: false },
]

type FormState = {
  date: string; time: string; name: string; phone: string; intro: string; plan: string
}

const inputCls = "w-full px-3 py-2.5 bg-input border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-primary transition-colors"

export function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [form, setForm] = useState<FormState>({ date: "", time: "", name: "", phone: "", intro: "", plan: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Receive pre-selected plan from ProgramSection
  useEffect(() => {
    function handler(e: Event) {
      const plan = (e as CustomEvent<string>).detail
      setForm(prev => ({ ...prev, plan }))
    }
    document.addEventListener("body-architect:plan", handler)
    return () => document.removeEventListener("body-architect:plan", handler)
  }, [])

  function set(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "發送失敗")
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "發送失敗，請稍後再試")
    } finally {
      setLoading(false)
    }
  }

  const selectedPlan = PLANS.find(p => p.value === form.plan)

  return (
    <section
      id="booking"
      ref={ref}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Reservation</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-4 text-balance">
            預約體態診斷
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            留下你的狀況，我們為你翻譯身體的語言，設計專屬訓練規劃
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >

          {/* ── Success State ── */}
          {submitted && (
            <div className="bg-card border border-primary/30 rounded-xl p-10 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Reservation Received</p>
              <h3 className="font-serif text-2xl text-foreground mb-3">預約已送出</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {form.name} 你好，已收到你的
                <span className="text-foreground font-medium">「{selectedPlan?.name}（{form.plan} 堂）」</span>
                方案預約。
                <br />我們會盡快以電話與你確認，安排第一次體態診斷。
              </p>
            </div>
          )}

          {/* ── Form ── */}
          {!submitted && (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Block 01: 預約時間 */}
              <FormBlock eyebrow="01" title="預約時間">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-wide text-muted-foreground mb-1.5">希望日期 <span className="text-primary">*</span></label>
                    <input type="date" required value={form.date} onChange={e => set("date", e.target.value)} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide text-muted-foreground mb-1.5">希望時段 <span className="text-primary">*</span></label>
                    <select required value={form.time} onChange={e => set("time", e.target.value)} className={inputCls}>
                      <option value="">請選擇</option>
                      {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide text-muted-foreground mb-1.5">姓名 <span className="text-primary">*</span></label>
                    <input type="text" required placeholder="你的稱呼" value={form.name} onChange={e => set("name", e.target.value)} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide text-muted-foreground mb-1.5">聯絡電話 <span className="text-primary">*</span></label>
                    <input type="tel" required placeholder="09XX-XXX-XXX" value={form.phone} onChange={e => set("phone", e.target.value)} className={inputCls} />
                  </div>
                </div>
              </FormBlock>

              {/* Block 02: 身體狀況 */}
              <FormBlock eyebrow="02" title="身體狀況與目標">
                <label className="block text-xs tracking-wide text-muted-foreground mb-1.5">痛點 · 訓練目標 · 運動經歷</label>
                <textarea
                  rows={4}
                  placeholder="例如：久坐肩頸鎖死、腰椎沈重、左膝曾受傷、想改善體態與排列，過去的運動經驗與可訓練時間…"
                  value={form.intro}
                  onChange={e => set("intro", e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </FormBlock>

              {/* Block 03: 方案選擇 */}
              <FormBlock eyebrow="03" title="選擇訓練方案">
                <div className="space-y-3">
                  {PLANS.map(plan => {
                    const active = form.plan === plan.value
                    return (
                      <label
                        key={plan.value}
                        className={`relative flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                          active
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border hover:border-primary/40 bg-card"
                        }`}
                      >
                        <input
                          type="radio" name="plan" value={plan.value} required
                          checked={active} onChange={() => set("plan", plan.value)}
                          className="sr-only"
                        />
                        {/* Radio indicator */}
                        <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          active ? "border-primary" : "border-border"
                        }`}>
                          {active && <div className="w-2 h-2 rounded-full bg-primary" />}
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-baseline gap-2">
                              <span className={`font-serif text-2xl leading-none transition-colors ${active ? "text-primary" : "text-foreground"}`}>
                                {plan.sessions}
                              </span>
                              <span className="text-xs text-muted-foreground">堂</span>
                              <span className="font-medium text-sm text-foreground">{plan.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground italic">{plan.tier}</span>
                              {plan.featured && (
                                <span className="text-xs px-2 py-0.5 bg-secondary/20 text-secondary-foreground rounded-full border border-secondary/30">
                                  推薦
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{plan.desc}</p>
                        </div>
                      </label>
                    )
                  })}
                </div>
              </FormBlock>

              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-6 text-base tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-[1.01] shadow-md hover:shadow-lg"
              >
                {loading ? "送出中…" : "送 出 預 約"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                送出後將以電話與你確認 · 個人資料僅用於課程安排
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function FormBlock({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <span className="font-serif text-xs text-primary italic">{eyebrow}</span>
        <div className="w-px h-3 bg-border" />
        <h3 className="font-serif text-base tracking-wide text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  )
}
