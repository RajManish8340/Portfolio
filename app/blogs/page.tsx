import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const posts = [
  {
    slug: "crafting-accessible-ui",
    title: "Crafting Accessible UI",
    description: "Simple steps to make your components accessible and inclusive.",
    date: "2025-04-12",
  },
  {
    slug: "nextjs-performance-patterns",
    title: "Next.js Performance Patterns",
    description: "Strategies to ship faster experiences users feel immediately.",
    date: "2025-03-28",
  },
  {
    slug: "design-tokens-in-practice",
    title: "Design Tokens in Practice",
    description: "A practical guide to theming and scaling your design system.",
    date: "2025-01-30",
  },
]

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Blogs</h1>
        <Button asChild variant="outline">
          <Link href="/">Back home</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        Coming Soon ..... 
        {/* {posts.map((post) => (
          <Link key={post.slug} href="#">
            <Card className="cursor-pointer hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="text-balance">{post.title}</CardTitle>
                <CardDescription>
                  {new Date(post.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {post.description}
              </CardContent>
            </Card>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
