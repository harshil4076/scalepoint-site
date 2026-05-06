import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scalepoint — Data & AI Consulting',
  description: 'We build the internal software, data products, and AI systems your team actually uses.',
  icons: { icon: '/favicon.svg' },
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
