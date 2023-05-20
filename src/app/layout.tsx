import './globals.css'
import { Inter } from 'next/font/google'
import Display from './components/home/display'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OSP Project',
  description: 'SQL Visual Excel Database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
