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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/images/lab-electronics.jpg"
                alt="Laboratoire d'électronique ITMAT"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <img
                src="/images/lab-meteorology.jpg"
                alt="Laboratoire de météorologie ITMAT"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/images/workshop-mechanics.jpg"
                alt="Atelier mécanique ITMAT"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="p-6 glass-card rounded-2xl">
                <div className="text-4xl font-bold gradient-text mb-2">54+</div>
                <p className="text-muted-foreground">Années d&apos;excellence en formation technique</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              À Propos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[var(--font-heading)]">
              Une Institution d&apos;Excellence depuis{" "}
              <span className="gradient-text">1970</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              L&apos;ITMAT est un établissement d&apos;enseignement technique secondaire de référence en République Démocratique du Congo, formant les futurs techniciens et ingénieurs dans les domaines de pointe.
            </p>
            <p className="text-muted-foreground mb-8">
              Avec deux campus stratégiquement situés à Kinshasa (Binza et Ndolo), nous offrons des formations complètes en météorologie, aviation, électronique et technologies industrielles, préparant nos étudiants aux défis du monde professionnel moderne.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-foreground">Formation pratique</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-foreground">Équipements modernes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-foreground">Stages en entreprise</span>
              </div>
            </div>
          </div>
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
