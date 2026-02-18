import type { Metadata } from "next"
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import NavigationLoader from "@/components/NavigationLoader"
import AiChatBubble from "@/components/AiChatBubble"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: {
    default: "Scotch Ajison — Spatial Intelligence Consultant",
    template: "%s | Scotch Ajison",
  },
  description:
    "GIS Systems Architect and Spatial Intelligence Consultant. I build the spatial systems governments and financial institutions rely on — and I'm designing the next generation using drones and AI.",
  keywords: [
    "GIS consultant Zimbabwe",
    "GIS software developer Africa",
    "drone GIS consultant SADC",
    "PostGIS developer Zimbabwe",
    "spatial data consultant Africa",
    "GeoDjango developer",
    "spatial systems architect",
  ],
  openGraph: {
    title: "Scotch Ajison — Spatial Intelligence Consultant",
    description:
      "GIS Systems Architect building the spatial systems governments rely on — and designing the next generation with drones and AI.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <NavigationLoader />
        <Nav />
        <main>{children}</main>
        <Footer />
        <AiChatBubble />
      </body>
    </html>
  )
}
