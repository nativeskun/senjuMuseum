import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "先住民の歴史博物館",
    template: "%s | 先住民の歴史博物館",
  },
  description: "先住民のイラストポートフォリオ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');
        </style>
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--topic-color, #fff)" }}>
        <header
          className="sticky top-0 z-10 border-b backdrop-blur-sm"
          style={{
            backgroundColor: "var(--topic-color, rgba(255,255,255,0.8))",
            borderColor: "var(--topic-accent, #e4e4e7)",
          }}
        >
          <div className="flex h-14 items-center justify-between px-4 max-w-6xl mx-auto w-full">
            <Link
              href="/"
              className="text-base font-semibold"
              style={{ color: "var(--topic-accent, #09090b)" }}
            >
              先住民の歴史博物館
            </Link>
          </div>
        </header>
        {children}
        <footer
          className="border-t py-6 text-center text-sm"
          style={{
            borderColor: "var(--topic-accent, #e4e4e7)",
            color: "var(--topic-accent, #71717a)",
          }}
        >
          &copy; {new Date().getFullYear()} 先住民
        </footer>
      </body>
    </html>
  )
}
