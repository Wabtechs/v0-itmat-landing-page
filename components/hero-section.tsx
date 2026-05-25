"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating geometric elements */}
        <div className="absolute top-32 right-1/4 w-20 h-20 border border-accent/20 rotate-45 animate-float" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-accent/30 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/10 rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-20 w-24 h-24 border-2 border-primary/10 rounded-lg rotate-12 animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-accent/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-foreground/80">École Technique d&apos;Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 font-serif leading-tight text-balance">
            Former les{" "}
            <span className="text-accent">techniciens</span> et{" "}
            <span className="text-accent">innovateurs</span> de demain
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            École technique secondaire spécialisée dans les sciences appliquées, la météorologie, 
            l&apos;aviation civile, l&apos;électronique et les technologies industrielles à Kinshasa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
            >
              Découvrir les Programmes
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 text-lg"
            >
              Nous Contacter
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-foreground/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
