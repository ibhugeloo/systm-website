"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Loader2 } from "lucide-react";

export function CalEmbed() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#F77331" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "linkReady",
        callback: () => setLoaded(true),
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
          <div className="relative rounded-2xl border border-cream/10 bg-cream/5 overflow-hidden">
            {!loaded && (
              <div className="flex items-center justify-center gap-3 py-24 text-cream/40">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm">Chargement du calendrier...</span>
              </div>
            )}
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
