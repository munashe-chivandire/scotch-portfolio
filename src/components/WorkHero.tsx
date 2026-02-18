"use client"

import { motion } from "motion/react"

const ease = [0, 0, 0.2, 1] as const

const stats = [
  { value: "6", label: "Systems Built" },
  { value: "5+", label: "Years" },
  { value: "8", label: "Countries" },
  { value: "Live", label: "In Production" },
]

export default function WorkHero() {
  return (
    <section className="relative pt-32 pb-12 md:pt-44 md:pb-20 overflow-hidden">
      {/* Gradient orbs — atmosphere matching landing hero */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-200px",
          right: "-100px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(124,58,255,0.12) 0%, rgba(124,58,255,0.03) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          left: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(6,214,240,0.08) 0%, rgba(6,214,240,0.02) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-[11px] text-fg-subtle tracking-[0.2em] uppercase mb-8"
        >
          Portfolio · 6 Systems
        </motion.p>

        {/* Display heading — gradient treatment matching landing hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
        >
          <h1
            className="font-display font-bold leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
          >
            <span className="gradient-text">SELECTED</span>
            <br />
            <span className="text-fg">WORK</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease }}
          className="text-fg-muted text-base md:text-lg leading-relaxed mt-6 max-w-2xl"
        >
          Production systems that government agencies, banks, and regulatory
          authorities rely on daily. Not prototypes — real infrastructure.
        </motion.p>

        {/* Stats strip — matches landing page credentials style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 pt-8 border-t border-border"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={i > 0 ? "md:border-l md:border-border md:pl-8" : ""}
            >
              <p className="font-display font-bold text-3xl md:text-4xl text-fg tracking-tight leading-none">
                {s.value}
              </p>
              <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
