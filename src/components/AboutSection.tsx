import { GraduationCap, Users, Award, Building2 } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Excellence Académique",
    description: "Programme rigoureux aligné sur les standards internationaux de formation technique.",
  },
  {
    icon: Users,
    title: "Encadrement Expert",
    description: "Corps professoral qualifié avec une expérience industrielle significative.",
  },
  {
    icon: Award,
    title: "Reconnaissance Nationale",
    description: "Diplômes reconnus par le Ministère de l'Enseignement et les industries.",
  },
  {
    icon: Building2,
    title: "Infrastructure Moderne",
    description: "Laboratoires équipés et ateliers pratiques pour une formation complète.",
  },
]

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            À Propos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[var(--font-heading)]">
            Une Institution d&apos;Excellence depuis{" "}
            <span className="gradient-text">1970</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            L&apos;ITMAT est un établissement d&apos;enseignement technique secondaire de référence en République Démocratique du Congo, formant les futurs techniciens et ingénieurs dans les domaines de pointe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-[var(--font-heading)]">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
