"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Minus,
  Globe,
  Rocket,
  Layers,
  Search,
  LayoutGrid,
  PenTool,
  Palette,
  Paintbrush,
  Code,
  TrendingUp,
  ClipboardList,
  BarChart3,
  Monitor,
  Sparkles,
  Target,
  Layout,
  Shield,
  Database,
  Cloud,
  BarChart,
  Settings,
  CreditCard,
  Mail,
  GitBranch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Landing Page",
    subtitle: "Une page premium conçue pour convertir.",
    icon: Globe,
    image: "/landing-page.gif",
    deliverables: ["Landing page live", "Prêt à convertir"],
    gradient: "from-orange/10 via-transparent to-transparent",
    pourQui: [
      "Vous avez une offre claire et vous voulez plus de demandes",
      "Vous lancez un produit/service et vous voulez tester un angle",
      "Vous avez du trafic mais la page ne convertit pas",
    ],
    inclus: [
      { icon: Search, text: "Analyse (offre, USP, ICP, objections, preuves, concurent)" },
      { icon: LayoutGrid, text: "Architecture de page (sections + parcours)" },
      { icon: PenTool, text: "Copywriting structurel (hooks, preuves, CTA)" },
      { icon: Palette, text: "Identité Visuelle" },
      { icon: Paintbrush, text: "Design UI premium (Figma) - Retours illimités jusqu'à satisfaction" },
      { icon: Code, text: "Intégration front (perf + responsive) : Code sur mesure ou No-Code" },
      { icon: TrendingUp, text: "Optimisation SEO" },
      { icon: ClipboardList, text: "Formulaire (ou Calendly)" },
      { icon: BarChart3, text: "Tracking : Google Analytics" },
      { icon: Monitor, text: "Mise en ligne + QA (mobile/tablet/desktop)" },
      { icon: Sparkles, text: "Animations & Micro-interactions" },
    ],
    delai: "7–10 jours",
  },
  {
    title: "Sprint : MVP",
    subtitle: "Valider son produit en production.",
    icon: Rocket,
    image: "/mvp.gif",
    deliverables: ["MVP en production", "Prêt à itérer"],
    gradient: "from-cream/5 via-transparent to-transparent",
    pourQui: [
      "Vous avez une idée et vous voulez valider sans brûler 6 mois",
      "Vous avez besoin d'un prototype \"sérieux\" en production",
      "Vous devez montrer un produit à des partenaires / early users",
    ],
    inclus: [
      { icon: Globe, text: "Landing Page comprise" },
      { icon: Target, text: "Atelier de cadrage (scope = 1 cœur de valeur)" },
      { icon: Layout, text: "UI/UX sur Figma (parcours principal)" },
      { icon: Code, text: "Dev full-stack (front + back)" },
      { icon: Shield, text: "Auth + gestion utilisateurs" },
      { icon: Database, text: "Base de données + CRUD essentiels" },
      { icon: Cloud, text: "Déploiement (staging + prod)" },
      { icon: BarChart, text: "Analytics basique / logs" },
    ],
    delai: "3–6 semaines (selon complexité)",
  },
  {
    title: "Launch : SaaS",
    subtitle: "Un produit complet, prêt à scaler.",
    icon: Layers,
    image: "/saas.gif",
    deliverables: ["SaaS en production", "Prêt à scaler"],
    gradient: "from-orange/5 via-transparent to-transparent",
    pourQui: [
      "Vous avez validé l'intérêt et vous voulez accélérer la mise sur le marché",
      "Vous voulez une base propre (sécurité, perf, maintenance) dès le départ",
      "Vous avez besoin de + fonctionnalités, paiements, rôles, admin, onboarding...",
    ],
    inclus: [
      { icon: Globe, text: "Landing Page comprise" },
      { icon: Target, text: "Cadrage produit (MVP++ : roadmap courte + priorités)" },
      { icon: Palette, text: "Design system + UI/UX (écrans clés + composants)" },
      { icon: Code, text: "Dev full-stack complet (front + back)" },
      { icon: Shield, text: "Auth + rôles/permissions" },
      { icon: Settings, text: "Back-office / admin (gestion users, contenu, etc.)" },
      { icon: CreditCard, text: "Paiements (Stripe) : checkout + abonnements" },
      { icon: Mail, text: "Emails transactionnels + onboarding" },
      { icon: GitBranch, text: "CI/CD + déploiement (staging + prod) + monitoring" },
    ],
    delai: "6–10+ semaines (selon complexité)",
  },
];

function InclusItem({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-3 py-1.5">
      <Icon className="w-4 h-4 text-cream/40 shrink-0 mt-0.5" />
      <span className="text-cream/70 text-sm">{text}</span>
    </div>
  );
}

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Nos Servi<span className="text-orange">ces</span>
          </h2>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Branding, sites & applications — de la landing au MVP, jusqu&apos;au
            SaaS prêt à être lancé.
          </p>
        </AnimateOnScroll>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {services.map((service, i) => {
            const Icon = service.icon;
            const delay = (200 + i * 100) as 200 | 300 | 400;
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll
                key={service.title}
                animation="fade-up"
                delay={delay}
              >
                <div className="group relative rounded-2xl border border-cream/5 bg-cream/5 p-8 hover:border-orange/20 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(247,115,49,0.15)]">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange anim-icon-float" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-cream mb-2">
                      {service.title}
                    </h3>
                    <p className="text-cream/50 text-sm mb-8">
                      {service.subtitle}
                    </p>

                    {/* Illustration */}
                    <div className="aspect-square rounded-xl border border-cream/5 mb-8 overflow-hidden bg-dark/60">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Deliverables */}
                    <p className="text-xs text-cream/40 mb-3 uppercase tracking-wider">
                      Livrables :
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.deliverables.map((d) => (
                        <Badge key={d} variant="orange">
                          {d}
                        </Badge>
                      ))}
                    </div>

                    {/* Toggle button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : i)
                      }
                      className="cursor-pointer"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                      {isOpen ? "Réduire" : "Détails"}
                    </Button>

                    {/* Expandable details */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-out",
                        isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="border-t border-cream/10 mt-6 pt-6">
                        {/* POUR QUI */}
                        <p className="text-orange text-xs font-bold uppercase tracking-wider mb-3">
                          Pour qui
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.pourQui.map((item) => (
                            <li
                              key={item}
                              className="text-cream/60 text-sm flex items-start gap-2"
                            >
                              <span className="text-cream/30 mt-0.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* INCLUS */}
                        <p className="text-orange text-xs font-bold uppercase tracking-wider mb-3">
                          Inclus
                        </p>
                        <div className="space-y-0.5 mb-6">
                          {service.inclus.map((item) => (
                            <InclusItem
                              key={item.text}
                              icon={item.icon}
                              text={item.text}
                            />
                          ))}
                        </div>

                        {/* DÉLAI */}
                        <div className="bg-cream/5 rounded-xl p-4">
                          <p className="text-cream/40 text-xs uppercase tracking-wider mb-1">
                            Délai
                          </p>
                          <p className="text-cream font-bold text-lg">
                            {service.delai}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
