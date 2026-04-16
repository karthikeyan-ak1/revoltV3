import type { Metadata } from 'next'
import Navbar from '@/shared/components/Navbar'
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
