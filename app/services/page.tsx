import { Navbar } from "@/components/navbar"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesSection />
      <ProcessSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
