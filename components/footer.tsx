"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gunmetal-900 metallic-black">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-800">Ja3akes</h3>
            <p className="text-gray-300">Handcrafted cookies and treats made with love and the finest ingredients.</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
              >
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
              >
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-purple-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-300 transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-purple-800">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Bakery Street</p>
              <p>Cookieville, CA 90210</p>
              <p>
                <a
                  href="mailto:contact@ja3akes.com"
                  className="transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
                >
                  contact@ja3akes.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="transition-all duration-300 hover:text-rosegold-400 hover:shadow-glow"
                >
                  (555) 123-4567
                </a>
              </p>
            </address>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-purple-800">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to get special offers, free giveaways, and new product announcements.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-black border-gunmetal-800 text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="btn-primary rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gunmetal-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ja3akes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

