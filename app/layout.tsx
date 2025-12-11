import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Binance Square Top 10 Posts Generator',
  description: 'Professional Binance Square post generator with 10 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
