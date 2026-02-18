"use client"

import Link from "next/link"
import { motion } from "motion/react"

const ease = [0, 0, 0.2, 1] as const

export default function HeroContent() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-8 overflow-hidden">
      {/* Gradient orbs — larger, more presence */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-300px",
          left: "-200px",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(124,58,255,0.14) 0%, rgba(124,58,255,0.04) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-200px",
          right: "-200px",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(6,214,240,0.10) 0%, rgba(6,214,240,0.03) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-[11px] text-fg-subtle tracking-[0.2em] uppercase mb-10"
        >
          GIS Systems Architect · Zimbabwe & Beyond
        </motion.p>

        {/* Main display — the anchor of the page */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
        >
          <h1
            className="font-display font-bold gradient-text leading-[0.88] tracking-[-0.04em] select-none"
            style={{ fontSize: "clamp(64px, 13vw, 160px)" }}
          >
            SPATIAL
          </h1>
          <p
            className="font-display font-bold text-fg leading-[0.88] tracking-[-0.04em] select-none -mt-1"
            style={{ fontSize: "clamp(64px, 13vw, 160px)" }}
          >
            INTELLIGENCE
          </p>
        </motion.div>

        {/* Name — treated as a brand mark, not an afterthought */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.22, ease }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-display font-semibold text-fg text-lg md:text-xl tracking-tight">
            Scotch Ajison
          </span>
          <span className="h-px w-8 bg-border-strong" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="font-sans text-fg-muted text-base md:text-lg leading-relaxed mt-5 max-w-lg mx-auto"
        >
          I build the spatial systems governments and banks rely on.
          <br className="hidden sm:block" />
          Now designing the next generation with drones and AI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          <Link
            href="/work"
            className="font-sans text-sm font-semibold px-7 py-3.5 rounded-full border border-border-strong text-fg
              hover:border-violet/50 hover:shadow-[0_0_20px_rgba(124,58,255,0.15)]
              transition-all duration-200 w-full sm:w-auto text-center"
          >
            View My Work →
          </Link>
          <Link
            href="/contact"
            className="font-display font-bold text-sm px-7 py-3.5 rounded-full bg-amber text-black
              hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200
              w-full sm:w-auto text-center"
          >
            Let's Talk
          </Link>
        </motion.div>

        {/* Scroll indicator — coordinates, not generic text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] text-fg-subtle/60 tracking-[0.15em]">
            19.45°S · 29.82°E
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-fg-subtle/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
