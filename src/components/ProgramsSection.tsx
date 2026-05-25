import { Cloud, Plane, Cpu, Cog, Radio, Zap, Wrench, Settings } from "lucide-react"

const programs = [
  {
    icon: Cloud,
    title: "Météorologie",
    description: "Formation en sciences atmosphériques, prévisions météorologiques et climatologie appliquée.",
    duration: "6 ans",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Plane,
    title: "Navigation Aérienne",
    description: "Techniques de contrôle aérien, navigation et gestion du trafic aérien.",
    duration: "6 ans",
    color: "from-primary to-yellow-500",
  },
  {
    icon: Cpu,
    title: "Électronique Industrielle",
    description: "Conception et maintenance des systèmes électroniques industriels.",
    duration: "6 ans",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cog,
    title: "Mécanique Industrielle",
    description: "Fabrication, maintenance et gestion des équipements mécaniques.",
    duration: "6 ans",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Radio,
    title: "Télécommunications",
    description: "Systèmes de communication, réseaux et technologies de transmission.",
    duration: "6 ans",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Électricité Industrielle",
    description: "Installation, maintenance des réseaux électriques et automatisation.",
    duration: "6 ans",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Wrench,
    title: "Maintenance Aéronautique",
    description: "Entretien et réparation des aéronefs et équipements de bord.",
    duration: "6 ans",
    color: "from-slate-500 to-gray-600",
  },
  {
    icon: Settings,
    title: "Automatisme",
    description: "Programmation et maintenance des systèmes automatisés industriels.",
    duration: "6 ans",
    color: "from-teal-500 to-cyan-600",
  },
]

export function ProgramsSection() {
  return (
    <section id="programmes" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nos Programmes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[var(--font-heading)]">
            <span className="gradient-text">8 Filières</span> Techniques d&apos;Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Des formations complètes de 6 ans combinant théorie rigoureuse et pratique intensive pour préparer les techniciens de demain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 font-[var(--font-heading)]">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {program.duration}
                  </span>
                  <a href="#admission" className="text-sm text-primary hover:underline">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
