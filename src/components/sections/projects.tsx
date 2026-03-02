"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const projects = [
  {
    title: "Fontaines VTC",
    description:
      "Entreprise de transport privé (réservations en ligne). Optimisation SEO + CTA : meilleure visibilité locale et plus de conversions sur la prise de réservation.",
    tags: ["SEO", "Optimisation CTA", "Design", "Copywriting", "Transport"],
    testimonial: {
      text: "SYSTM.RE m'a accompagné dans mon projet digital, entreprise très sérieuse et professionnelle, je la recommande !",
      author: "Mario C.",
      role: "Dirigeant, Fontaines VTC",
    },
    gradient: "from-orange/20 to-dark",
  },
  {
    title: "Island Flavors",
    description:
      "Restaurant local avec commande en ligne. Design premium et tunnel de conversion optimisé pour maximiser les commandes depuis mobile.",
    tags: ["E-commerce", "Design", "Mobile First", "Restauration"],
    testimonial: {
      text: "Un travail exceptionnel, notre chiffre d'affaires en ligne a doublé en 3 mois !",
      author: "Sophie L.",
      role: "Gérante, Island Flavors",
    },
    gradient: "from-cream/10 to-dark",
  },
  {
    title: "ReunionTech",
    description:
      "SaaS de gestion pour entreprises réunionnaises. Du branding au lancement, une application complète prête à scaler.",
    tags: ["SaaS", "Branding", "Application Web", "Dashboard"],
    testimonial: {
      text: "De l'idée au produit fini, l'équipe a su transformer notre vision en réalité.",
      author: "Thomas R.",
      role: "CEO, ReunionTech",
    },
    gradient: "from-orange/10 to-dark",
  },
];

export function Projects() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (nextIndex: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setTransitioning(false);
    }, 200);
  };

  const prev = () => goTo(current === 0 ? projects.length - 1 : current - 1);
  const next = () => goTo(current === projects.length - 1 ? 0 : current + 1);

  const project = projects[current];

  return (
    <section id="projets" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Nos Proje<span className="text-orange">ts</span>
          </h2>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Une sélection de projets où design, code et stratégie se
            rencontrent.
          </p>
        </AnimateOnScroll>

        {/* Project showcase */}
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-center transition-opacity duration-200",
            transitioning ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Project visual */}
          <div
            className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} border border-cream/5 overflow-hidden flex items-center justify-center`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,115,49,0.08),transparent_70%)]" />
            <div className="relative z-10 text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-orange/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-orange">
                  {project.title.charAt(0)}
                </span>
              </div>
              <p className="text-xl font-semibold text-cream">
                {project.title}
              </p>
            </div>
          </div>

          {/* Project info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-cream">{project.title}</h3>
            <p className="text-cream/60 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <Button variant="outline">
              Voir le projet
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Testimonial */}
            <div className="mt-8 p-6 rounded-xl bg-cream/5 border border-cream/5">
              <Quote className="w-5 h-5 text-orange/40 mb-3" />
              <p className="text-cream/70 text-sm italic leading-relaxed mb-4">
                {project.testimonial.text}
              </p>
              <div>
                <p className="text-sm font-semibold text-cream">
                  {project.testimonial.author}
                </p>
                <p className="text-xs text-cream/40">
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:border-orange hover:text-orange transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-orange"
                    : "w-4 bg-cream/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:border-orange hover:text-orange transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
