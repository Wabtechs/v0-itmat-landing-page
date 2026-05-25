import { 
  CloudSun, 
  Plane, 
  Cpu, 
  Zap, 
  Cog, 
  Building2, 
  Leaf, 
  BarChart3 
} from "lucide-react"

const programs = [
  {
    icon: CloudSun,
    title: "Météorologie",
    description: "Observation météorologique, climatologie et prévision du temps.",
  },
  {
    icon: Plane,
    title: "Aviation Civile",
    description: "Navigation aérienne, maintenance aéronautique et sécurité.",
  },
  {
    icon: Cpu,
    title: "Électronique",
    description: "Circuits électroniques, systèmes embarqués et télécommunications.",
  },
  {
    icon: Zap,
    title: "Électricité",
    description: "Installations électriques, énergies renouvelables et automatisation.",
  },
  {
    icon: Cog,
    title: "Mécanique",
    description: "Mécanique générale, automobile et maintenance industrielle.",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Génie civil, dessin technique et gestion de chantier.",
  },
  {
    icon: Leaf,
    title: "Agronomie",
    description: "Sciences agricoles, environnement et développement durable.",
  },
  {
    icon: BarChart3,
    title: "Commercial & Gestion",
    description: "Comptabilité, gestion d'entreprise et commerce international.",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Programmes</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-serif text-balance">
            Des filières techniques diversifiées
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Découvrez nos programmes d&apos;études conçus pour répondre aux besoins du marché du travail 
            et former des techniciens qualifiés dans des domaines stratégiques.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <program.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
