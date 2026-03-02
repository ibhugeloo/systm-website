"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projets", href: "#projets" },
  { label: "Services", href: "#services" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-cream/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={56} height={56} className="w-14 h-14" />
            <span className="text-2xl font-bold text-cream tracking-tight">
              SYSTM<span className="text-orange">.RE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/70 hover:text-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://cal.com/idriss-bhugeloo-qixrtx/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="default">
                <Phone className="w-4 h-4" />
                Réserver un appel
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-cream"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu de navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu - animated */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn("pb-6 pt-2 border-t border-cream/5", isOpen && "anim-mobile-menu")}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-cream/70 hover:text-orange transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="https://cal.com/idriss-bhugeloo-qixrtx/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="default" className="w-full mt-2">
                  <Phone className="w-4 h-4" />
                  Réserver un appel
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
