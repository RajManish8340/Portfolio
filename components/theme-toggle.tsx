"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M6.76 4.84 5.34 3.42 3.92 4.84l1.42 1.42 1.42-1.42Zm10.48 0 1.42-1.42 1.42 1.42-1.42 1.42-1.42-1.42ZM11 4h2v3h-2V4Zm0 13h2v3h-2v-3ZM4 11h3v2H4v-2Zm13 0h3v2h-3v-2ZM6.76 19.16 5.34 20.58l-1.42-1.42 1.42-1.42 1.42 1.42ZM19.16 17.24l1.42 1.42-1.42 1.42-1.42-1.42 1.42-1.42ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12.01 2A9.99 9.99 0 1 0 22 11.99 8 8 0 0 1 12.01 2Z" />
    </svg>
  )
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const enableDark = stored ? stored === "dark" : prefersDark
    root.classList.toggle("dark", enableDark)
    setIsDark(enableDark)
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !isDark
    root.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setIsDark(next)
  }

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
