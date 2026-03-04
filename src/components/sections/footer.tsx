"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { CAL_URL, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-cream/5">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-orange/10 via-dark to-orange/10">
        <AnimateOnScroll animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Prêt à lancer votre proje<span className="text-orange">t ?</span>
          </h2>
          <p className="text-cream/50 mb-8 max-w-md mx-auto">
            Réservez un appel de découverte gratuit et discutons de votre
            projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_click", { label: "footer_cal" })}>
              <Button size="lg">
                <Phone className="w-5 h-5" />
                Réserver un appel
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_click", { label: "footer_whatsapp" })}>
              <Button size="lg" variant="outline">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Footer bottom */}
      <AnimateOnScroll animation="fade-in" delay={200}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="SYSTM.RE" width={56} height={56} className="w-14 h-14" />
                <span className="text-xl font-bold text-cream">
                  SYSTM<span className="text-orange">.RE</span>
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-6">
                {["Projets", "Services", "Avis", "FAQ"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-cream/40 hover:text-orange transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-cream/30">
              <p>
                &copy; {new Date().getFullYear()} SYSTM.RE — Tous droits réservés
              </p>
              <Link
                href="/mentions-legales"
                className="hover:text-orange transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
