import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/custom-button"
import { ChevronRightIcon } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturedProducts from "@/components/featured-products"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 metallic-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                  Delicious Homemade Cookies & Treats
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Handcrafted with love and the finest ingredients. Every bite brings joy and sweetness to your day.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/menu">
                  <CustomButton variant="primary" className="px-8 py-6 font-medium text-lg hover-shine">
                    Order Now
                  </CustomButton>
                </Link>
                <Link href="/menu">
                  <CustomButton variant="outline" className="px-8 py-6 font-medium text-lg">
                    View Menu
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2017.27.18%20-%20A%20beautifully%20arranged%20assortment%20of%20freshly%20baked%20cookies%20on%20a%20wooden%20tray.%20The%20display%20includes___-%20Classic%20chocolate%20chip%20cookies%20with%20golden-brown-vUgbQWW9H6nJYCr0bOB7JDRNLeERXr.webp"
                  alt="Delicious assortment of freshly baked cookies"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat-x opacity-10"></div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                Our Sweet Creations
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our delicious selection of freshly baked cookies and treats
              </p>
            </div>
          </div>
          <FeaturedProducts />
          <div className="flex justify-center mt-12">
            <Link href="/menu">
              <Button className="btn-outline-purple px-8 py-6 font-medium">
                View All Treats <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 bg-black metallic-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[400px] rounded-full overflow-hidden border-8 border-purple-600 shadow-xl">
                <Image src="/placeholder.svg?height=400&width=400" alt="Baker portrait" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                  The Story Behind Ja3akes
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed">
                  What started as a passion for baking has turned into a journey of sharing joy through delicious
                  treats. Every cookie is made with love and the finest ingredients.
                </p>
                <p className="text-gray-300 md:text-xl/relaxed">
                  Our mission is simple: create mouthwatering cookies that bring smiles to faces and warmth to hearts.
                </p>
              </div>
              <div>
                <Link href="/about">
                  <Button className="btn-primary px-8 py-6 font-medium">Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                What Our Customers Say
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it - hear from our happy customers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <TestimonialCard
              name="Sarah Johnson"
              quote="These cookies are absolutely divine! The chocolate chip ones remind me of my grandmother's recipe but even better!"
              rating={5}
            />
            <TestimonialCard
              name="Michael Chen"
              quote="I ordered a custom birthday cookie box and it was the highlight of the party. Everyone loved them!"
              rating={5}
            />
            <TestimonialCard
              name="Emma Williams"
              quote="The attention to detail and quality ingredients really shine through. These are the best cookies in town!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-black metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                Ready to Treat Yourself?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Order now and experience the magic of Ja3akes
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/menu">
                <Button className="btn-primary px-8 py-6 font-medium text-lg">Order Now</Button>
              </Link>
              <Link href="/contact">
                <Button className="btn-outline-purple px-8 py-6 font-medium text-lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

