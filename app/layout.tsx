import type { Metadata } from 'next'
import { Noto_Sans_TC, Noto_Serif_TC, Cormorant_Garamond } from 'next/font/google'
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: '陳俊傑 Body Architect | 體適能講師・皮拉提斯教練',
  description: '陳俊傑，體適能講師・皮拉提斯教練・運動健康顧問。結合美式整復、皮拉提斯與重量訓練，提供體態調整、疼痛改善、肌力提升的專業訓練規劃。',
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
    <html lang="zh-TW" className={`${notoSans.variable} ${notoSerif.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
