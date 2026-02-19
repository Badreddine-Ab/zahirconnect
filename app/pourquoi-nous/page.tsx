import { Navbar } from "@/components/navbar"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function PourquoiNousPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhyChooseUs />
      <CtaBanner />
      <Footer />
    </main>
  )
}
