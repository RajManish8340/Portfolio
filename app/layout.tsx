import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import { MobileDock } from "@/components/mobile-dock"

export const metadata: Metadata = {
  title: "RajMS",
  description: "Portfolio",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          <main className="min-h-[calc(100dvh-160px)] pb-20 md:pb-0">{children}</main>
          <SiteFooter />
          <MobileDock />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
