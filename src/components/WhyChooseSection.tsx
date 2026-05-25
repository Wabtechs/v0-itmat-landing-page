import { CheckCircle, Briefcase, Globe, Shield } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle,
    title: "Formation Complète",
    description: "Un cursus de 6 ans alliant théorie solide et pratique intensive dans nos ateliers équipés.",
  },
  {
    icon: Briefcase,
    title: "Employabilité Garantie",
    description: "95% de nos diplômés trouvent un emploi dans les 6 mois suivant l'obtention de leur diplôme.",
  },
  {
    icon: Globe,
    title: "Réseau International",
    description: "Partenariats avec des institutions et entreprises internationales pour des opportunités globales.",
  },
  {
    icon: Shield,
    title: "Encadrement de Qualité",
    description: "Un ratio élève-professeur optimal assurant un suivi personnalisé de chaque étudiant.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="pourquoi" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pourquoi ITMAT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[var(--font-heading)]">
              L&apos;Excellence qui{" "}
              <span className="gradient-text">Transforme</span> les Vies
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Depuis plus de 50 ans, l&apos;ITMAT forme les meilleurs techniciens de la RDC. Notre approche unique combine rigueur académique et immersion professionnelle.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 font-[var(--font-heading)]">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/10" />
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="text-8xl font-bold gradient-text font-[var(--font-heading)] mb-4">50+</div>
                <div className="text-2xl font-semibold text-foreground mb-2">Années d&apos;Excellence</div>
                <p className="text-muted-foreground">Former les leaders techniques de demain</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary/20 rounded-full" />
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-primary/10 rounded-lg rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
