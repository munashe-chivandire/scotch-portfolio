import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import StackTag from "@/components/StackTag"
import WorkHero from "@/components/WorkHero"

export const metadata: Metadata = {
  title: "Work",
  description:
    "GIS projects by Scotch Ajison — from geospatial analysis platforms and 3D flight simulators to national spatial data warehouses.",
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
    title: "Interactive Geospatial Index Analysis System",
    client: "Google Earth Engine Powered",
    url: null,
    scale: "Web Platform · Real-Time Geospatial Analysis",
    live: false,
    problem:
      "Environmental monitoring required manual, disconnected analysis of satellite imagery with no easy way to define custom areas of interest or compute environmental indices on demand.",
    solution:
      "A web-based geospatial analysis platform powered by Google Earth Engine. Users draw custom polygon boundaries on an interactive map, select indices (NDVI, NDWI, EVI, SAVI, Soil Moisture), and get real-time color-coded raster overlays clipped to their exact boundary — all computed in the cloud.",
    impact:
      "Scalable, on-demand environmental monitoring for precision agriculture, drought assessment, ecosystem analysis, and land-use planning.",
    tags: [
      { label: "Google Earth Engine", variant: "violet" },
      { label: "Python", variant: "electric" },
      { label: "Remote Sensing", variant: "violet" },
      { label: "NDVI/NDWI", variant: "amber" },
      { label: "Interactive Mapping", variant: "violet" },
    ],
  },
  {
    number: "02",
    title: "Aircraft Detection & Counting System",
    client: "Satellite Imagery Analysis",
    url: null,
    scale: "Computer Vision · Google Satellite Imagery",
    live: false,
    problem:
      "Manual counting of aircraft from satellite imagery is time-consuming, error-prone, and impractical for monitoring airports or airfields at scale.",
    solution:
      "An automated aircraft detection and counting system using Google API satellite imagery and computer vision. Object detection algorithms identify aircraft, draw bounding boxes, generate counts per area, and convert results to geographic coordinates for GIS overlay.",
    impact:
      "Automated aircraft inventory from satellite imagery. Bounding-box detection with geospatial mapping for airport monitoring and trend analysis.",
    tags: [
      { label: "Google API", variant: "electric" },
      { label: "Computer Vision", variant: "violet" },
      { label: "Object Detection", variant: "violet" },
      { label: "GIS", variant: "amber" },
      { label: "Python", variant: "electric" },
    ],
  },
  {
    number: "03",
    title: "3D GIS-Based Flight Simulator",
    client: "GIS & Blender Integration",
    url: null,
    scale: "3D GIS · Interactive Flight Simulation",
    live: false,
    problem:
      "Traditional GIS platforms lacked 3D flight simulation capabilities, making it difficult to visualize and analyze aircraft movement within a georeferenced environment.",
    solution:
      "An interactive 3D flight simulator integrated within a GIS environment. Custom Blender-designed aircraft models fly along user-defined waypoint-based routes with real-time tracking, playback controls, altitude profiling, and distance measurement — all within a 3D georeferenced scene.",
    impact:
      "Realistic 3D flight visualization within GIS. Applicable to aviation route planning, pilot training, airspace monitoring, and drone trajectory evaluation.",
    tags: [
      { label: "Blender", variant: "amber" },
      { label: "3D GIS", variant: "violet" },
      { label: "Flight Simulation", variant: "violet" },
      { label: "Spatial Analysis", variant: "electric" },
    ],
  },
  {
    number: "04",
    title: "Spatial Data Warehouses — Rural District Councils",
    client: "Zimbabwe Resilience Building Fund (ZRBF)",
    url: null,
    scale: "10+ Rural District Councils · National Initiative",
    live: true,
    problem:
      "Rural district councils operated with siloed, inaccessible GIS data. No centralized spatial repositories existed for climate resilience planning or disaster preparedness at the district level.",
    solution:
      "Enterprise-grade Spatial Data Warehouses across 10+ Rural District Councils. Centralized geospatial repositories integrating cadastral data, agricultural zones, hydrology, infrastructure, and climate risk datasets. Built on PostgreSQL/PostGIS with GeoServer (WMS/WFS) and web-based GIS interfaces.",
    impact:
      "Standardized spatial data governance. Real-time spatial querying for drought, flood, and livelihood vulnerability analysis. Eliminated siloed GIS environments across districts.",
    tags: [
      { label: "PostgreSQL/PostGIS", variant: "violet" },
      { label: "GeoServer", variant: "violet" },
      { label: "WMS/WFS", variant: "electric" },
      { label: "Web GIS", variant: "amber" },
      { label: "Spatial Data", variant: "electric" },
    ],
  },
  {
    number: "05",
    title: "COVID-19 Spatially Enabled Response Dashboard",
    client: "Ministry of Health and Child Care — Zimbabwe",
    url: null,
    scale: "National · Public Health Emergency Response",
    live: false,
    problem:
      "During the COVID-19 pandemic, Zimbabwe lacked a real-time, spatially enabled system to track case distribution, hospital capacity, and resource allocation at district and provincial levels.",
    solution:
      "A real-time spatially enabled COVID-19 response dashboard integrating epidemiological data, testing centers, isolation facilities, and hospital capacity. Built with Django, GeoServer, and OpenLayers for live case mapping, hotspot detection, and vaccination planning.",
    impact:
      "National-level decision support for rapid response teams. Hotspot detection, temporal trend visualization, and geospatial resource allocation during the pandemic.",
    tags: [
      { label: "Django", variant: "electric" },
      { label: "GeoServer", variant: "violet" },
      { label: "OpenLayers", variant: "violet" },
      { label: "Epidemiology", variant: "amber" },
      { label: "Real-Time", variant: "electric" },
    ],
  },
  {
    number: "06",
    title: "Land Use & Land Cover Change — River Turbidity Analysis",
    client: "Environmental Research",
    url: null,
    scale: "Spatial-Temporal Analysis · Watershed Research",
    live: false,
    problem:
      "The relationship between land use changes — agricultural expansion, deforestation, settlement growth — and river water quality was poorly understood, limiting effective watershed management.",
    solution:
      "Spatial-temporal analysis using multi-temporal satellite imagery, supervised classification, and GIS-based hydrological modeling. LULC change detection, buffer and watershed delineation, and spatial regression analysis to quantify how land transformation patterns affect river turbidity.",
    impact:
      "Actionable insights for watershed management and environmental policy. Quantified the link between land transformation and ecological conservation.",
    tags: [
      { label: "Remote Sensing", variant: "violet" },
      { label: "LULC Classification", variant: "violet" },
      { label: "GIS", variant: "electric" },
      { label: "Hydrological Modeling", variant: "amber" },
    ],
  },
  {
    number: "07",
    title: "Active OpenStreetMap Contributor",
    client: "OpenStreetMap Community",
    url: null,
    scale: "Zimbabwe & Africa · Open Geospatial Data",
    live: true,
    problem:
      "Large parts of Zimbabwe and broader African regions remain undermapped, limiting navigation, planning, and humanitarian response capabilities.",
    solution:
      "Active contribution to OpenStreetMap including digitization of rural infrastructure (roads, schools, clinics), mapping underserved and disaster-prone communities, validating spatial datasets, and supporting humanitarian mapping campaigns.",
    impact:
      "Enhanced open-data ecosystems across Zimbabwe. Improved navigation and planning datasets for underserved communities. Strengthened community-driven geospatial intelligence.",
    tags: [
      { label: "OpenStreetMap", variant: "violet" },
      { label: "Digitization", variant: "electric" },
      { label: "Humanitarian Mapping", variant: "amber" },
      { label: "Open Data", variant: "electric" },
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
  const closing = projects[6]

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

          {/* ── Closing card — project 07 ─────────────────── */}
          <ScrollReveal>
            <article
              className="group bg-surface-elevated rounded-[24px] p-8 md:p-12
                hover:shadow-[0_0_80px_rgba(124,58,255,0.08)] transition-all duration-500"
            >
              <CardHeader project={closing} />

              <div className="grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-8 md:gap-16 mt-8">
                <div className="space-y-3">
                  <h2 className="font-display font-bold text-3xl md:text-5xl text-fg tracking-tight leading-[1.05]">
                    {closing.title}
                  </h2>
                  <p className="font-mono text-[11px] text-electric/70">
                    {closing.scale}
                  </p>
                </div>
                <div className="space-y-5 md:pt-2">
                  <div>
                    <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                      The Challenge
                    </p>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {closing.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-fg-subtle tracking-[0.15em] uppercase mb-2">
                      What I Built
                    </p>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {closing.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg rounded-[16px] p-5 md:p-6 mt-8 mb-6">
                <p className="font-mono text-[11px] text-electric tracking-[0.2em] uppercase mb-2">
                  Impact
                </p>
                <p className="text-fg font-display font-medium text-base md:text-lg leading-relaxed tracking-tight">
                  {closing.impact}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {closing.tags.map((t) => (
                    <StackTag
                      key={t.label}
                      label={t.label}
                      variant={t.variant}
                    />
                  ))}
                </div>
                {closing.url && <VisitLink url={closing.url} />}
              </div>
            </article>
          </ScrollReveal>
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
