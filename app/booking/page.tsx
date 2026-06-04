"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

const TIME_SLOTS = [
  "06:00 – 07:00", "07:00 – 08:00", "08:00 – 09:00",
  "09:00 – 10:00", "10:00 – 11:00", "11:00 – 12:00",
  "13:00 – 14:00", "14:00 – 15:00", "15:00 – 16:00",
  "16:00 – 17:00", "17:00 – 18:00", "18:00 – 19:00",
  "19:00 – 20:00", "20:00 – 21:00", "21:00 – 22:00",
]

const PLANS = [
  {
    value: "24",
    sessions: "24",
    name: "結構覺知計畫",
    tier: "入門首選",
    desc: "體態評估診斷 · 基礎整復調整 · 呼吸模式建立 · 核心啟動訓練",
    featured: false,
  },
  {
    value: "36",
    sessions: "36",
    name: "排列校正計畫",
    tier: "習慣養成",
    desc: "姿勢校正延伸 · 深層核心控制 · 動作模式建立 · 階段性追蹤",
    featured: false,
  },
  {
    value: "48",
    sessions: "48",
    name: "體態重建計畫",
    tier: "黃金週期",
    desc: "完整體態矯正 · 進階皮拉提斯 · 核心抗阻訓練 · 動作優化 · 定期追蹤",
    featured: true,
  },
  {
    value: "72",
    sessions: "72",
    name: "身體優化專案",
    tier: "運動醫學等級",
    desc: "全方位運動處方 · 高階重訓規劃 · 長期結構穩定 · 運動表現提升",
    featured: false,
  },
  {
    value: "108",
    sessions: "108",
    name: "終身結構管理",
    tier: "完整蛻變",
    desc: "深度體態重塑 · 客製化處方 · 長期穩定維持 · 終身健康管理",
    featured: false,
  },
]

type FormState = {
  date: string
  time: string
  name: string
  phone: string
  intro: string
  plan: string
}

export default function BookingPage() {
  const [form, setForm] = useState<FormState>({
    date: "", time: "", name: "", phone: "", intro: "", plan: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function setField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
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
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "發送失敗，請稍後再試")
    } finally {
      setLoading(false)
    }
  }

  const selectedPlan = PLANS.find((p) => p.value === form.plan)

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#16140f",
        backgroundImage:
          "radial-gradient(circle at 15% -5%, rgba(201,169,106,.07), transparent 38%), radial-gradient(circle at 95% 95%, rgba(201,169,106,.05), transparent 42%)",
        color: "#ece8df",
        fontFamily: "'Noto Sans TC', sans-serif",
        fontWeight: 300,
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 26px 100px" }}>

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors"
          style={{ color: "#9a9384", letterSpacing: "0.05em", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9384")}
        >
          <ArrowLeft size={14} />
          返回首頁
        </Link>

        {/* Success state */}
        {submitted && (
          <div
            style={{
              textAlign: "center",
              padding: "64px 28px",
              border: "1px solid #c9a96a",
              borderRadius: 4,
              background: "linear-gradient(180deg, rgba(201,169,106,.08), transparent)",
              animation: "fadeUp .6s ease",
            }}
          >
            <div
              style={{
                width: 56, height: 56,
                borderRadius: "50%",
                background: "rgba(201,169,106,.15)",
                border: "1px solid #c9a96a",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <Check size={24} color="#c9a96a" />
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 16, letterSpacing: 3, color: "#c9a96a", textTransform: "uppercase", marginBottom: 14 }}>
              Reservation Received
            </p>
            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: 30, fontWeight: 500, letterSpacing: 1, marginBottom: 16 }}>
              預約已送出
            </h2>
            <p style={{ color: "#9a9384", fontWeight: 300, maxWidth: "36ch", margin: "0 auto 8px" }}>
              {form.name} 你好，已收到你的「{selectedPlan?.name}（{form.plan} 堂）」方案預約
            </p>
            <p style={{ color: "#9a9384", fontWeight: 300, fontSize: 14 }}>
              {form.date} · {form.time}
            </p>
            <p style={{ color: "#9a9384", fontWeight: 300, marginTop: 16, fontSize: 14 }}>
              我們會盡快以電話與你確認，安排第一次體態診斷。
            </p>
          </div>
        )}

        {/* Form */}
        {!submitted && (
          <>
            {/* Hero */}
            <header style={{ marginBottom: 64, borderBottom: "1px solid #3a362c", paddingBottom: 48 }}>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, letterSpacing: 5, color: "#c9a96a", textTransform: "uppercase", fontStyle: "italic", margin: "0 0 18px" }}>
                Body Architect
              </p>
              <h1 style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 500, fontSize: "clamp(34px, 7vw, 52px)", lineHeight: 1.25, letterSpacing: 1, margin: "0 0 18px" }}>
                預約一次<span style={{ color: "#c9a96a", fontWeight: 600 }}>體態診斷</span>
                <br />開始你的身體建築之旅
              </h1>
              <p style={{ color: "#9a9384", fontWeight: 300, maxWidth: "42ch", fontSize: 15 }}>
                這裡不賣按表抄課，只解決身體裡一直沒被處理的起源痛點。留下你的狀況，我們為你翻譯身體的語言，並設計專屬規劃。
              </p>
            </header>

            <form onSubmit={handleSubmit}>
              {/* Section 01 */}
              <BookingSection eyebrow="Reservation" index="01" title="預約時間">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="booking-row">
                  <Field label="希望日期" required>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={(e) => setField("date", e.target.value)}
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </Field>
                  <Field label="希望時段" required>
                    <select
                      name="time"
                      required
                      value={form.time}
                      onChange={(e) => setField("time", e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    >
                      <option value="">請選擇</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t} style={{ background: "#15130e" }}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="booking-row">
                  <Field label="姓名" required>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="你的稱呼"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </Field>
                  <Field label="聯絡電話" required>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="09XX-XXX-XXX"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </Field>
                </div>
              </BookingSection>

              {/* Section 02 */}
              <BookingSection eyebrow="About You" index="02" title="自我介紹">
                <Field label="身體狀況 · 痛點 · 訓練目標">
                  <textarea
                    name="intro"
                    placeholder="例如：久坐肩頸鎖死、腰椎沈重、左膝曾受傷、想改善體態與排列、過去的運動經驗與可訓練時間…"
                    value={form.intro}
                    onChange={(e) => setField("intro", e.target.value)}
                    style={{ ...inputStyle, minHeight: 120, resize: "vertical", lineHeight: 1.7 }}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </Field>
              </BookingSection>

              {/* Section 03 */}
              <BookingSection eyebrow="Program Investment" index="03" title="課表編排 · 選擇方案">
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {PLANS.map((plan) => (
                    <label
                      key={plan.value}
                      style={{
                        position: "relative",
                        cursor: "pointer",
                        display: "block",
                        border: `1px solid ${form.plan === plan.value ? "#c9a96a" : "#3a362c"}`,
                        borderRadius: 4,
                        padding: "22px 24px",
                        background: form.plan === plan.value
                          ? "linear-gradient(180deg, rgba(201,169,106,.1), #1a1812)"
                          : "#1a1812",
                        transition: "all .3s",
                      }}
                    >
                      {plan.featured && (
                        <span style={{
                          position: "absolute", top: -1, right: 18, transform: "translateY(-50%)",
                          background: "#c9a96a", color: "#16140f",
                          fontFamily: "var(--font-cormorant), serif", fontStyle: "italic",
                          fontSize: 13, letterSpacing: 2, padding: "3px 14px", borderRadius: 2,
                        }}>
                          推薦方案
                        </span>
                      )}
                      <input
                        type="radio"
                        name="plan"
                        value={plan.value}
                        required
                        checked={form.plan === plan.value}
                        onChange={() => setField("plan", plan.value)}
                        style={{ position: "absolute", opacity: 0, inset: 0, cursor: "pointer" }}
                      />
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
                        <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 46, lineHeight: .9, color: form.plan === plan.value ? "#c9a96a" : "#ece8df" }}>
                          {plan.sessions}<small style={{ fontFamily: "'Noto Serif TC', serif", fontSize: 15, color: "#9a9384", marginLeft: 6 }}>堂</small>
                        </div>
                        <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 14, letterSpacing: 2, color: "#8a7a52", textTransform: "uppercase" }}>
                          {plan.tier}
                        </div>
                      </div>
                      <div style={{ fontFamily: "'Noto Serif TC', serif", fontSize: 18, fontWeight: 500, letterSpacing: 1, marginTop: 6 }}>
                        {plan.name}
                      </div>
                      <div style={{ fontSize: 13, color: "#9a9384", marginTop: 8, fontWeight: 300 }}>
                        {plan.desc}
                      </div>
                    </label>
                  ))}
                </div>
              </BookingSection>

              {error && (
                <p style={{ color: "#e57373", fontSize: 14, textAlign: "center", marginBottom: 16 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  border: "1px solid #c9a96a",
                  cursor: loading ? "not-allowed" : "pointer",
                  background: loading ? "rgba(201,169,106,.1)" : "transparent",
                  color: "#c9a96a",
                  fontFamily: "'Noto Serif TC', serif",
                  fontWeight: 500,
                  fontSize: 17,
                  letterSpacing: 4,
                  padding: "20px",
                  borderRadius: 3,
                  marginTop: 8,
                  transition: ".35s",
                  opacity: loading ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = "#c9a96a"
                    e.currentTarget.style.color = "#16140f"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = "transparent"
                    e.currentTarget.style.color = "#c9a96a"
                  }
                }}
              >
                {loading ? "送出中…" : "送 出 預 約"}
              </button>
              <p style={{ textAlign: "center", color: "#9a9384", fontSize: 12, letterSpacing: .5, marginTop: 18, fontWeight: 300 }}>
                送出後將以電話與你確認 · 個人資料僅用於課程安排
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:none } }
        @media (max-width: 520px) { .booking-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}

function BookingSection({ eyebrow, index, title, children }: {
  eyebrow: string
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section style={{
      background: "linear-gradient(180deg, #211f18, #1d1b15)",
      border: "1px solid #3a362c",
      borderRadius: 4,
      padding: "40px 34px",
      marginBottom: 28,
    }}>
      <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 16, letterSpacing: 3, color: "#c9a96a", textTransform: "uppercase", marginBottom: 6 }}>
        {eyebrow}
      </p>
      <div style={{ fontFamily: "'Noto Serif TC', serif", fontWeight: 500, fontSize: 24, letterSpacing: 1, marginBottom: 28, display: "flex", alignItems: "baseline", gap: 14 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", color: "#8a7a52", fontSize: 20 }}>{index}</span>
        {title}
      </div>
      {children}
    </section>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <label style={{ display: "block", fontSize: 13, letterSpacing: 1, color: "#9a9384", marginBottom: 9 }}>
        {label} {required && <span style={{ color: "#c9a96a" }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#15130e",
  border: "none",
  borderBottom: "1px solid #3a362c",
  color: "#ece8df",
  padding: "12px 4px",
  fontFamily: "inherit",
  fontSize: 15,
  fontWeight: 300,
  transition: "border-color .3s",
  outline: "none",
}

function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderBottomColor = "#c9a96a"
}

function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderBottomColor = "#3a362c"
}
