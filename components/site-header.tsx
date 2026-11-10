"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { SocialLinks } from "./social-links"

const navItems = [
  { href: "/blogs", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "https://drive.google.com/file/d/1SDJeHwAt--t6WCq7DR5IATM645GEIijv/view?usp=drive_link", label: "Resume", external: true },
]

export function SiteHeader() {
  const pathname = usePathname()
  const showMainNav = pathname === "/"

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-balance text-2xl">
            <span className="text-primary">Raj</span> Ms
          </span>
        </Link>

        {/* Primary nav only on Home as requested */}
        <nav
          className={cn("hidden md:flex items-center gap-6", showMainNav ? "md:flex" : "md:hidden")}
          aria-label="Primary"
        >
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <SocialLinks variant="ghost" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
