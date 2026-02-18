"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function NavigationLoader() {
  const pathname = usePathname()
  const [state, setState] = useState<"idle" | "loading" | "done">("idle")
  const prevRef = useRef(pathname)

  // Detect clicks on internal links → start loading
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest(
        "a[href]"
      ) as HTMLAnchorElement | null
      if (!a) return

      const href = a.getAttribute("href")
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      )
        return

      if (href !== pathname) {
        setState("loading")
      }
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [pathname])

  // Pathname changed → navigation complete
  useEffect(() => {
    if (prevRef.current !== pathname) {
      prevRef.current = pathname
      setState("done")
      const t = setTimeout(() => setState("idle"), 400)
      return () => clearTimeout(t)
    }
  }, [pathname])

  if (state === "idle") return null

  return (
    <div
      className="fixed inset-0 z-[90] bg-bg flex items-center justify-center"
      style={{
        opacity: state === "done" ? 0 : 1,
        transition: "opacity 0.3s ease-out",
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="w-10 h-10 rounded-full border-2 border-border border-t-violet animate-spin" />
        <p className="font-mono text-[11px] text-fg-subtle tracking-[0.2em] uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}
