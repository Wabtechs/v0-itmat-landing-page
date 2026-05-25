import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { StatsSection } from "@/components/stats-section"
import { CampusSection } from "@/components/campus-section"
import { AdmissionCTA } from "@/components/admission-cta"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseSection />
      <StatsSection />
      <CampusSection />
      <AdmissionCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
