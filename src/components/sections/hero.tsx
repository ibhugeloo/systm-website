import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, MapPin, Briefcase } from "lucide-react";
import { HeroAnimated } from "@/components/sections/hero-animated";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-18 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[120px] anim-glow-pulse" />

      <HeroAnimated>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Headline */}
          <h1 className="anim-hero text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-cream">Vous avez l&apos;idée,</span>
            <br />
            <span className="text-orange">on s&apos;occupe du reste</span>
          </h1>

          {/* Subtitle */}
          <p className="anim-hero anim-delay-200 text-lg sm:text-xl text-cream/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Branding, landing pages et applications : nous accompagnons
            entrepreneurs et entreprises du concept au lancement.
          </p>

          {/* CTA Buttons */}
          <div className="anim-hero anim-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://cal.com/idriss-bhugeloo-qixrtx/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="default">
                Réserver un appel gratuit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://wa.me/262693473095" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="anim-hero anim-delay-500 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-orange" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-cream">+10</p>
                <p className="text-sm text-cream/50">Projets réalisés</p>
              </div>
            </div>
            <div className="w-px h-10 bg-cream/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-orange" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-cream">La Réunion</p>
                <p className="text-sm text-cream/50">Basés sur l&apos;île</p>
              </div>
            </div>
          </div>
        </div>
      </HeroAnimated>
    </section>
  );
}
