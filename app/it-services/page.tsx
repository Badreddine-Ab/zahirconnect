"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Code, Smartphone, Cloud, Server, Database, Globe, Cpu, Layers, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function ITServicesPage() {
    const { ref: heroRef, isInView: heroVisible } = useInView()
    const { ref: servicesRef, isInView: servicesVisible } = useInView()
    const { ref: techRef, isInView: techVisible } = useInView()

    const techRow1 = [
        { name: "React", icon: <Code className="w-5 h-5 text-blue-500" /> },
        { name: "Next.js", icon: <Globe className="w-5 h-5 text-black dark:text-white" /> },
        { name: "TypeScript", icon: <Code className="w-5 h-5 text-blue-600" /> },
        { name: "Vue.js", icon: <Code className="w-5 h-5 text-green-500" /> },
        { name: "Angular", icon: <Code className="w-5 h-5 text-red-600" /> },
        { name: "Svelte", icon: <Code className="w-5 h-5 text-orange-600" /> },
        { name: "Tailwind CSS", icon: <Layers className="w-5 h-5 text-cyan-500" /> },
        { name: "Three.js", icon: <Globe className="w-5 h-5 text-blue-400" /> },
        { name: "Flutter", icon: <Smartphone className="w-5 h-5 text-blue-400" /> },
        { name: "React Native", icon: <Smartphone className="w-5 h-5 text-blue-500" /> },
        { name: "iOS (Swift)", icon: <Smartphone className="w-5 h-5 text-orange-500" /> },
        { name: "Android (Kotlin)", icon: <Smartphone className="w-5 h-5 text-green-600" /> },
        { name: "Redux", icon: <Layers className="w-5 h-5 text-purple-500" /> },
        { name: "GraphQL", icon: <Database className="w-5 h-5 text-pink-600" /> },
        { name: "Three.js", icon: <Cpu className="w-5 h-5 text-indigo-500" /> },
    ]

    const techRow2 = [
        { name: "Node.js", icon: <Server className="w-5 h-5 text-green-600" /> },
        { name: "Python", icon: <Code className="w-5 h-5 text-yellow-500" /> },
        { name: "Django", icon: <Server className="w-5 h-5 text-green-800" /> },
        { name: "FastAPI", icon: <Server className="w-5 h-5 text-teal-500" /> },
        { name: "Go", icon: <Server className="w-5 h-5 text-blue-300" /> },
        { name: "Rust", icon: <Cpu className="w-5 h-5 text-orange-700" /> },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-blue-600" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-500" /> },
        { name: "Redis", icon: <Database className="w-5 h-5 text-red-600" /> },
        { name: "Docker", icon: <Server className="w-5 h-5 text-blue-500" /> },
        { name: "Kubernetes", icon: <Cloud className="w-5 h-5 text-blue-600" /> },
        { name: "AWS", icon: <Cloud className="w-5 h-5 text-orange-500" /> },
        { name: "Azure", icon: <Cloud className="w-5 h-5 text-blue-700" /> },
        { name: "Terraform", icon: <Layers className="w-5 h-5 text-purple-600" /> },
        { name: "Firebase", icon: <Database className="w-5 h-5 text-yellow-600" /> },
    ]

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-10" />
                    <img
                        src="/images/hero-2.jpg"
                        alt="IT Services Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <h1
                        className={cn(
                            "text-4xl md:text-6xl font-bold font-display tracking-tight mb-6 transition-all duration-700 transform",
                            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}
                    >
                        Solutions Digitales <span className="text-primary">Sur Mesure</span>
                    </h1>
                    <p
                        className={cn(
                            "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-100 transform",
                            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}
                    >
                        Propulsez votre entreprise avec nos services de développement web, mobile et solutions cloud DevOps de pointe.
                    </p>
                    <div
                        className={cn(
                            "flex justify-center transition-all duration-700 delay-200 transform",
                            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}
                    >
                        <Button size="lg" className="gap-2" asChild>
                            <Link href="/#contact">
                                Demander un Devis <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section ref={servicesRef} className="py-20 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Nos Expertises IT</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Une équipe d'experts dédiés à la réussite de vos projets technologiques.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Web Development */}
                        <div
                            className={cn(
                                "bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group",
                                servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <Globe className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Développement Web</h3>
                            <p className="text-muted-foreground mb-4">
                                Sites vitrines, e-commerce et applications web complexes utilisant les dernières technologies (Next.js, React).
                            </p>
                            <ul className="text-sm space-y-2 text-foreground/80">
                                <li className="flex items-center gap-2">• Applications React/Next.js</li>
                                <li className="flex items-center gap-2">• CMS sur mesure</li>
                                <li className="flex items-center gap-2">• Performance & SEO</li>
                            </ul>
                        </div>

                        {/* Mobile Apps */}
                        <div
                            className={cn(
                                "bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 delay-100 transform group",
                                servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}
                        >
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <Smartphone className="w-7 h-7 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Applications Mobiles</h3>
                            <p className="text-muted-foreground mb-4">
                                Solutions mobiles natives et hybrides pour iOS et Android qui engagent vos utilisateurs.
                            </p>
                            <ul className="text-sm space-y-2 text-foreground/80">
                                <li className="flex items-center gap-2">• iOS & Android (Flutter/React Native)</li>
                                <li className="flex items-center gap-2">• UX/UI Mobile First</li>
                                <li className="flex items-center gap-2">• Maintenance & Mises à jour</li>
                            </ul>
                        </div>

                        {/* DevOps & Cloud */}
                        <div
                            className={cn(
                                "bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 delay-200 transform group",
                                servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}
                        >
                            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                                <Cloud className="w-7 h-7 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">DevOps & Cloud</h3>
                            <p className="text-muted-foreground mb-4">
                                Infrastructure scalable, CI/CD et déploiement automatisé pour une fiabilité maximale.
                            </p>
                            <ul className="text-sm space-y-2 text-foreground/80">
                                <li className="flex items-center gap-2">• AWS / Azure / Google Cloud</li>
                                <li className="flex items-center gap-2">• Docker & Kubernetes</li>
                                <li className="flex items-center gap-2">• Pipelines CI/CD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section ref={techRef} className="py-20 overflow-hidden relative bg-background">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2
                        className={cn(
                            "text-3xl md:text-4xl font-bold font-display mb-4 transition-all duration-700",
                            techVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}
                    >
                        Technologies <span className="text-primary">Maîtrisées</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Nous utilisons les outils les plus performants du marché pour garantir la qualité et la scalabilité de vos solutions.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Row 1: Frontend & Mobile */}
                    <div className="flex w-full overflow-hidden">
                        <div className="flex gap-12 animate-marquee whitespace-nowrap py-4 items-center">
                            {[...techRow1, ...techRow1].map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors group">
                                    {tech.icon}
                                    <span className="text-lg font-bold text-foreground/80 group-hover:text-primary transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Backend & Cloud (Reverse) */}
                    <div className="flex w-full overflow-hidden">
                        <div className="flex gap-12 animate-marquee-reverse whitespace-nowrap py-4 items-center">
                            {[...techRow2, ...techRow2].map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-colors group">
                                    {tech.icon}
                                    <span className="text-lg font-bold text-foreground/80 group-hover:text-blue-500 transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gradient Fades for Smooth Edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Prêt à transformer votre vision en réalité ?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                        Contactez nos experts pour une consultation gratuite et découvrez comment nous pouvons propulser votre croissance technologique.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="gap-2 text-primary hover:text-primary/90 h-14 px-8 text-lg font-bold" asChild>
                            <Link href="/#contact">
                                Lancer Mon Projet <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    )
}
