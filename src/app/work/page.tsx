import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import StackTag from "@/components/StackTag"
import WorkHero from "@/components/WorkHero"

export const metadata: Metadata = {
  title: "Work",
  description:
    "National-scale GIS systems built by Scotch Ajison — from digital cadastres to GIS-powered banking.",
}

type TagVariant = "violet" | "electric" | "amber"

interface Project {
  number: string
  title: string
  client: string
  url: string | null
  scale: string
  live: boolean
  problem: string
  solution: string
  impact: string
  tags: { label: string; variant: TagVariant }[]
}

const projects: Project[] = [
  {
    number: "01",
    title: "CBZ GIS Mortgage Finance System",
    client: "Commercial Bank of Zimbabwe",
    url: "https://cbzmortgages.cbz.co.zw",
    scale: "National Banking · Live in Production",
    live: true,
    problem:
      "Mortgage applications were paper-based. Loan officers had no way to spatially evaluate properties or integrate valuation data with core banking.",
    solution:
      "A GeoDjango + OpenLayers platform that lets customers browse, evaluate, and apply for properties spatially — fully integrated with CBZ's core banking, payment systems, and SMS gateway.",
    impact:
      "End-to-end digital mortgage applications. First GIS-driven fintech system in Zimbabwe banking.",
    tags: [
      { label: "GeoDjango", variant: "violet" },
      { label: "PostGIS", variant: "violet" },
      { label: "OpenLayers", variant: "violet" },
      { label: "REST APIs", variant: "electric" },
      { label: "SOAP APIs", variant: "electric" },
      { label: "CBZ Touch", variant: "amber" },
    ],
  },
  {
    number: "02",
    title: "Zimbabwe eCadastre System",
    client: "Department of the Surveyor General",
    url: "http://zimcadastre.co.zw",
    scale: "National Land Records · Government System",
    live: true,
    problem:
      "Zimbabwe's cadastral records were fragmented, paper-based, and inaccessible in real-time. Surveyors and administrators had no unified platform.",
    solution:
      "A national digital cadastre — geodesy module, spatial indexing, business rules engine for land approvals, parcel validation, and CI/CD deployment pipelines.",
    impact:
      "Digitized national land records. Real-time spatial querying. 20% reduction in downtime via CI/CD pipelines.",
    tags: [
      { label: "GeoDjango", variant: "violet" },
      { label: "PostGIS", variant: "violet" },
      { label: "PostgreSQL", variant: "electric" },
      { label: "Python", variant: "electric" },
      { label: "Linux/Apache", variant: "electric" },
    ],
  },
  {
    number: "03",
    title: "Land Information System",
    client: "Ministry of Agriculture, Land, Water and Fisheries",
    url: null,
    scale: "National Government · Lead Developer",
    live: false,
    problem:
      "State land applications moved through manual, paper-heavy approval chains. No spatial verification. No transparency.",
    solution:
      "A GIS-based land allocation and registration system. Digitized the full workflow from ministerial approval to field officer verification, including GIS field data collection modules and automated approval chains.",
    impact:
      "Eliminated paper-based processes. Improved transparency. Full lifecycle digitization of land allocation.",
    tags: [
      { label: "GeoDjango", variant: "violet" },
      { label: "PostGIS", variant: "violet" },
      { label: "React", variant: "amber" },
      { label: "OpenLayers", variant: "violet" },
    ],
  },
  {
    number: "04",
    title: "POTRAZ Results-Based Monitoring System",
    client: "Postal and Telecommunications Regulatory Authority of Zimbabwe",
    url: null,
    scale: "Regulatory Authority · 3 Systems in Production",
    live: true,
    problem:
      "Department heads across the regulatory authority had no centralized way to track KPIs and monitor team performance.",
    solution:
      "A centralized KPI and performance monitoring platform. Sole developer from architecture to deployment. Three interconnected systems in active production.",
    impact:
      "Digitized manual performance evaluation. Active production use across the authority.",
    tags: [
      { label: "Python", variant: "electric" },
      { label: "PostgreSQL", variant: "electric" },
      { label: "Django", variant: "electric" },
    ],
  },
  {
    number: "05",
    title: "Investor Hosting",
    client: "Radar Holdings",
    url: "https://investorhosting.com",
    scale: "Investment Intelligence Platform",
    live: true,
    problem:
      "Investors needed a transparent, spatially-enabled way to discover and evaluate investment opportunities across Zimbabwe's real estate, mining, and agricultural sectors.",
    solution:
      "Spatially enabled investment intelligence platform with GIS dashboards, React frontend, and AI-assisted investor insights.",
    impact:
      "Digitized investor onboarding. Transparent visualization of investment assets across multiple sectors.",
    tags: [
      { label: "React", variant: "amber" },
      { label: "GIS Dashboards", variant: "violet" },
      { label: "AI Integration", variant: "electric" },
    ],
  },
  {
    number: "06",
    title: "SADC Artisanal Mining Mapping",
    client: "GeoHub Pvt Ltd / ESCA Health Community",
    url: null,
    scale: "8 Countries · SADC Region",
    live: false,
    problem:
      "Artisanal small-scale mining operations across Southern Africa were unmapped, making environmental and health impact assessment impossible.",
    solution:
      "Spatial mapping and data collection across 8 SADC countries, documenting artisanal mining locations, environmental conditions, and community health data.",
    impact:
      "First comprehensive spatial dataset of artisanal mining across the SADC region. Cross-border spatial data for policy decisions.",
    tags: [
      { label: "QGIS", variant: "amber" },
      { label: "Spatial Mapping", variant: "violet" },
      { label: "Field Data", variant: "electric" },
    ],
  },
]

/* ── Live indicator dot ─────────────────────────────── */
function LiveBadge() {
  return (
    <span className="ml-auto flex items-center gap-2">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
      </span>
      <span className="font-mono text-[11px] text-success/70">Live</span>
    </span>
  )
}

/* ── Visit link pill ────────────────────────────────── */
function VisitLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted
        bg-surface border border-border-strong px-4 py-2 rounded-full
        hover:text-electric hover:border-electric/30 transition-all"
    >
      Visit live <span className="text-sm leading-none">↗</span>
    </a>
  )
}

/* ── Card header strip ──────────────────────────────── */
function CardHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm font-medium text-violet">
        {project.number}
      </span>
      <span className="h-px w-4 bg-border-strong" />
      <span className="font-mono text-[11px] text-fg-subtle tracking-wider uppercase">
        {project.client}
      </span>
      {project.live && <LiveBadge />}
    </div>
  )
}

export default function WorkPage() {
  const featured = projects[0]
  const pairA = projects.slice(1, 3)
  const wide = projects[3]
  const pairB = projects.slice(4, 6)

  return (
    <div>
      <WorkHero />

      {/* ─── CASE STUDIES ──────────────────────────────── */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-5">

          {/* ── Featured project — hero card treatment ──── */}
          <ScrollReveal>
            <article
              className="group bg-surface-elevated rounded-[24px] p-8 md:p-12
                hover:shadow-[0_0_80px_rgba(124,58,255,0.08)] transition-all duration-500"
            >
              <CardHeader project={featured} />

              <div className="grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-8 md:gap-16 mt-8">
                <div className="space-y-3">
                  <h2 className="font-display font-bold text-3xl md:text-5xl text-fg tracking-tight leading-[1.05]">
                    {featured.title}
                  </h2>
                  <p className="font-mono text-[11px] text-electric/70">
                    {featured.scale}
                  </p>
                </div>
                <div className="space-y-5 md:pt-2">
                  <div>
                    <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                      The Challenge
                    </p>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {featured.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                      What I Built
                    </p>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {featured.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact callout */}
              <div className="bg-bg rounded-[16px] p-5 md:p-6 mt-8 mb-6">
                <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase mb-2">
                  Impact
                </p>
                <p className="text-fg font-display font-medium text-base md:text-lg leading-relaxed tracking-tight">
                  {featured.impact}
                </p>
              </div>

              {/* Tags + link */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {featured.tags.map((t) => (
                    <StackTag
                      key={t.label}
                      label={t.label}
                      variant={t.variant}
                    />
                  ))}
                </div>
                {featured.url && <VisitLink url={featured.url} />}
              </div>
            </article>
          </ScrollReveal>

          {/* ── Grid pair A — projects 02 & 03 ─────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pairA.map((p, i) => (
              <ScrollReveal key={p.number} delay={(i + 1) * 0.1}>
                <article
                  className="group bg-surface-elevated rounded-[24px] p-8 md:p-10 h-full flex flex-col
                    hover:shadow-[0_0_48px_rgba(124,58,255,0.06)] transition-all duration-500"
                >
                  <CardHeader project={p} />

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-fg tracking-tight leading-tight mt-5 mb-2">
                    {p.title}
                  </h3>
                  <p className="font-mono text-[11px] text-electric/70 mb-5">
                    {p.scale}
                  </p>

                  <div className="space-y-4 mb-5 flex-1">
                    <div>
                      <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                        The Challenge
                      </p>
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {p.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                        What I Built
                      </p>
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {p.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-bg rounded-[16px] p-4 md:p-5 mb-5">
                    <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase mb-1.5">
                      Impact
                    </p>
                    <p className="text-fg font-display font-medium text-sm md:text-base leading-relaxed tracking-tight">
                      {p.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <StackTag
                        key={t.label}
                        label={t.label}
                        variant={t.variant}
                      />
                    ))}
                  </div>

                  {p.url && <VisitLink url={p.url} />}
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Wide card — project 04 ─────────────────── */}
          <ScrollReveal>
            <article
              className="group bg-surface-elevated rounded-[24px] p-8 md:p-12
                hover:shadow-[0_0_80px_rgba(124,58,255,0.08)] transition-all duration-500"
            >
              <CardHeader project={wide} />

              <div className="grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-8 md:gap-16 mt-8">
                <div className="space-y-3">
                  <h2 className="font-display font-bold text-3xl md:text-5xl text-fg tracking-tight leading-[1.05]">
                    {wide.title}
                  </h2>
                  <p className="font-mono text-[11px] text-electric/70">
                    {wide.scale}
                  </p>
                </div>
                <div className="space-y-5 md:pt-2">
                  <div>
                    <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                      The Challenge
                    </p>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {wide.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                      What I Built
                    </p>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {wide.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg rounded-[16px] p-5 md:p-6 mt-8 mb-6">
                <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase mb-2">
                  Impact
                </p>
                <p className="text-fg font-display font-medium text-base md:text-lg leading-relaxed tracking-tight">
                  {wide.impact}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {wide.tags.map((t) => (
                    <StackTag
                      key={t.label}
                      label={t.label}
                      variant={t.variant}
                    />
                  ))}
                </div>
                {wide.url && <VisitLink url={wide.url} />}
              </div>
            </article>
          </ScrollReveal>

          {/* ── Grid pair B — projects 05 & 06 ─────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pairB.map((p, i) => (
              <ScrollReveal key={p.number} delay={(i + 1) * 0.1}>
                <article
                  className="group bg-surface-elevated rounded-[24px] p-8 md:p-10 h-full flex flex-col
                    hover:shadow-[0_0_48px_rgba(124,58,255,0.06)] transition-all duration-500"
                >
                  <CardHeader project={p} />

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-fg tracking-tight leading-tight mt-5 mb-2">
                    {p.title}
                  </h3>
                  <p className="font-mono text-[11px] text-electric/70 mb-5">
                    {p.scale}
                  </p>

                  <div className="space-y-4 mb-5 flex-1">
                    <div>
                      <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                        The Challenge
                      </p>
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {p.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                        What I Built
                      </p>
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {p.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-bg rounded-[16px] p-4 md:p-5 mb-5">
                    <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase mb-1.5">
                      Impact
                    </p>
                    <p className="text-fg font-display font-medium text-sm md:text-base leading-relaxed tracking-tight">
                      {p.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <StackTag
                        key={t.label}
                        label={t.label}
                        variant={t.variant}
                      />
                    ))}
                  </div>

                  {p.url && <VisitLink url={p.url} />}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Light section (matches landing page closing) ── */}
      <section className="bg-bg-light">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <p className="font-mono text-[11px] text-fg-muted-on-light tracking-[0.2em] uppercase">
                Work with me
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fg-on-light tracking-tight leading-tight">
                Interested in working
                <br />
                together?
              </h2>
              <p className="text-fg-muted-on-light text-lg leading-relaxed max-w-lg mx-auto">
                I take on a limited number of consultancy projects focused on
                spatial systems that need deep GIS expertise.
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
    </div>
  )
}
