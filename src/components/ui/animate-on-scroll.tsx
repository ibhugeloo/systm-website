"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay,
  className,
  threshold,
  rootMargin,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={cn(
        `anim-${animation}`,
        isVisible && "is-visible",
        delay && `anim-delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
}
