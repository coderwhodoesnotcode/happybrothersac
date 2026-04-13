import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Happy Brother - AC & Home Services Dubai',
    template: '%s | Happy Brother'
  },
  description: 'Professional AC repair, plumbing, electrical services & home maintenance in Dubai. Available 24/7 across all areas.',
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}