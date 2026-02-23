"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: 10, suffix: "+", label: "Ans d'expérience" },
]

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span className="font-display text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
      {isVisible ? count.toLocaleString() : "0"}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "group text-center transition-all duration-700",
                isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isInView} />
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
