import type React from "react"
import type { Metadata } from "next"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ja3akes - Delicious Homemade Cookies & Treats",
  description: "Handcrafted cookies and treats made with love and the finest ingredients.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'