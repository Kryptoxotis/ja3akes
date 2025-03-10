import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="border-purple-800 border-2 bg-black metallic-black hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < rating ? "text-rosegold-400 fill-rosegold-400" : "text-gray-600"}`}
            />
          ))}
        </div>
        <blockquote className="text-gray-300 italic mb-4">"{quote}"</blockquote>
        <p className="font-medium text-purple-400">{name}</p>
      </CardContent>
    </Card>
  )
}

