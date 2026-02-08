import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaBanner } from "@/components/cta-banner"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
