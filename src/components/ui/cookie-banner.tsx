"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "systm_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:max-w-sm">
      <div className="rounded-2xl border border-cream/10 bg-dark/95 backdrop-blur-xl p-5 shadow-lg">
        <p className="text-cream/70 text-sm leading-relaxed mb-4">
          Ce site utilise des cookies analytiques pour améliorer votre
          expérience.
        </p>
        <div className="flex gap-3">
          <Button size="sm" variant="default" onClick={accept} className="cursor-pointer">
            Accepter
          </Button>
          <Button size="sm" variant="ghost" onClick={decline} className="cursor-pointer">
            Refuser
          </Button>
        </div>
      </div>
    </div>
  );
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}
