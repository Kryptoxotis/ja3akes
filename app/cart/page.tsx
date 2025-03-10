"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MinusIcon, PlusIcon, TrashIcon, ShoppingBagIcon } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, itemCount, subtotal } = useCart()

  // Calculate tax and total
  const tax = subtotal * 0.0825 // 8.25% tax rate for El Paso
  const total = subtotal + tax

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      {/* Cart Header */}
      <section className="py-12 md:py-16 metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Your Cart</h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">Review your items before checkout</p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingBagIcon className="h-16 w-16 text-purple-400 mb-4" />
              <h2 className="text-2xl font-bold text-purple-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-300 mb-6">Looks like you haven't added any cookies to your cart yet.</p>
              <Link href="/menu">
                <Button className="btn-primary px-8 py-6 font-medium">Browse Our Menu</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="bg-black metallic-black rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                    <div className="relative h-24 w-24 flex-shrink-0 rounded-md overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-bold text-rosegold-500">{item.name}</h3>
                        <span className="text-lg font-bold text-purple-400">{item.price}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-rosegold-400"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-black metallic-black rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subtotal ({itemCount} items)</span>
                    <span className="text-white">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tax (8.25%)</span>
                    <span className="text-white">{formatCurrency(tax)}</span>
                  </div>
                  <div className="border-t border-gunmetal-800 pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span className="text-gray-300">Total</span>
                      <span className="text-rosegold-500">{formatCurrency(total)}</span>
                    </div>
                  </div>
                </div>
                <Link href="/checkout">
                  <Button className="btn-primary w-full py-6">Proceed to Checkout</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

