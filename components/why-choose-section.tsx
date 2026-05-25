import { Hammer, FlaskConical, GraduationCap, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Hammer,
    title: "Ateliers Pratiques",
    description: "Des laboratoires et ateliers entièrement équipés pour une formation concrète et appliquée.",
  },
  {
    icon: FlaskConical,
    title: "Formation Scientifique",
    description: "Un enseignement rigoureux basé sur les sciences fondamentales et appliquées.",
  },
  {
    icon: GraduationCap,
    title: "Enseignants Qualifiés",
    description: "Une équipe pédagogique expérimentée et passionnée par la transmission du savoir.",
  },
  {
    icon: TrendingUp,
    title: "Opportunités de Carrière",
    description: "Des partenariats avec des entreprises pour faciliter l'insertion professionnelle.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pourquoi Nous Choisir</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6 font-serif text-balance">
            L&apos;excellence technique à votre portée
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            L&apos;ITMAT offre un environnement d&apos;apprentissage unique combinant théorie et pratique 
            pour former des professionnels compétents et adaptables.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all">
                <reason.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3 font-serif">{reason.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
