"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckIcon, AlertCircleIcon } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

// El Paso and surrounding areas
const VALID_CITIES = [
  "El Paso",
  "Clint",
  "Socorro",
  "Horizon City",
  "San Elizario",
  "Fabens",
  "Canutillo",
  "Anthony",
  "Vinton",
]

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery")
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    specialInstructions: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  // Calculate tax and total
  const tax = subtotal * 0.0825 // 8.25% tax rate for El Paso
  const deliveryFee = orderType === "delivery" ? 5.99 : 0
  const total = subtotal + tax + deliveryFee

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Basic validation
    if (!formState.firstName) newErrors.firstName = "First name is required"
    if (!formState.lastName) newErrors.lastName = "Last name is required"
    if (!formState.email) newErrors.email = "Email is required"
    if (!formState.phone) newErrors.phone = "Phone number is required"

    // Delivery-specific validation
    if (orderType === "delivery") {
      if (!formState.address) newErrors.address = "Address is required"
      if (!formState.city) newErrors.city = "City is required"
      if (!formState.zipCode) newErrors.zipCode = "ZIP code is required"

      // Check if city is in El Paso area
      if (formState.city && !VALID_CITIES.includes(formState.city)) {
        newErrors.city = "We only deliver to El Paso and surrounding areas"
      }
    }

    // Payment validation
    if (!formState.cardNumber) newErrors.cardNumber = "Card number is required"
    if (!formState.cardName) newErrors.cardName = "Name on card is required"
    if (!formState.expiry) newErrors.expiry = "Expiration date is required"
    if (!formState.cvv) newErrors.cvv = "CVV is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Order complete
    setIsSubmitting(false)
    setIsOrderComplete(true)
    clearCart()
  }

  if (isOrderComplete) {
    return (
      <div className="flex min-h-screen flex-col bg-black">
        <Navbar />

        <section className="py-16 md:py-24 flex-grow flex items-center justify-center">
          <div className="container px-4 md:px-6 max-w-3xl">
            <div className="bg-black metallic-black rounded-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckIcon className="h-10 w-10 text-green-500" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-purple-800 mb-4">Order Confirmed!</h1>
              <p className="text-gray-300 mb-6">
                Thank you for your order. We've received your order and will begin processing it right away.
              </p>
              <div className="bg-black/30 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold text-rosegold-500 mb-2">Order Details</h3>
                <p className="text-gray-300">
                  {orderType === "delivery" ? (
                    <>Your order will be delivered to your address.</>
                  ) : (
                    <>Your order will be available for pickup at our San Elizario location.</>
                  )}
                </p>
                <p className="text-gray-300 mt-2">
                  We'll send a confirmation email to {formState.email} with all the details.
                </p>
              </div>
              <Link href="/">
                <Button className="btn-primary px-8 py-6 font-medium">Return to Home</Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      {/* Checkout Header */}
      <section className="py-12 md:py-16 metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Checkout</h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">Complete your order</p>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Order Type */}
                <div className="bg-black metallic-black rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Order Type</h3>
                  <RadioGroup
                    value={orderType}
                    onValueChange={(value) => setOrderType(value as "delivery" | "pickup")}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="text-white">
                        Delivery
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="text-white">
                        Pickup (San Elizario)
                      </Label>
                    </div>
                  </RadioGroup>

                  {orderType === "delivery" && (
                    <div className="mt-4 p-4 bg-black/30 rounded-lg border border-gunmetal-800">
                      <div className="flex items-start gap-2">
                        <AlertCircleIcon className="h-5 w-5 text-rosegold-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-300">
                          We currently deliver only to El Paso and surrounding areas (Clint, Socorro, Horizon City, San
                          Elizario, etc.)
                        </p>
                      </div>
                    </div>
                  )}

                  {orderType === "pickup" && (
                    <div className="mt-4 p-4 bg-black/30 rounded-lg border border-gunmetal-800">
                      <h4 className="font-medium text-rosegold-500 mb-2">Pickup Location:</h4>
                      <p className="text-gray-300">
                        Ja3akes Bakery
                        <br />
                        123 Main Street
                        <br />
                        San Elizario, TX 79849
                      </p>
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="bg-black metallic-black rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white mb-1 block">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        className="bg-black border-gunmetal-800 text-white"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white mb-1 block">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        className="bg-black border-gunmetal-800 text-white"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-1 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-black border-gunmetal-800 text-white"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white mb-1 block">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="bg-black border-gunmetal-800 text-white"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Delivery Information (if delivery selected) */}
                {orderType === "delivery" && (
                  <div className="bg-black metallic-black rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Delivery Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address" className="text-white mb-1 block">
                          Address
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formState.address}
                          onChange={handleChange}
                          className="bg-black border-gunmetal-800 text-white"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-white mb-1 block">
                            City
                          </Label>
                          <Select
                            value={formState.city}
                            onValueChange={(value) => setFormState((prev) => ({ ...prev, city: value }))}
                          >
                            <SelectTrigger className="bg-black border-gunmetal-800 text-white">
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent className="bg-black border-gunmetal-800 text-white">
                              {VALID_CITIES.map((city) => (
                                <SelectItem key={city} value={city}>
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                        </div>
                        <div>
                          <Label htmlFor="zipCode" className="text-white mb-1 block">
                            ZIP Code
                          </Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formState.zipCode}
                            onChange={handleChange}
                            className="bg-black border-gunmetal-800 text-white"
                          />
                          {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Information */}
                <div className="bg-black metallic-black rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Payment Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white mb-1 block">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formState.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className="bg-black border-gunmetal-800 text-white"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div>
                      <Label htmlFor="cardName" className="text-white mb-1 block">
                        Name on Card
                      </Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formState.cardName}
                        onChange={handleChange}
                        className="bg-black border-gunmetal-800 text-white"
                      />
                      {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white mb-1 block">
                          Expiration Date
                        </Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          value={formState.expiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="bg-black border-gunmetal-800 text-white"
                        />
                        {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-white mb-1 block">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formState.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          className="bg-black border-gunmetal-800 text-white"
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Instructions */}
                <div className="bg-black metallic-black rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Special Instructions</h3>
                  <Textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formState.specialInstructions}
                    onChange={handleChange}
                    placeholder="Any special requests or delivery instructions?"
                    className="bg-black border-gunmetal-800 text-white"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="btn-primary w-full py-6" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-black metallic-black rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Order Summary</h3>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{item.quantity} x</span>
                      <span className="text-white">{item.name}</span>
                    </div>
                    <span className="text-white">
                      {formatCurrency(Number.parseFloat(item.price.replace("$", "")) * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 border-t border-gunmetal-800 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="text-white">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tax (8.25%)</span>
                  <span className="text-white">{formatCurrency(tax)}</span>
                </div>
                {orderType === "delivery" && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">Delivery Fee</span>
                    <span className="text-white">{formatCurrency(deliveryFee)}</span>
                  </div>
                )}
                <div className="border-t border-gunmetal-800 pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-300">Total</span>
                    <span className="text-rosegold-500">{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 text-sm text-gray-300">
                <p className="mb-2">
                  <strong className="text-rosegold-500">Delivery:</strong> Available only in El Paso and surrounding
                  areas.
                </p>
                <p>
                  <strong className="text-rosegold-500">Pickup:</strong> Available at our San Elizario location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

