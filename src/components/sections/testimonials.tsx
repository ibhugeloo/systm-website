"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "SYSTM.RE a su comprendre mes besoins et créer un site à l'image de mon activité. Résultat professionnel et livraison rapide, je recommande !",
    author: "Hugo M.",
    role: "Fondateur, Goal Cleaning",
    rating: 5,
  },
  {
    text: "SYSTM.RE a transformé mon idée en une vraie application fonctionnelle et design. L'équipe a parfaitement compris l'univers gaming, résultat au top !",
    author: "Jeremy V.",
    role: "Fondateur, LootLog",
    rating: 5,
  },
  {
    text: "SYSTM.RE a conçu un portfolio qui me ressemble parfaitement. Le design est épuré, moderne et reflète exactement l'image que je voulais renvoyer. Un vrai plus pour ma crédibilité.",
    author: "Idriss B.",
    role: "Entrepreneur",
    rating: 5,
  },
];

export function Testimonials() {
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

  const prev = () => goTo(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => goTo(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <section id="avis" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <AnimateOnScroll animation="fade-up">
          <p className="text-center text-sm text-cream/40 uppercase tracking-widest mb-4">
            Le studio Indépendant
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto mb-4 leading-tight">
            Chez SYSTM.RE on a le goût du travail bien fait, on itère vite tout en
            ayant une attention particulière au travail délivré
          </h2>
        </AnimateOnScroll>

        <div className="mt-20">
          <AnimateOnScroll animation="fade-up" delay={200}>
            <h3 className="text-2xl sm:text-4xl font-bold text-center mb-12">
              Ce qu&apos;en disent nos clien
              <span className="text-orange">ts</span>
            </h3>
          </AnimateOnScroll>

          {/* Testimonial card */}
          <AnimateOnScroll animation="scale-in" delay={300}>
            <div className="max-w-2xl mx-auto" role="region" aria-roledescription="carousel" aria-label="Témoignages clients">
              <div
                aria-live="polite"
                className={cn(
                  "rounded-2xl border border-cream/10 bg-cream/5 p-8 sm:p-10 transition-opacity duration-200",
                  transitioning ? "opacity-0" : "opacity-100"
                )}
              >
                <Quote className="w-8 h-8 text-orange/30 mb-4" />

                {/* Stars - animated on slide change */}
                <div key={current} className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange text-orange anim-star-pop"
                        style={{ animationDelay: `${i * 80}ms` }}
                      />
                    )
                  )}
                </div>

                <p className="text-cream/80 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                    <span className="text-orange font-bold">
                      {testimonials[current].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-cream">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-cream/40">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Avis précédent"
              className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:border-orange hover:text-orange transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-orange" : "w-4 bg-cream/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Avis suivant"
              className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:border-orange hover:text-orange transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
