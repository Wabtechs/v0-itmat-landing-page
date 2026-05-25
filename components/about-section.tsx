import { Award, Wrench, Lightbulb, Briefcase } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Excellence Technique",
    description: "Formation rigoureuse aux standards internationaux avec des programmes accrédités.",
  },
  {
    icon: Wrench,
    title: "Formation Pratique",
    description: "Ateliers équipés et travaux pratiques pour une maîtrise concrète des compétences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouragement à la créativité et aux projets innovants dans chaque filière.",
  },
  {
    icon: Briefcase,
    title: "Compétences Professionnelles",
    description: "Préparation au monde du travail avec stages et partenariats industriels.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">À Propos de Nous</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-serif text-balance">
            L&apos;ITMAT, une école technique d&apos;excellence
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            L&apos;Institut Technique de Météorologie, d&apos;Aviation Civile et de Télécommunication est une école 
            secondaire technique rattachée à l&apos;écosystème ISTA. Nous formons les futurs techniciens et 
            professionnels de la RDC dans un environnement d&apos;apprentissage pratique et scientifique.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
