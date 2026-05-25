"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 8, suffix: "+", label: "Programmes Techniques" },
  { value: 2, suffix: "", label: "Campus" },
  { value: 15, suffix: "+", label: "Ateliers & Laboratoires" },
  { value: 50, suffix: "+", label: "Années d'Héritage" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.round(stepValue * currentStep), value))
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2 font-serif">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-foreground/70 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
