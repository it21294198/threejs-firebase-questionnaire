import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fill Me',
  description: 'Questionnaire',
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
