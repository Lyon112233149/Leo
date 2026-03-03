"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "關於", href: "#about" },
  { label: "服務", href: "#services" },
  { label: "方案", href: "#programs" },
  { label: "常見問題", href: "#faq" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-tight text-foreground">
            <span className="font-semibold">Body</span> Architect
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              aria-label="預約體態診斷"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfk8hHXqVY3UpPSwHL2eKHTRlsASJZML6F00ZpWO2AiNlOCCg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                預約諮詢
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 w-full max-w-xs bg-primary text-primary-foreground"
                aria-label="預約體態診斷"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfk8hHXqVY3UpPSwHL2eKHTRlsASJZML6F00ZpWO2AiNlOCCg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  預約諮詢
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
