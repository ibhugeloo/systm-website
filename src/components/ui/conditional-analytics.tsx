"use client";

import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const CONSENT_KEY = "systm_cookie_consent";

export function ConditionalAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsented(localStorage.getItem(CONSENT_KEY) === "accepted");
    };
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  if (!consented) return null;

  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
