import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import StackTag from "@/components/StackTag"
import HeroContent from "@/components/HeroContent"

const featuredProjects = [
  {
    number: "01",
    title: "CBZ GIS Mortgage System",
    client: "Commercial Bank of Zimbabwe",
    scope: "National Banking · Live in Production",
    live: true,
    summary:
      "First GIS-driven fintech system in Zimbabwe banking. End-to-end digital mortgage applications with spatial property evaluation, valuation workflows, and payment gateway integrations.",
    url: "https://cbzmortgages.cbz.co.zw",
    tags: [
      { label: "GeoDjango", variant: "violet" as const },
      { label: "PostGIS", variant: "violet" as const },
      { label: "OpenLayers", variant: "violet" as const },
      { label: "REST APIs", variant: "electric" as const },
    ],
  },
  {
    number: "02",
    title: "Zimbabwe eCadastre",
    client: "Dept. of the Surveyor General",
    scope: "National Land Records System",
    live: true,
    summary:
      "Digitized Zimbabwe's national cadastral records into a queryable spatial system. Real-time spatial querying, geodesy module, and business rules engine for land approvals.",
    url: "http://zimcadastre.co.zw",
    tags: [
      { label: "GeoDjango", variant: "violet" as const },
      { label: "PostGIS", variant: "violet" as const },
      { label: "PostgreSQL", variant: "electric" as const },
      { label: "Python", variant: "electric" as const },
    ],
  },
  {
    number: "03",
    title: "Land Information System",
    client: "Ministry of Agriculture",
    scope: "National Government · Lead Developer",
    live: false,
    summary:
      "Digitized the full land allocation workflow — from ministerial approval to field officer verification. Eliminated paper-based processes across the entire ministry.",
    url: null,
    tags: [
      { label: "GeoDjango", variant: "violet" as const },
      { label: "OpenLayers", variant: "violet" as const },
      { label: "React", variant: "amber" as const },
      { label: "PostGIS", variant: "violet" as const },
    ],
  },
]

const services = [
  {
    number: "01",
    title: "GIS System Architecture",
    desc: "Full lifecycle design and development of enterprise GIS platforms — from spatial database architecture to frontend map interfaces.",
  },
  {
    number: "02",
    title: "Drone Data Processing",
    desc: "Raw drone imagery into production GIS layers: orthomosaics, DEMs, point clouds, integrated into spatial databases.",
  },
  {
    number: "03",
    title: "Spatial Data Consulting",
    desc: "Audit existing spatial infrastructure. Recommend improvements. Help organizations leverage their geographic data assets.",
  },
  {
    number: "04",
    title: "AI + GIS Research",
    desc: "Partner on spatial ML projects — land classification, change detection, anomaly detection from satellite or drone imagery.",
  },
]

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "6", label: "National Systems" },
  { value: "SADC", label: "Regional Reach" },
  { value: "Live", label: "In Production" },
]

const experience = [
  {
    role: "Lead GIS Software Developer",
    company: "Technical Systems Pvt Ltd",
    period: "Apr 2022 — Present",
    current: true,
    description:
      "Built 6+ national-scale GIS systems in production — CBZ Mortgage Finance, Zimbabwe eCadastre, Land Information System, Lesotho Meteorological GIS, and three POTRAZ platforms.",
  },
  {
    role: "GIS Consultant",
    company: "Senlis Consultancy",
    period: "Ad hoc",
    current: false,
    description:
      "Remote sensing engagements — processing and digitizing drone imagery post-flight during peak workload periods.",
  },
  {
    role: "GIS Specialist",
    company: "GeoHub Pvt Ltd",
    period: "Jan 2022 — Apr 2022",
    current: false,
    description:
      "Cross-border artisanal mining mapping across 8 SADC countries for the ECSA Health Community project.",
  },
  {
    role: "GIS Specialist",
    company: "Allied Systems, Harare",
    period: "Jan 2020 — Sep 2021",
    current: false,
    description:
      "ESRI distributor. Deployed GIS databases across 10+ rural district councils, built COVID-19 dashboards for the Ministry of Health, and trained users on ArcGIS workflows.",
  },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <HeroContent />

      {/* ─── CREDENTIALS ── Light section ─────────────────────── */}
      <section className="bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-20 md:mb-28">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div
                  className={`text-center ${
                    i > 0 ? "md:border-l md:border-border-on-light" : ""
                  }`}
                >
                  <p className="font-display font-bold text-6xl md:text-7xl lg:text-[96px] text-fg-on-light tracking-tight leading-none">
                    {s.value}
                  </p>
                  <p className="font-mono text-[11px] text-fg-muted-on-light tracking-[0.2em] uppercase mt-3 md:mt-4">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Work History */}
          <div className="border-t border-border-on-light pt-16 md:pt-20">
            <ScrollReveal>
              <p className="font-mono text-[11px] text-violet tracking-[0.2em] uppercase mb-10">
                Experience
              </p>
            </ScrollReveal>

            <div className="border-t border-border-on-light">
              {experience.map((e, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="border-b border-border-on-light py-7 md:py-9">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 mb-2.5">
                      <div>
                        <h3 className="font-display font-semibold text-lg md:text-xl text-fg-on-light tracking-tight">
                          {e.role}
                        </h3>
                        <p className="text-sm text-fg-muted-on-light mt-1">
                          {e.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-mono text-sm text-fg-muted-on-light">
                          {e.period}
                        </span>
                        {e.current && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-fg-muted-on-light leading-relaxed max-w-2xl">
                      {e.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ── Dark section ──────────────────── */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4">
                <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase">
                  Selected Work
                </p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-fg tracking-tight leading-[1.05]">
                  National-scale systems.
                  <br />
                  <span className="text-fg-muted">Live in production.</span>
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-fg-muted hover:text-fg transition-colors shrink-0 pb-1"
              >
                All 6 projects <span className="text-violet">→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Featured project — hero treatment */}
          <ScrollReveal>
            <div
              className="group bg-surface-elevated rounded-[24px] p-8 md:p-12 mb-5
              hover:shadow-[0_0_80px_rgba(124,58,255,0.08)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-sm font-medium text-violet">
                  {featuredProjects[0].number}
                </span>
                <span className="h-px w-4 bg-border-strong" />
                <span className="font-mono text-[11px] text-fg-subtle tracking-wider uppercase">
                  {featuredProjects[0].client}
                </span>
                {featuredProjects[0].live && (
                  <span className="ml-auto flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                    </span>
                    <span className="font-mono text-[11px] text-success/70">
                      Live
                    </span>
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-8 md:gap-16">
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-4xl md:text-5xl text-fg tracking-tight leading-[1.05]">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="font-mono text-[11px] text-electric/70">
                    {featuredProjects[0].scope}
                  </p>
                </div>
                <div className="space-y-5 md:pt-2">
                  <p className="text-fg-muted leading-relaxed">
                    {featuredProjects[0].summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProjects[0].tags.map((t) => (
                      <StackTag
                        key={t.label}
                        label={t.label}
                        variant={t.variant}
                      />
                    ))}
                  </div>
                  {featuredProjects[0].url && (
                    <a
                      href={featuredProjects[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted
                        bg-surface border border-border-strong px-4 py-2 rounded-full
                        hover:text-electric hover:border-electric/30 transition-all"
                    >
                      Visit live{" "}
                      <span className="text-sm leading-none">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Secondary projects — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.slice(1).map((p, i) => (
              <ScrollReveal key={p.number} delay={(i + 1) * 0.1}>
                <div
                  className="group bg-surface-elevated rounded-[24px] p-8 md:p-10 h-full flex flex-col
                  hover:shadow-[0_0_48px_rgba(124,58,255,0.06)] transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-sm font-medium text-violet">
                      {p.number}
                    </span>
                    <span className="h-px w-4 bg-border-strong" />
                    <span className="font-mono text-[11px] text-fg-subtle tracking-wider uppercase">
                      {p.client}
                    </span>
                    {p.live && (
                      <span className="ml-auto flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                        </span>
                        <span className="font-mono text-[11px] text-success/70">
                          Live
                        </span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-fg tracking-tight leading-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="font-mono text-[11px] text-electric/70 mb-4">
                    {p.scope}
                  </p>
                  <p className="text-fg-muted text-sm leading-relaxed mb-5 flex-1">
                    {p.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <StackTag
                        key={t.label}
                        label={t.label}
                        variant={t.variant}
                      />
                    ))}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted
                        bg-surface border border-border-strong px-4 py-2 rounded-full w-fit
                        hover:text-electric hover:border-electric/30 transition-all"
                    >
                      Visit live{" "}
                      <span className="text-sm leading-none">↗</span>
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-8 md:hidden">
            <Link
              href="/work"
              className="text-sm font-medium text-fg-muted hover:text-fg transition-colors"
            >
              All 6 projects <span className="text-violet ml-1">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── RESEARCH ── Light section ──────────────────────── */}
      <section className="bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-10 md:gap-20 items-start">
              <div className="space-y-6">
                <p className="font-mono text-[11px] text-violet tracking-[0.2em] uppercase">
                  Research & Emerging Work
                </p>
                <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-on-light tracking-tight leading-[1.05]">
                  The next frontier of spatial intelligence.
                </h2>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet hover:opacity-80 transition-opacity pt-2"
                >
                  Explore the research <span>→</span>
                </Link>
              </div>
              <div className="space-y-6 md:pt-4">
                <p className="text-fg-muted-on-light leading-relaxed text-base">
                  Beyond traditional GIS — I&apos;m actively exploring drone
                  photogrammetry pipelines, AI-powered spatial analysis, and
                  spatial data infrastructure designed for the realities of
                  developing economies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Drone Photogrammetry",
                    "AI Spatial Analysis",
                    "SDI for Developing Economies",
                  ].map((area) => (
                    <span
                      key={area}
                      className="font-mono text-[11px] px-3.5 py-2 rounded-full border border-border-on-light text-fg-muted-on-light"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES ── Dark section ───────────────────────── */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="space-y-5 mb-4">
              <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase">
                Capabilities
              </p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-fg tracking-tight leading-[1.05]">
                  Deep GIS expertise,
                  <br />
                  <span className="text-fg-muted">
                    applied to your problem.
                  </span>
                </h2>
                <Link
                  href="/services"
                  className="hidden md:flex items-center gap-2 text-sm font-medium text-fg-muted hover:text-fg transition-colors shrink-0 pb-1"
                >
                  Full overview <span className="text-violet">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="border-t border-border-strong">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.06}>
                <div className="group border-b border-border py-8 md:py-10">
                  <div className="flex gap-5 md:gap-8">
                    <span className="font-mono text-sm text-fg-subtle/50 shrink-0 pt-1">
                      {s.number}
                    </span>
                    <div className="space-y-2.5 flex-1">
                      <h3 className="font-display font-semibold text-xl md:text-2xl text-fg tracking-tight group-hover:text-violet transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="text-sm md:text-base text-fg-muted leading-relaxed max-w-2xl">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-8 md:hidden">
            <Link
              href="/services"
              className="text-sm font-medium text-fg-muted hover:text-fg transition-colors"
            >
              Full services overview{" "}
              <span className="text-violet ml-1">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CLOSING CTA ── Light section ───────────────────── */}
      <section className="bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <p className="font-mono text-[11px] text-fg-muted-on-light tracking-[0.2em] uppercase">
                Work with me
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-on-light tracking-tight leading-tight">
                Have a spatial problem
                <br />
                worth solving?
              </h2>
              <p className="text-fg-muted-on-light text-lg leading-relaxed max-w-lg mx-auto">
                I take on a limited number of consultancy projects. If you have
                a spatial challenge — let&apos;s talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-fg-on-light text-bg-light font-display font-bold text-sm px-8 py-4 rounded-full
                    hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium px-8 py-4 rounded-full border border-border-on-light text-fg-on-light
                    hover:border-violet transition-all duration-200 w-full sm:w-auto text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
