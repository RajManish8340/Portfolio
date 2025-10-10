import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">About</h1>
        <Button asChild variant="outline">
          <Link href="/">Back home</Link>
        </Button>
      </div>

      <Card>
        <CardContent className="prose dark:prose-invert max-w-none p-6">
          <p>
            Hi I am Raj Manish sahu , Building and learning softwares and technologies .
          </p>
          <p>
            I am always curious about tech Software and Hardware Technologies . I am currently learning about low level stuff in c/c++ .
          </p>

        </CardContent>
      </Card>
    </div>
  )
}
