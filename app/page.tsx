import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <HeroSlider />
    </main>
  )
}
