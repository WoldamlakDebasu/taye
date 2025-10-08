import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Taye Worku — MC, Moderator, Facilitator & Humanitarian",
  description:
    "Award-winning MC, Moderator, Facilitator, and Event Manager with 20+ years of experience working with UN, Coca-Cola, Total Energies, Huawei, and leading organizations worldwide.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
      style={{
        ["--font-geist-sans" as string]: GeistSans.style.fontFamily,
        ["--font-geist-mono" as string]: GeistMono.style.fontFamily,
      }}
    >
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
