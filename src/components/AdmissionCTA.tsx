import { ArrowRight, Calendar, FileText } from "lucide-react"

export function AdmissionCTA() {
  return (
    <section id="admission" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-primary/10 rounded-lg rotate-45" />
          
          <div className="relative z-10 p-8 md:p-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Admissions 2024-2025
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[var(--font-heading)] max-w-3xl mx-auto">
              Rejoignez l&apos;Élite Technique de{" "}
              <span className="gradient-text">Demain</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Les inscriptions pour l&apos;année académique 2024-2025 sont ouvertes. Ne manquez pas cette opportunité de construire votre avenir avec l&apos;ITMAT.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                Commencer l&apos;inscription
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="group px-8 py-4 rounded-xl glass text-foreground font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Télécharger la brochure
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Date limite: 30 Septembre 2024
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Documents requis: Bulletin, Certificat de naissance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
