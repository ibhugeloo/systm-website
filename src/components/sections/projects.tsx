"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { useCarousel } from "@/hooks/use-carousel";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
} from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  testimonial: Testimonial | null;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Goal Cleaning",
    description:
      "Entreprise de lavage automobile à domicile (réservations en ligne). Création du site vitrine + système de réservation : meilleure visibilité locale et plus de conversions sur la prise de rendez-vous.",
    tags: ["SEO", "Design", "Réservation en ligne", "Copywriting", "Automobile"],
    url: "https://goal-cleaning.labkreol.re",
    testimonial: {
      text: "SYSTM.RE a su comprendre mes besoins et créer un site à l'image de mon activité. Résultat professionnel et livraison rapide, je recommande !",
      author: "Hugo M.",
      role: "Fondateur, Goal Cleaning",
    },
    gradient: "from-orange/20 to-dark",
  },
  {
    title: "LootLog",
    description:
      "Entreprise de suivi de dépenses gaming (application web). Conception UI/UX + développement full-stack : une interface intuitive pour tracker ses achats in-game et maîtriser son budget gaming.",
    tags: ["Design", "UI/UX", "Développement", "Application Web", "Gaming"],
    url: "https://lootlog.labkreol.re",
    testimonial: {
      text: "SYSTM.RE a transformé mon idée en une vraie application fonctionnelle et design. L'équipe a parfaitement compris l'univers gaming, résultat au top !",
      author: "Jeremy V.",
      role: "Fondateur, LootLog",
    },
    gradient: "from-cream/10 to-dark",
  },
  {
    title: "Garage OS Autos",
    description:
      "Garage automobile multimarques basé à Saint-Denis (vitrine en ligne). Création du site vitrine + référencement local : meilleure visibilité sur Saint-Denis et plus de demandes de devis en ligne.",
    tags: ["SEO", "Design", "Site Vitrine", "Copywriting", "Automobile"],
    url: "https://garage-os-autos.labkreol.re",
    testimonial: null,
    gradient: "from-orange/10 to-dark",
  },
  {
    title: "Idriss Bhugeloo",
    description:
      "Portfolio personnel d'un entrepreneur tech basé à La Réunion. Conception et développement d'un site vitrine moderne : une identité digitale forte pour présenter ses projets et compétences.",
    tags: ["Design", "UI/UX", "Développement", "Portfolio", "Branding"],
    url: "https://idriss-bhugeloo.labkreol.re",
    testimonial: {
      text: "SYSTM.RE a conçu un portfolio qui me ressemble parfaitement. Le design est épuré, moderne et reflète exactement l'image que je voulais renvoyer. Un vrai plus pour ma crédibilité.",
      author: "Idriss B.",
      role: "Entrepreneur",
    },
    gradient: "from-cream/10 to-dark",
  },
];

export function Projects() {
  const { current, transitioning, prev, next, touchHandlers, keyboardHandler } =
    useCarousel(projects.length);

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
          role="region"
          aria-roledescription="carousel"
          aria-label="Nos projets"
          aria-live="polite"
          tabIndex={0}
          onKeyDown={keyboardHandler}
          {...touchHandlers}
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-center transition-opacity duration-200",
            transitioning ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Project visual — scaled iframe preview */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] rounded-2xl border border-cream/10 overflow-hidden block bg-dark hover:border-orange/40 transition-colors"
          >
            <iframe
              src={project.url}
              title={`Aperçu — ${project.title}`}
              loading="lazy"
              className="absolute top-0 left-0 border-0 pointer-events-none origin-top-left"
              style={{ width: "250%", height: "250%", transform: "scale(0.4)" }}
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-dark/40 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-orange text-dark font-semibold px-5 py-2.5 rounded-full text-sm">
                Voir le site <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>

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

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              Voir le projet
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Testimonial */}
            {project.testimonial && (
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
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            aria-label="Projet précédent"
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
            aria-label="Projet suivant"
            className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:border-orange hover:text-orange transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
