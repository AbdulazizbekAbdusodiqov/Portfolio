import type React from "react"
import "@/app/globals.css"

import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abdulazizbek Abdusodiqov | FullStack Developer | Abdulaziz-dev",
  description:
    "Abdulazizbek Abdusodiqov (Abdulaziz-dev, abu-dev) - FullStack Developer portfolio. JavaScript, React, Next.js, Node.js, NestJS va boshqa texnologiyalar bilan ishlaydigan dasturchi.",
  keywords: [
    "Abdulazizbek Abdusodiqov",
    "Abdusodiqov",
    "Abdulaziz-dev",
    "abu-dev",
    "abu dev",
    "abdulazizdev",
    "abdulaziz dev",
    "abdulaziz",
    "dev",
    "FullStack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Abdulazizbek Abdusodiqov", url: "https://github.com/AbdulazizbekAbdusodiqov" }],
  creator: "Abdulazizbek Abdusodiqov",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://abdulaziz-dev.vercel.app",
    title: "Abdulazizbek Abdusodiqov | FullStack Developer | Abdulaziz-dev",
    description:
      "Abdulazizbek Abdusodiqov (Abdulaziz-dev, abu-dev) - FullStack Developer portfolio. JavaScript, React, Next.js, Node.js, NestJS va boshqa texnologiyalar bilan ishlaydigan dasturchi.",
    siteName: "Abdulaziz-dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulazizbek Abdusodiqov | FullStack Developer | Abdulaziz-dev",
    description:
      "Abdulazizbek Abdusodiqov (Abdulaziz-dev, abu-dev) - FullStack Developer portfolio. JavaScript, React, Next.js, Node.js, NestJS va boshqa texnologiyalar bilan ishlaydigan dasturchi.",
    creator: "@dev_abu",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://abdulaziz-dev.vercel.app" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
