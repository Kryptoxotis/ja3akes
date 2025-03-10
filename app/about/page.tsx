import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      {/* About Header */}
      <section className="py-12 md:py-16 metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Our Story</h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              The journey behind Ja3akes and our passion for baking
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[400px] rounded-full overflow-hidden border-8 border-purple-600 shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-800">
                  From Kitchen to Community
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed">
                  What started as a passion for baking in a small kitchen has grown into a beloved community bakery. Our
                  founder began by sharing homemade cookies with friends and family, and word quickly spread about these
                  delicious treats.
                </p>
                <p className="text-gray-300 md:text-xl/relaxed">
                  After years of perfecting recipes and techniques, Ja3akes was born with a simple mission: to create
                  mouthwatering cookies that bring joy to every bite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-black metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-800">Our Values</h2>
            <p className="max-w-[700px] text-gray-300 md:text-xl">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border-2 border-purple-600">
              <h3 className="text-xl font-bold mb-4 text-rosegold-500">Quality Ingredients</h3>
              <p className="text-gray-300">
                We use only the finest ingredients in our cookies, from premium chocolate to locally sourced butter and
                eggs. No preservatives or artificial flavors - just pure, delicious goodness.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border-2 border-purple-600">
              <h3 className="text-xl font-bold mb-4 text-rosegold-500">Handcrafted with Love</h3>
              <p className="text-gray-300">
                Every cookie is made by hand with attention to detail and care. We believe that the love and passion we
                put into our baking comes through in every bite.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border-2 border-purple-600">
              <h3 className="text-xl font-bold mb-4 text-rosegold-500">Community First</h3>
              <p className="text-gray-300">
                We're proud to be part of our local community. We source ingredients locally when possible and
                participate in community events and fundraisers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Ready to Experience Our Cookies?</h2>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Order now and taste the difference that quality ingredients and handcrafted care make.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Link href="/menu">
                <Button className="btn-primary px-8 py-6 font-medium">View Our Menu</Button>
              </Link>
              <Link href="/contact">
                <Button className="btn-outline-purple px-8 py-6 font-medium">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

