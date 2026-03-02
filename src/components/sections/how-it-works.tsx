"use client";

import { useState } from "react";
import {
  Calendar,
  MessageSquare,
  Target,
  ClipboardCheck,
  DollarSign,
  Clock,
  LayoutDashboard,
  Users,
  CheckCircle,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    title: "Appel de Découverte",
    description:
      "On échange sur votre projet, vos objectifs et vos challenges. Nous vous proposons ensuite la stratégie la plus adaptée à vos besoins.",
    visual: {
      title: "DISCOVERY CALL",
      items: [
        { icon: Calendar, label: "Créneau réservé", value: "30 min" },
        { icon: MessageSquare, label: "Échange projet", value: "Objectifs & besoins" },
        { icon: Target, label: "Stratégie", value: "Recommandation sur-mesure" },
      ],
    },
  },
  {
    number: "2",
    title: "Proposition Commerciale",
    description:
      "Vous recevez une proposition détaillée avec le périmètre, le budget et le planning. Tout est clair, sans surprise.",
    visual: {
      title: "PROPOSAL",
      items: [
        { icon: ClipboardCheck, label: "Périmètre", value: "Scope détaillé" },
        { icon: DollarSign, label: "Budget", value: "Tarif transparent" },
        { icon: Clock, label: "Planning", value: "Délais précis" },
      ],
    },
  },
  {
    number: "3",
    title: "Lancement du Projet",
    description:
      "Une fois validé, on organise le kickoff. Vous accédez à votre espace Notion et le travail commence immédiatement.",
    visual: {
      title: "PROJECT KICKOFF",
      items: [
        { icon: LayoutDashboard, label: "Espace Notion", value: "Suivi en temps réel" },
        { icon: Users, label: "Équipe dédiée", value: "Contact direct" },
        { icon: CheckCircle, label: "Lancement", value: "Travail immédiat" },
      ],
    },
  },
];

const barWidthSets = [
  [72, 55, 88],
  [60, 80, 45],
  [85, 65, 75],
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual — changes based on activeStep */}
          <AnimateOnScroll animation="slide-left">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-cream/5 border border-cream/10 p-8 flex flex-col justify-center">
                {steps.map((step, stepIndex) => {
                  const barWidths = barWidthSets[stepIndex];
                  return (
                    <div
                      key={step.number}
                      className={cn(
                        "bg-cream rounded-2xl p-6 shadow-2xl transition-all duration-300 absolute inset-8",
                        activeStep === stepIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      )}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-orange/60" />
                        <div className="w-3 h-3 rounded-full bg-cream-dark" />
                      </div>
                      <p className="text-dark font-bold text-lg mb-6">
                        {step.visual.title}
                      </p>
                      {step.visual.items.map((item, i) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={item.label} className="mb-5 last:mb-0">
                            <div className="flex items-center gap-2 mb-1.5">
                              <ItemIcon className="w-3.5 h-3.5 text-dark/40" />
                              <p className="text-dark/60 text-sm">{item.label}</p>
                            </div>
                            <div className="h-2 bg-cream-dark rounded-full overflow-hidden">
                              <div
                                className={cn(
                                  "h-full bg-orange/30 rounded-full transition-all duration-500 ease-out",
                                  activeStep === stepIndex ? "scale-x-100" : "scale-x-0"
                                )}
                                style={{
                                  width: `${barWidths[i]}%`,
                                  transformOrigin: "left",
                                  transitionDelay: `${i * 150}ms`,
                                }}
                              />
                            </div>
                            <p className="text-dark/40 text-xs mt-1">{item.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Steps */}
          <div>
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Comment on fonctio<span className="text-orange">nne</span>
              </h2>
              <p className="text-cream/50 text-lg mb-12">
                Une approche simple en 3 étapes pour donner vie à votre projet.
              </p>
            </AnimateOnScroll>

            <div className="divide-y divide-cream/10">
              {steps.map((step, i) => {
                const isActive = activeStep === i;
                const delay = (200 + i * 200) as 200 | 400 | 600;
                return (
                  <AnimateOnScroll key={step.number} animation="fade-up" delay={delay}>
                    <button
                      onClick={() => setActiveStep(i)}
                      className={cn(
                        "relative text-left w-full cursor-pointer group/step py-8 pl-6 border-l-2 transition-all duration-300",
                        isActive
                          ? "border-l-orange"
                          : "border-l-cream/10 hover:border-l-orange/30"
                      )}
                    >
                      <h3
                        className={cn(
                          "text-lg font-bold mb-2 transition-colors duration-300",
                          isActive
                            ? "text-orange"
                            : "text-cream group-hover/step:text-orange/70"
                        )}
                      >
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-cream/50 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </button>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
