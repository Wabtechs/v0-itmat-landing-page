import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { ProgramsSection } from "../components/ProgramsSection"
import { WhyChooseSection } from "../components/WhyChooseSection"
import { StatsSection } from "../components/StatsSection"
import { CampusSection } from "../components/CampusSection"
import { AdmissionCTA } from "../components/AdmissionCTA"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseSection />
        <StatsSection />
        <CampusSection />
        <AdmissionCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
