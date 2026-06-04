# 下次對話入口 — v0-body-architect-website
> 更新：2026-06-04

## 📌 下次對話開場白
```
繼續 v0-body-architect-website 開發。
請先讀 CLAUDE.md 和 docs/NEXT_SESSION.md。
```

---

## ✅ 本次已完成（2026-06-04）

### 1. 預約表單 + Resend 收信
- [x] 安裝 `resend` 套件
- [x] 建立 `.env.local`（`RESEND_API_KEY`，已在 .gitignore）
- [x] `app/api/booking/route.ts` — POST endpoint，用 Resend 發信到 `james112233149@gmail.com`
- [x] `app/booking/page.tsx` — 完整預約表單頁（dark gold 設計，匹配 training-booking.html）
- [x] 所有 Google Forms 連結全部替換為 `/booking`（nav、hero、footer、program section）

### 2. About Me 完整更新
- [x] 姓名改為「陳俊傑」
- [x] 職稱：體適能講師・皮拉提斯教練・運動健康顧問
- [x] 完整自我介紹段落
- [x] 專業領域 8 項（CheckCircle 圖示）
- [x] 專業證照 9 項（Award 圖示）
- [x] 個人品牌標語（引言樣式）

### 3. 新媒體整合
- [x] 5 張照片 → `public/media/photo-1.jpg` ~ `photo-5.jpg`
- [x] 4 支影片 → `public/media/video-1.mp4` ~ `video-4.mp4`
- [x] Hero 背景改為本地 `photo-5.jpg`
- [x] About section：主形象照 `photo-1.jpg` + 5 張照片 gallery + 4 影片 grid

### 4. 字型優化
- [x] Cormorant Garamond 改用 `next/font/google` 載入（CSS var: `--font-cormorant`）
- [x] 移除 booking page 的 `@import` Google Fonts

### 5. Metadata 更新
- [x] 網站標題改為「陳俊傑 Body Architect | 體適能講師・皮拉提斯教練」
- [x] 描述更新，加入陳俊傑姓名與完整專業描述

---

## 🔴 下次優先

### 1. Vercel 環境變數（⚠️ 部署前必做）
- [ ] 在 Vercel Dashboard 或 CLI 添加 `RESEND_API_KEY`：
  ```
  vercel env add RESEND_API_KEY
  ```
  值：見 `.env.local`

### 2. Resend 發件人設定
- [ ] 目前 from 地址為 `onboarding@resend.dev`（測試用）
- [ ] 若要改為自訂 domain，需在 Resend dashboard 驗證 domain，再更新 `app/api/booking/route.ts` 的 `from` 欄位

### 3. 影片/照片排版確認
- [ ] 在真實瀏覽器確認 5 張照片 gallery 比例是否合適
- [ ] 確認 4 支影片 2-col grid 在手機上的體驗

---

## 自我驗證結果
- `npm run build` ✅ 通過，無 TypeScript/型別錯誤

---

*維護者：Eugene Lai*
