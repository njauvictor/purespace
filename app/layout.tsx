import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteData } from "@/lib/data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${siteData.company.name} | ${siteData.company.tagline}`,
  description: siteData.company.description,
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
    <div className="max-w-7xl px-4 md:px-8 xl:px-12 mx-auto">    {children}</div>
        <Analytics />
      </body>
    </html>
  )
}
