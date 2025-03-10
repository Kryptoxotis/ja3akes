"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      {/* Contact Header */}
      <section className="py-12 md:py-16 metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Contact Us</h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              We'd love to hear from you! Get in touch with any questions or to place an order.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Get In Touch</h2>

              <div className="flex items-start space-x-4">
                <MapPinIcon className="h-6 w-6 text-rosegold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-1">Visit Us</h3>
                  <p className="text-gray-300">123 Bakery Street</p>
                  <p className="text-gray-300">Cookieville, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-6 w-6 text-rosegold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-1">Call Us</h3>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MailIcon className="h-6 w-6 text-rosegold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-1">Email Us</h3>
                  <p className="text-gray-300">contact@ja3akes.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ClockIcon className="h-6 w-6 text-rosegold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-1">Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-300">Saturday: 9am - 5pm</p>
                  <p className="text-gray-300">Sunday: 10am - 4pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black metallic-black p-8 rounded-lg border border-gunmetal-800">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-rosegold-500 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-black border-gunmetal-800 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-black border-gunmetal-800 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-purple-400 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-black border-gunmetal-800 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-black border-gunmetal-800 text-white"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full py-6" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

