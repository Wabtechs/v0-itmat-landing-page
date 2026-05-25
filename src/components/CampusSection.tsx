import { MapPin, Building, Users, BookOpen } from "lucide-react"

const campuses = [
  {
    name: "Campus de Binza",
    location: "Kinshasa, Binza",
    description: "Notre campus principal avec des installations modernes pour les formations en météorologie et navigation aérienne.",
    features: ["Laboratoire météo", "Simulateurs de vol", "Bibliothèque technique", "Internat"],
    students: "1500+",
  },
  {
    name: "Campus de Ndolo",
    location: "Kinshasa, Ndolo",
    description: "Centre d'excellence pour les formations industrielles avec des ateliers équipés de matériel de pointe.",
    features: ["Ateliers mécaniques", "Lab électronique", "Centre informatique", "Cafétéria"],
    students: "1200+",
  },
]

export function CampusSection() {
  return (
    <section id="campus" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nos Campus
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[var(--font-heading)]">
            <span className="gradient-text">Deux Campus</span> d&apos;Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Des infrastructures modernes réparties sur deux sites stratégiques à Kinshasa pour une formation optimale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="group rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-500/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="w-20 h-20 text-primary/30" />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-sm text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {campus.location}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-[var(--font-heading)]">
                  {campus.name}
                </h3>
                <p className="text-muted-foreground mb-6">{campus.description}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {campus.students} étudiants
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {campus.features.length} installations
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {campus.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
