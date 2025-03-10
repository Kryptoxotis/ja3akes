"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { CartIcon } from "@/components/cart-icon"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gunmetal-800 bg-black/80 backdrop-blur-md metallic-black">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-10 w-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-09_184639_resized-removebg-preview-1tvsKUU78Cm6OXn7NBlsHSkHePOqY9.png"
              alt="Ja3akes Cookie Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative h-6 w-24">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-09_190129-removebg-preview-etlagWweSbpz89Ny2XionVisjwJ98p.png"
              alt="Ja3akes"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow ${
                isActive(link.href) ? "text-rosegold-400" : "text-purple-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4 items-center">
          <CartIcon />
          <Link href="/menu">
            <Button className="btn-primary rounded-full">Order Now</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <div className="flex items-center md:hidden">
            <CartIcon />
            <SheetTrigger asChild className="ml-4">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <MenuIcon className="h-6 w-6 text-rosegold-400" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="bg-black metallic-black border-gunmetal-800">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative h-8 w-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-09_184639_resized-removebg-preview-1tvsKUU78Cm6OXn7NBlsHSkHePOqY9.png"
                      alt="Ja3akes Cookie Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-5 w-20">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-03-09_190129-removebg-preview-etlagWweSbpz89Ny2XionVisjwJ98p.png"
                      alt="Ja3akes"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6 text-rosegold-400" />
                </Button>
              </div>
              <nav className="flex flex-col gap-6 mb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-medium transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow ${
                      isActive(link.href) ? "text-rosegold-400" : "text-purple-400"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Link href="/menu" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-primary rounded-full">Order Now</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

