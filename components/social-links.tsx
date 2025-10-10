import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.85 9.65.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.06 1.56 1.06.9 1.58 2.37 1.12 2.95.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.8 1.07a9.4 9.4 0 0 1 5.1 0c1.96-1.35 2.8-1.07 2.8-1.07.55 1.43.21 2.49.1 2.75.64.73 1.02 1.66 1.02 2.79 0 3.98-2.34 4.86-4.57 5.11.36.32.67.95.67 1.92v2.85c0 .27.18.6.69.49A10.29 10.29 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" {...props}>
      <path
        fill="currentColor"
        d="M20.88 7.27c.01.16.01.31.01.47 0 4.84-3.68 10.42-10.42 10.42-2.07 0-4-.61-5.62-1.66.29.03.57.04.86.04 1.72 0 3.3-.59 4.56-1.58-1.61-.03-2.97-1.09-3.44-2.55.23.04.46.06.71.06.34 0 .68-.05 1-.13-1.68-.34-2.94-1.82-2.94-3.6v-.05c.49.27 1.06.42 1.65.44a3.62 3.62 0 0 1-1.61-3 3.62 3.62 0 0 1 .49-1.83 10.3 10.3 0 0 0 7.48 3.79c-.49-2.37 1.28-4.3 3.5-4.3 1.03 0 1.96.44 2.62 1.14a6.83 6.83 0 0 0 2.29-.87 3.63 3.63 0 0 1-1.6 1.99 7.2 7.2 0 0 0 2.08-.57 7.81 7.81 0 0 1-1.81 1.88Z"
      />
    </svg>
  )
}

export function SocialLinks({
  className,
  variant = "outline",
}: {
  className?: string
  variant?: "ghost" | "outline"
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button asChild size="sm" variant={variant} className="gap-2">
        <Link
          href="https://github.com/RajManish8340/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub profile"
        >
          <GitHubIcon />
          <span className="hidden sm:inline">GitHub</span>
        </Link>
      </Button>
      <Button asChild size="sm" variant={variant} className="gap-2">
        <Link
          href="https://x.com/RajMs_twt"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter profile"
        >
          <TwitterIcon />
          <span className="hidden sm:inline">Twitter</span>
        </Link>
      </Button>
    </div>
  )
}
