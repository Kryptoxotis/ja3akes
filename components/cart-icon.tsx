"use client"

import { useCart } from "@/context/cart-context"
import { ShoppingBagIcon } from "lucide-react"
import Link from "next/link"

export function CartIcon() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart" className="relative">
      <ShoppingBagIcon className="h-6 w-6 text-purple-400 hover:text-rosegold-400 transition-colors duration-300" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-rosegold-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  )
}

