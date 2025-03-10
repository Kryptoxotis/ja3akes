"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBagIcon } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
}

export default function MenuPage() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const menuItems: MenuItem[] = [
    // Cookies
    {
      id: 1,
      name: "Classic Chocolate Chip",
      description: "Rich brown butter cookies with premium dark chocolate chunks and a perfectly gooey center",
      price: "$3.50",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.01.24%20-%20A%20batch%20of%20rich%20brown%20butter%20chocolate%20chip%20cookies%20with%20dark%20chocolate%20chunks%2C%20slightly%20crisp%20edges%2C%20and%20a%20gooey%20center.%20The%20cookies%20are%20golden-brown-9rMWzCKxTPmhgRS9ZGhWpRttvw9ok1.webp",
      category: "Cookies",
    },
    {
      id: 2,
      name: "S'mores Delight",
      description: "Golden cookies topped with toasted marshmallows, chocolate squares, and graham cracker crumbs",
      price: "$4.50",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.02.24%20-%20A%20close-up%20of%20freshly%20baked%20s%27mores%20cookies%20on%20a%20rustic%20wooden%20table.%20The%20cookies%20are%20golden%20brown%20with%20gooey%20melted%20marshmallows%20and%20rich%2C%20melted%20cho-ZQCCtfpQyIlSkkozhqI0QK4wDKWTL4.webp",
      category: "Cookies",
    },
    {
      id: 3,
      name: "Classic Peanut Butter",
      description: "Traditional peanut butter cookies with our signature crosshatch pattern",
      price: "$3.75",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.01.07%20-%20A%20batch%20of%20golden-brown%20peanut%20butter%20cookies%20with%20a%20signature%20crisscross%20fork%20pattern%20on%20top%2C%20arranged%20on%20a%20rustic%20wooden%20table.%20The%20cookies%20have%20a%20s-thatgj7I7GIHpK2t0gZN0MmShHOG5B.webp",
      category: "Cookies",
    },
    {
      id: 4,
      name: "Oatmeal Raisin",
      description: "Chewy oatmeal cookies with plump raisins and rolled oats",
      price: "$3.75",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.01.15%20-%20A%20batch%20of%20chewy%20oatmeal%20raisin%20cookies%20with%20visible%20oats%20and%20plump%20raisins%2C%20arranged%20on%20a%20wooden%20plate.%20The%20cookies%20have%20a%20golden-brown%20color%20with%20a%20-h1FXytPmdMGyLAz7O9TyZbSh7xpnm7.webp",
      category: "Cookies",
    },
    // Specialty Treats
    {
      id: 5,
      name: "Decorated Sugar Cookies",
      description: "Beautifully decorated sugar cookies with royal icing in seasonal designs",
      price: "$5.50",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2017.29.03%20-%20A%20beautiful%20display%20of%20sugar%20cookies%20with%20hardening%20frosting%2C%20decorated%20with%20pastel%20colors%20and%20intricate%20icing%20patterns.%20The%20cookies%20are%20arranged%20on%20a-2Yug57pYRDDIHRx5Ur2u5DSzfhZYDi.webp",
      category: "Specialty Treats",
    },
    {
      id: 6,
      name: "Cookie Assortment Box",
      description: "A delightful assortment of our most popular cookies",
      price: "$24.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2017.27.18%20-%20A%20beautifully%20arranged%20assortment%20of%20freshly%20baked%20cookies%20on%20a%20wooden%20tray.%20The%20display%20includes___-%20Classic%20chocolate%20chip%20cookies%20with%20golden-brown-vUgbQWW9H6nJYCr0bOB7JDRNLeERXr.webp",
      category: "Specialty Treats",
    },
    {
      id: 7,
      name: "Chocolate Chip Cookie Tray",
      description: "A tray of our classic chocolate chip cookies, perfect for sharing",
      price: "$18.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2017.29.01%20-%20A%20close-up%20of%20a%20rustic%20wooden%20tray%20filled%20with%20freshly%20baked%20classic%20chocolate%20chip%20cookies%2C%20golden%20brown%20with%20gooey%20chocolate%20chips.%20The%20setting%20is%20w-OWQMQvCGNV5uUzo4fX5Zj4yBhV0d3X.webp",
      category: "Specialty Treats",
    },
  ]

  // Group menu items by category
  const categories = menuItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, MenuItem[]>,
  )

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    })

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />

      {/* Menu Header */}
      <section className="py-12 md:py-16 metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Our Menu</h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Explore our delicious selection of handcrafted cookies and treats
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container px-4 md:px-6">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-8">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-black metallic-black rounded-lg overflow-hidden border-none hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative h-64 bg-black overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 bg-gradient-to-b from-black/50 to-black">
                      <h3 className="text-xl font-bold mb-2">
                        <span className="text-rosegold-500">{item.name}</span>
                      </h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-purple-400">{item.price}</span>
                        <Button className="btn-primary rounded-full" onClick={() => handleAddToCart(item)}>
                          <ShoppingBagIcon className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-black metallic-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Custom Orders</h2>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Looking for something special? We offer custom orders for any occasion.
            </p>
            <Link href="/contact">
              <Button className="btn-primary px-8 py-6 font-medium mt-4">Contact Us for Custom Orders</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

