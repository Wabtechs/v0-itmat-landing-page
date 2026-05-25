import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  institution: [
    { label: "À Propos", href: "#about" },
    { label: "Histoire", href: "#" },
    { label: "Direction", href: "#" },
    { label: "Actualités", href: "#" },
  ],
  academics: [
    { label: "Programmes", href: "#programs" },
    { label: "Calendrier", href: "#" },
    { label: "Bibliothèque", href: "#" },
    { label: "Recherche", href: "#" },
  ],
  students: [
    { label: "Admission", href: "#admission" },
    { label: "Vie Étudiante", href: "#" },
    { label: "Bourses", href: "#" },
    { label: "Alumni", href: "#" },
  ],
  contact: [
    { label: "Contact", href: "#contact" },
    { label: "Campus", href: "#campus" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg font-serif">IT</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground font-serif">ITMAT</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm mb-6 max-w-xs leading-relaxed">
              Institut Technique de Météorologie, d&apos;Aviation Civile et de Télécommunication. 
              Former les techniciens de demain.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center hover:bg-accent/20 transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-primary-foreground/60 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4 font-serif">Institution</h4>
            <ul className="space-y-3">
              {footerLinks.institution.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4 font-serif">Académique</h4>
            <ul className="space-y-3">
              {footerLinks.academics.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4 font-serif">Étudiants</h4>
            <ul className="space-y-3">
              {footerLinks.students.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4 font-serif">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} ITMAT. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
                Conditions d&apos;utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
