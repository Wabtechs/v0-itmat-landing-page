import { MapPin } from "lucide-react"

const campuses = [
  {
    name: "Campus Binza",
    description: "Notre campus principal avec des laboratoires de pointe et ateliers modernes.",
    features: ["Laboratoires scientifiques", "Ateliers mécaniques", "Bibliothèque technique"],
  },
  {
    name: "Campus Ndolo",
    description: "Campus spécialisé dans l'aviation civile et la météorologie.",
    features: ["Station météorologique", "Simulateurs de vol", "Centre de formation aéronautique"],
  },
]

const facilities = [
  { name: "Laboratoires", description: "Équipements modernes pour les sciences" },
  { name: "Ateliers", description: "Espaces pratiques professionnels" },
  { name: "Salles de Classe", description: "Environnement d'apprentissage optimal" },
]

export function CampusSection() {
  return (
    <section id="campus" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Campus</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-serif text-balance">
            Des infrastructures modernes
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Nos campus offrent un environnement d&apos;apprentissage stimulant avec des équipements 
            de pointe pour une formation technique complète.
          </p>
        </div>

        {/* Campus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-primary/30 to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Kinshasa, RDC</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">{campus.name}</h3>
                <p className="text-foreground/70 mb-4">{campus.description}</p>
                <div className="flex flex-wrap gap-2">
                  {campus.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-secondary/50 border border-border text-center hover:bg-secondary transition-colors"
            >
              <h4 className="text-lg font-semibold text-foreground mb-2 font-serif">{facility.name}</h4>
              <p className="text-foreground/60 text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
