import "./globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "./components/site-header"
import { SiteFooter } from "./components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my work and skills",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

