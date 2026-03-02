"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#F77331" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="rendez-vous" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Réservez un appe<span className="text-orange">l</span>
          </h2>
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            30 minutes pour discuter de votre projet, gratuitement et sans
            engagement.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={200}>
          <div className="rounded-2xl border border-cream/10 bg-cream/5 overflow-hidden">
            <Cal
              namespace="30min"
              calLink="idriss-bhugeloo-qixrtx/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "dark" }}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
