import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <Button asChild variant="outline">
          <Link href="/">Back home</Link>
        </Button>
      </div>
      <section className="space-y-4">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(() => {
            const featuredProjects = [
              {
                title: "Hex Colour Game",
                description: "Guess the hex code of the colour based on the given colour",
                liveUrl: "https://hexa-color-guessing-game.vercel.app",
                sourceUrl: "https://github.com/RajManish8340/hexa-color-guessing",
                tags: ["nextjs", "shadcn", "Ts"]
              },
              {
                title: "Pokedex",
                description: "Terminal based pokemon game where you can move around different areas and catch pokemon there ",
                liveUrl: "",
                sourceUrl: "https://github.com/RajManish8340/pokedex-ts",
                tags: ["Ts", "Terminal", "caching"]
              },
              {
                title: "Web Crawler",
                description: "Terminal based web crawler where you can type in the url of the site get the links related to that page ",
                imageAlt: "Project Three preview",
                sourceUrl: "https://github.com/RajManish8340/webCrawlerhttp",
                liveUrl: "",
                tags: ["Js", "Terminal" ,"Test"]
              },
            ] as const

            return featuredProjects.map((p) => (
              <Card key={p.title}>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                 {p.tags.map((t) => (
                  <Badge variant="secondary" key={t}>
                    {t}
                  </Badge>
                 ))} 
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  {p.liveUrl ? (
                    <Button asChild size="sm">
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </Button>
                  ) : null}
                  {p.sourceUrl ? (
                    <Button asChild size="sm" variant="outline">
                      <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Source
                      </a>
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
            ))
          })()}
        </div>
      </section>
    
    </div>
  )
}

