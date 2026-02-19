import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function AProposPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
