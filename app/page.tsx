import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      {/* Hero */}
      <section className="flex flex-col items-start gap-6">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Portfolio</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-balance">
          Building delightful software  with care and craft.
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          I'm a software engineer focused on better software , performance, accessibility, and clean modern design . Continuosly learning new things. Explore my latest
          projects and writings below .
        </p>
        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blogs">Read Blogs</Link>
          </Button>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance-first</CardTitle>
            <CardDescription>Fast and responsive</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            optimizing from the first day itself providing a delightful software experience 
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Modern tooling</CardTitle>
            <CardDescription>Next.js, TypeScript, and shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            A pragmatic, maintainable stack, with strong patterns for scalability and velocity.
          </CardContent>
        </Card>
      </section>

      {/* Featured Projects Preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Button asChild variant="ghost">
            <Link href="/projects">See all</Link>
          </Button>
        </div>
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
            <CardContent className="flex flex-wrap gap-2 ">
              {p.tags.map((t) => (
                <Badge className="" variant="secondary" key={t}>
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

      {/* Experience */}
      {/* <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-balance">Senior Frontend Engineer — Acme Inc.</CardTitle>
              <CardDescription>2023 — Present</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Improved performance (FCP/TTFB) across core pages.</li>
                <li>Built reusable UI primitives using design tokens.</li>
                <li>Partnered with design/product to ship faster.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-balance">Frontend Engineer — Widget Co.</CardTitle>
              <CardDescription>2021 — 2023</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Delivered accessible components and docs.</li>
                <li>Introduced E2E testing to reduce regressions.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <Button asChild variant="outline">
            <Link href="/resume">View full resume</Link>
          </Button>
        </div>
      </section> */}
    </div>
  )
}

