import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shane Butler - Architectural Photography - NC, VA, WV, MD',
  description: 'Award wining photographer specializing in architectural and interiors photography. Working in North Carolina, Virginia, West Virginia, and Maryland',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
