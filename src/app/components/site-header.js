"use client"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    const header = document.querySelector("header")
    const headerHeight = header?.offsetHeight || 0

    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2"
          >
            <span className="font-bold text-xl text-primary hover:text-primary/90 transition-colors">Portfolio</span>
          </button>
          <nav className="hidden md:flex items-center ml-8 space-x-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">Download CV</Button>
      </div>
    </header>
  )
}

