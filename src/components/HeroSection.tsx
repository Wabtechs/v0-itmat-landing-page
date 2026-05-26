import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        {/* Floating geometric elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/30 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-blue-400/20 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Inscriptions ouvertes pour 2024-2025</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-[var(--font-heading)] animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Formez les{" "}
              <span className="gradient-text">Ingénieurs</span>
              <br />
              de Demain
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              L&apos;Institut Technique Météorologie, Aéronautique et des Techniques Industrielles forme l&apos;élite technique de la RDC en météorologie, aviation, électronique et technologies industrielles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#admission"
                className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                Commencer l&apos;inscription
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programmes"
                className="group px-8 py-4 rounded-xl glass-card text-foreground font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Découvrir nos programmes
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up hidden lg:block" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/hero-students.jpg"
                alt="Etudiants ITMAT en formation technique"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating cards on image */}
            <div className="absolute -bottom-6 -left-6 p-4 glass-card rounded-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">8</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Filières</p>
                  <p className="font-semibold text-foreground">Techniques</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-400">95%</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Taux</p>
                  <p className="font-semibold text-foreground">d&apos;insertion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50+", label: "Années d'excellence" },
            { value: "8", label: "Programmes techniques" },
            { value: "5000+", label: "Diplômés" },
            { value: "95%", label: "Taux d'insertion" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 glass-card rounded-xl">
              <div className="text-3xl md:text-4xl font-bold gradient-text font-[var(--font-heading)]">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
