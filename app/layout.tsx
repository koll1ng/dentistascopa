import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Dentistas Copacabana - Clínica Odontológica - Rio de Janeiro - RJ",
  description:
    "Dentistas Copacabana no Rio de Janeiro. Clínica odontológica especializada em tratamentos dentários de qualidade. Rua Barata Ribeiro, 370 - Copacabana, Rio de Janeiro - RJ.",
  icons: {
    icon: "/favicon.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
