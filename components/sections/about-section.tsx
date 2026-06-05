"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram, Award, CheckCircle2 } from "lucide-react"

const specialties = [
  "皮拉提斯體態雕塑",
  "肌力與體能訓練",
  "功能性動作矯正",
  "運動傷害預防與恢復",
  "整復推拿與筋膜放鬆",
  "銀髮族健康促進",
  "健康管理與營養規劃",
  "房地產資產配置諮詢",
]

const certifications = [
  "AFAA-PFT 國際私人教練",
  "Power Pilates Mat 墊上皮拉提斯",
  "Power Pilates Reformer 器械皮拉提斯",
  "ISCA 運動營養專家",
  "FTS 功能性動作矯正專家",
  "中華民國美式整復證照",
  "台灣健康協會整復推拿認證",
  "中華民國拳擊教練 C 級指導員",
  "中華民國健美協會 C 級教練",
]

const galleryPhotos = [
  { src: "/media/photo-1.jpg", alt: "陳俊傑教練訓練實況" },
  { src: "/media/photo-2.jpg", alt: "皮拉提斯教學" },
  { src: "/media/photo-3.jpg", alt: "體態矯正指導" },
  { src: "/media/photo-4.jpg", alt: "重訓教學" },
  { src: "/media/photo-5.jpg", alt: "專業訓練指導" },
]

const trainingVideos = [
  { src: "/media/video-1.mp4", label: "訓練實況 01" },
  { src: "/media/video-2.mp4", label: "訓練實況 02" },
  { src: "/media/video-3.mp4", label: "訓練實況 03" },
  { src: "/media/video-4.mp4", label: "訓練實況 04" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* ── Profile ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-lg transform translate-x-4 translate-y-4" />
            <Image
              src="/media/photo-1.jpg"
              alt="陳俊傑教練專業形象照"
              fill
              className="object-cover rounded-lg relative z-10"
            />
          </motion.div>

          {/* Bio */}
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
                關於我
              </h2>
              <p className="font-serif text-2xl text-foreground/80 tracking-tight">
                陳俊傑
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["體適能講師", "皮拉提斯教練", "運動健康顧問"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary bg-primary/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                跆拳道運動員出身，畢業於運動健康科學系（運動醫學），擁有私人教練、皮拉提斯、運動營養、功能性動作矯正及整復推拿等多項專業認證。
              </p>
              <p>
                多年來專注於體態調整、疼痛改善、肌力與體能提升，協助學員建立健康、自信且充滿活力的生活方式。
              </p>
              <p>
                現任健身房教練主管，同時投入房地產顧問領域，致力於提供客戶健康管理與資產規劃的雙重價值，打造更穩健的人生藍圖。
              </p>
            </div>

            {/* Tagline */}
            <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70 font-serif text-base">
              「以專業打造健康，以規劃創造價值。」
            </blockquote>

            {/* Social */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-3">追蹤我的動態</p>
              <a
                href="https://www.instagram.com/leochenhuman?igsh=ODloNTFkZzI3ZDNl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-foreground">Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Specialties ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Specialties</p>
          <h3 className="font-serif text-xl text-foreground mb-6">專業領域</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
            {specialties.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Certifications: list left + photo right ── */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="md:order-2"
          >
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-card border border-border">
              <Image
                src={galleryPhotos[4].src}
                alt={galleryPhotos[4].alt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="md:order-1"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Certifications</p>
            <h3 className="font-serif text-xl text-foreground mb-5">專業證照</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Training Gallery ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Gallery</p>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
              訓練現場
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[galleryPhotos[1], galleryPhotos[2]].map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="relative aspect-video rounded-lg overflow-hidden bg-card border border-border"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Video Gallery ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Training Footage</p>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
              訓練實況
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {trainingVideos.map((video, i) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.65 + i * 0.12 }}
                className="rounded-lg overflow-hidden bg-card border border-border shadow-md"
              >
                <div className="aspect-video">
                  <video
                    src={video.src}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    您的瀏覽器不支援影片播放
                  </video>
                </div>
                <p className="text-xs text-muted-foreground text-center py-2 tracking-widest uppercase">
                  {video.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
