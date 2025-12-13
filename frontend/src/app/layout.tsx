import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'BEASTIQUE | Visual Evidence from the Sixth Mass Extinction',
    template: '%s | BEASTIQUE',
  },
  description: 'A visual documentation of endangered species transformed into industrial and precious materials—evidence of what humanity stands to lose.',
  keywords: ['endangered species', 'conservation', 'digital art', 'extinction', 'wildlife'],
  authors: [{ name: 'Dennis \'dnoice\' Smaltz' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beastique.art',
    siteName: 'BEASTIQUE',
    title: 'BEASTIQUE | Visual Evidence from the Sixth Mass Extinction',
    description: 'A visual documentation of endangered species transformed into industrial and precious materials.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEASTIQUE',
    description: 'Visual Evidence from the Sixth Mass Extinction',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-beastique-black">
        {children}
      </body>
    </html>
  )
}
