"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" {...props}>
      <path fill="currentColor" d="M12 3.2 3 10v10h6v-6h6v6h6V10z" />
    </svg>
  )
}
function BlogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" {...props}>
      <path fill="currentColor" d="M4 5h16v2H4zm0 6h16v2H4zm0 6h10v2H4z" />
    </svg>
  )
}
function ProjectsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" {...props}>
      <path fill="currentColor" d="M3 4h8v8H3zM13 4h8v5h-8zM13 11h8v9h-8zM3 14h8v6H3z" />
    </svg>
  )
}
function AboutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" {...props}>
      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 8a7 7 0 0 1 14 0v1H5z" />
    </svg>
  )
}
function ResumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" {...props}>
      <path fill="currentColor" d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6zM14 3v5h5" />
    </svg>
  )
}
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

const items = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/blogs", label: "Blogs", icon: BlogIcon },
  { href: "/projects", label: "Projects", icon: ProjectsIcon },
  { href: "/about", label: "About", icon: AboutIcon },
  { href: "/resume", label: "Resume", icon: ResumeIcon },
]

export function MobileDock() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Mobile Navigation"
      className={cn(
        "md:hidden fixed inset-x-3 bottom-3 z-50",
        // spacing handled by inner container
        "drop-shadow-sm",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-2 rounded-xl border",
          // transparent blur background with color
          "bg-background/60 supports-[backdrop-filter]:bg-background/45 backdrop-blur-md",
          // subtle colored ring for accent
          "border-border ring-1 ring-primary/10",
          "px-3 py-2",
        )}
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.25rem)" }}
      >
        {/* Internal page links */}
        <ul className="flex flex-1 items-center justify-between">
          {items.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex flex-col items-center gap-1 px-2 py-1 rounded-md transition-colors",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon />
                  <span className="text-[11px] leading-none">{label}</span>
                </Link>
              </li>
            )
          })}
          {/* External social links */}
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col items-center gap-1 px-2 py-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
              <span className="text-[11px] leading-none">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col items-center gap-1 px-2 py-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon />
              <span className="text-[11px] leading-none">Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
