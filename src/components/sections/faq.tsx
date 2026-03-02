"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const faqs = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Nous réalisons des landing pages premium, des MVPs d'applications web, du branding complet et des SaaS prêts à scaler. Chaque projet est sur-mesure, adapté à vos objectifs business.",
  },
  {
    question: "Combien de temps prend un projet ?",
    answer:
      "Une landing page est livrée en 1 à 2 semaines. Un MVP prend entre 4 et 8 semaines. Un SaaS complet entre 2 et 4 mois selon la complexité. Nous vous donnons un planning précis dès la proposition commerciale.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous travaillons avec les technologies les plus modernes : Next.js, React, TypeScript, Tailwind CSS, Supabase, et d'autres selon les besoins du projet. Toujours optimisé pour la performance et le SEO.",
  },
  {
    question: "Travaillez-vous uniquement à La Réunion ?",
    answer:
      "Nous sommes basés à La Réunion mais travaillons avec des clients dans toute la France et à l'international. Tout se fait en remote avec des outils de collaboration modernes.",
  },
  {
    question: "Comment se passe le suivi du projet ?",
    answer:
      "Chaque client a accès à un espace Notion dédié avec le suivi des tâches, les livrables et un canal de communication direct. On fait des points réguliers pour s'assurer que tout avance bien.",
  },
  {
    question: "Quel est le tarif d'une landing page ?",
    answer:
      "Nos tarifs varient selon la complexité du projet. Réservez un appel de découverte gratuit pour recevoir une proposition détaillée et transparente, sans engagement.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-cream/5 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <span className="text-base sm:text-lg font-medium text-cream group-hover:text-orange transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-cream/40 shrink-0 transition-transform duration-300",
            isOpen && "rotate-180 text-orange"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p
          className={cn(
            "text-cream/50 text-sm leading-relaxed transition-all duration-300",
            isOpen
              ? "opacity-100 translate-y-0 delay-100"
              : "opacity-0 -translate-y-1"
          )}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            F.A.<span className="text-orange">Q</span>
          </h2>
          <p className="text-cream/50 text-lg">
            Les réponses aux questions les plus fréquentes.
          </p>
        </AnimateOnScroll>

        {/* FAQ items */}
        <AnimateOnScroll animation="scale-in" delay={200}>
          <div className="rounded-2xl border border-cream/5 bg-cream/5 p-6 sm:p-8">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
