"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroAnimated({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={cn(mounted && "hero-mounted")}>
      {children}
    </div>
  );
}
