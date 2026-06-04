"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { EmpathySection } from "@/components/sections/empathy-section"
import { TripleSystemSection } from "@/components/sections/triple-system-section"
import { AboutSection } from "@/components/sections/about-section"
import { VisualLogicSection } from "@/components/sections/visual-logic-section"
import { ProgramSection } from "@/components/sections/program-section"
import { PhilosophySection } from "@/components/sections/philosophy-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FooterSection } from "@/components/sections/footer-section"
import { BookingSection } from "@/components/sections/booking-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <EmpathySection />
      <TripleSystemSection />
      <AboutSection />
      <VisualLogicSection />
      <ProgramSection />
      <BookingSection />
      <PhilosophySection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
