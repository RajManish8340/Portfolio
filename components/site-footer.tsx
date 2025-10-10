import { SocialLinks } from "./social-links"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Thank you for visiting 
        </p>
        {/* Social links visible on every page */}
        <SocialLinks />
      </div>
    </footer>
  )
}
