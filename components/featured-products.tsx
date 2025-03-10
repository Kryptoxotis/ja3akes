"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBagIcon } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
}

export default function FeaturedProducts() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const products: Product[] = [
    {
      id: 1,
      name: "Classic Chocolate Chip",
      description: "Rich brown butter cookies with premium dark chocolate chunks and a perfectly gooey center",
      price: "$3.50",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.01.24%20-%20A%20batch%20of%20rich%20brown%20butter%20chocolate%20chip%20cookies%20with%20dark%20chocolate%20chunks%2C%20slightly%20crisp%20edges%2C%20and%20a%20gooey%20center.%20The%20cookies%20are%20golden-brown-9rMWzCKxTPmhgRS9ZGhWpRttvw9ok1.webp",
    },
    {
      id: 2,
      name: "S'mores Delight",
      description: "Golden cookies topped with toasted marshmallows, chocolate squares, and graham cracker crumbs",
      price: "$4.50",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.02.24%20-%20A%20close-up%20of%20freshly%20baked%20s%27mores%20cookies%20on%20a%20rustic%20wooden%20table.%20The%20cookies%20are%20golden%20brown%20with%20gooey%20melted%20marshmallows%20and%20rich%2C%20melted%20cho-ZQCCtfpQyIlSkkozhqI0QK4wDKWTL4.webp",
    },
    {
      id: 3,
      name: "Classic Peanut Butter",
      description: "Traditional peanut butter cookies with our signature crosshatch pattern",
      price: "$3.75",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.01.07%20-%20A%20batch%20of%20golden-brown%20peanut%20butter%20cookies%20with%20a%20signature%20crisscross%20fork%20pattern%20on%20top%2C%20arranged%20on%20a%20rustic%20wooden%20table.%20The%20cookies%20have%20a%20s-thatgj7I7GIHpK2t0gZN0MmShHOG5B.webp",
    },
    {
      id: 4,
      name: "Oatmeal Raisin",
      description: "Chewy oatmeal cookies with plump raisins and rolled oats",
      price: "$3.75",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-09%2020.01.15%20-%20A%20batch%20of%20chewy%20oatmeal%20raisin%20cookies%20with%20visible%20oats%20and%20plump%20raisins%2C%20arranged%20on%20a%20wooden%20plate.%20The%20cookies%20have%20a%20golden-brown%20color%20with%20a%20-h1FXytPmdMGyLAz7O9TyZbSh7xpnm7.webp",
    },
  ]

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden border-none bg-black metallic-black hover:shadow-lg transition-all duration-300 group"
        >
          <div className="relative h-64 bg-black overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardContent className="p-6 bg-gradient-to-b from-black/50 to-black">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-rosegold-500">{product.name}</span>
            </h3>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-purple-400">{product.price}</span>
              <Button size="sm" className="btn-primary rounded-full" onClick={() => handleAddToCart(product)}>
                <ShoppingBagIcon className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

