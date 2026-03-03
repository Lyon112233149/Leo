import type { Metadata } from 'next'
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_TC({ 
  subsets: ["latin"],
  variable: '--font-noto-sans',
  weight: ['300', '400', '500', '700'],
});

const notoSerif = Noto_Serif_TC({ 
  subsets: ["latin"],
  variable: '--font-noto-serif',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: '身體建築師 Body Architect | Shan Wealth',
  description: '結合美式整復、皮拉提斯與重量訓練的三維度整合系統。我們專注於探討身體架構的底層邏輯，提供專業的體態診斷與訓練規劃。',
  generator: 'v0.app',
  keywords: ['重訓', '皮拉提斯', '整復', '體態矯正', '私人教練', 'Pilates', '健身'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
