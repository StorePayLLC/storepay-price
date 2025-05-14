import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from './themeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SPC Crypto Bidding Platform',
  description: 'Bid on products using SPC cryptocurrency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a]`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}