import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Revolte',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sauce+Sans:wght@300;400;500;600;700&family=Hedvig+Letters+Serif:opsz@12..24&family=Neue+Regrade:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
