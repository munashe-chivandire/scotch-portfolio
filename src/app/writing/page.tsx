import type { Metadata } from "next"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles and insights on GIS development, drone photogrammetry, spatial AI, and building systems for Africa.",
}

const plannedArticles = [
  {
    title:
      "How We Digitized Zimbabwe's National Cadastre — And What We Learned",
    category: "Case Study",
    description:
      "The full story behind building the eCadastre system: technical decisions, institutional challenges, and what I'd do differently today.",
    readTime: "12 min read",
  },
  {
    title: "Why Africa Needs Its Own Drone-to-GIS Pipelines",
    category: "Opinion",
    description:
      "Most drone mapping tools are designed for well-mapped countries. Here's what's different when you're mapping a place with no address system.",
    readTime: "8 min read",
  },
  {
    title: "Building GIS Systems for Countries with No Address System",
    category: "Technical",
    description:
      "Practical patterns for building spatial platforms in contexts where postcodes, street names, and formal boundaries don't exist.",
    readTime: "10 min read",
  },
  {
    title: "Open Source vs Commercial GIS: A Developer's Honest Take",
    category: "Opinion",
    description:
      "After 5+ years building on both sides — PostGIS vs ArcGIS, QGIS vs ArcPro, GeoServer vs ArcGIS Server — here's what actually matters.",
    readTime: "7 min read",
  },
  {
    title:
      "What Spatial AI Actually Means for Land Administration in Africa",
    category: "Research",
    description:
      "Beyond the hype: where machine learning actually helps in land management, and where it's still a solution looking for a problem.",
    readTime: "9 min read",
  },
]

const categoryColors: Record<string, string> = {
  "Case Study": "bg-violet/10 text-violet border border-violet/20",
  Opinion: "bg-[#FFF7ED] text-[#92400E] border border-[#F59E0B]/20",
  Technical: "bg-[#ECFEFF] text-[#155E75] border border-[#06B6D4]/20",
  Research: "bg-violet/10 text-violet border border-violet/20",
}

export default function WritingPage() {
  return (
    <>
      {/* ─── HEADER ── Dark section ──────────────────────── */}
      <section className="pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase mb-6">
              Writing
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-fg tracking-tight leading-[1.05] max-w-4xl">
              Practitioner insights.
              <br />
              <span className="text-fg-muted">Not listicles.</span>
            </h1>
            <p className="text-fg-muted text-lg leading-relaxed mt-6 max-w-2xl">
              Long-form, technically credible writing from someone who builds
              spatial systems — not someone who writes about them from the
              outside.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ARTICLES ── Light section ───────────────────── */}
      <section className="bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          {/* Status indicator */}
          <ScrollReveal>
            <div className="flex items-center gap-3 pt-14 md:pt-20 pb-8">
              <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <p className="font-mono text-[11px] text-fg-muted-on-light tracking-wider">
                Articles in progress — publishing soon
              </p>
            </div>
          </ScrollReveal>

          {/* Article list */}
          <div className="border-t border-border-on-light">
            {plannedArticles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.06}>
                <div
                  className={`py-8 md:py-10 ${
                    i < plannedArticles.length - 1
                      ? "border-b border-border-on-light"
                      : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[11px] px-2.5 py-[2px] rounded-[6px] ${
                            categoryColors[article.category] || ""
                          }`}
                        >
                          {article.category}
                        </span>
                        <span className="font-mono text-[11px] text-fg-muted-on-light">
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="font-display font-semibold text-xl md:text-2xl text-fg-on-light tracking-tight leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-sm text-fg-muted-on-light leading-relaxed max-w-2xl">
                        {article.description}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-fg-muted-on-light/50 shrink-0 md:pt-1">
                      Coming soon
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom padding */}
          <div className="pb-14 md:pb-20" />
        </div>
      </section>

      {/* ─── NEWSLETTER ── Dark section ──────────────────── */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-surface-elevated rounded-[24px] p-8 md:p-14 lg:p-16 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-violet/5 blur-[80px] pointer-events-none" />

              <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
                <div className="space-y-4">
                  <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase">
                    Newsletter
                  </p>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-fg tracking-tight leading-tight">
                    Get notified when I publish
                  </h2>
                  <p className="text-fg-muted leading-relaxed max-w-md">
                    Practitioner-focused writing on GIS development, drones,
                    and spatial AI. No spam. No fluff.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      disabled
                      className="flex-1 bg-surface border border-border rounded-full px-5 py-3.5 text-sm text-fg-subtle opacity-50 cursor-not-allowed"
                    />
                    <button
                      disabled
                      className="bg-violet/20 text-violet/60 font-display font-semibold text-sm px-6 py-3.5 rounded-full cursor-not-allowed shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                    <p className="font-mono text-[11px] text-fg-subtle">
                      Newsletter launching soon
                    </p>
                  </div>
                  <a
                    href="https://linkedin.com/in/scotchajison"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors"
                  >
                    Follow on LinkedIn for updates{" "}
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
