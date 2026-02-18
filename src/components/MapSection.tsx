"use client"

import dynamic from "next/dynamic"

const MapEmbed = dynamic(() => import("@/components/MapEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[440px] rounded-[20px] bg-surface border border-border flex items-center justify-center">
      <span className="font-mono text-xs text-fg-subtle">Loading map...</span>
    </div>
  ),
})

export default function MapSection() {
  return <MapEmbed />
}
