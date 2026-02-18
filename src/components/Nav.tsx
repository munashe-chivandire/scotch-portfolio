"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark — cleaner, no pill */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display font-bold text-lg gradient-text leading-none tracking-tight">
            SA
          </span>
          <span className="h-4 w-px bg-border-strong hidden sm:block" />
          <span className="font-display font-medium text-sm text-fg-muted tracking-tight hidden sm:block group-hover:text-fg transition-colors duration-200">
            Scotch Ajison
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative font-sans text-sm font-medium py-1 transition-colors duration-150 ${
                pathname?.startsWith(l.href)
                  ? "text-fg"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {l.label}
              {pathname?.startsWith(l.href) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-violet" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-display font-bold text-sm px-5 py-2.5 rounded-full bg-amber text-black
              hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 flex flex-col gap-[5px] group"
        >
          <span
            className={`block w-5 h-[1.5px] bg-fg-muted transition-all duration-200 origin-center ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-fg-muted transition-all duration-200 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-fg-muted transition-all duration-200 origin-center ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-surface/95 backdrop-blur-md border-b border-border px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-base font-medium py-2.5 transition-colors ${
                pathname?.startsWith(l.href)
                  ? "text-fg"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="h-px bg-border my-2" />
          <Link
            href="/contact"
            className="font-display font-bold text-base text-amber py-2"
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </div>
    </header>
  )
}
