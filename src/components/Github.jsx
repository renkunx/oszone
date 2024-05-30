import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  return (
    <Card className="w-full max-w-sm not-content">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">shadcn/ui</div>
          <div className="rounded-full border w-8 h-8 flex items-center justify-center">
            <img
              alt="User profile image"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="text-sm leading-loose">
          Beautifully designed components that you can copy and paste into your apps.
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between align-middle">
        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400 space-x-4">
          <Link className="font-semibold hover:underline underline-offset-2" href="#">
            2,345 Stars
          </Link>
          <Link className="font-semibold hover:underline underline-offset-2" href="#">
            1,234 Forks
          </Link>
        </div>
        <div className="text-xs">Last update: 2024-04-15</div>
      </CardFooter>
    </Card>
  )
}