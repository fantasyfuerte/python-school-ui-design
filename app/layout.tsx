import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PythonPro Challenges",
  description: "Solve Python coding challenges and improve your skills",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="min-h-screen bg-gradient-to-br from-[#2b2726] to-[#0a405d]">{children}</div>
      </body>
    </html>
  )
}



import './globals.css'