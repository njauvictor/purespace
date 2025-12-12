"use client"

import Link from "next/link"
import { siteData } from "@/lib/data"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl">{siteData.company.logo}</span>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                {siteData.company.name}
              </div>
              <div className="text-xs text-muted-foreground">{siteData.company.tagline}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteData.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Contact Us
            </Link>

            <button
              className="md:hidden p-2 text-primary hover:bg-card rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {siteData.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-card rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
