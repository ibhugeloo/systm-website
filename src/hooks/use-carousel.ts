"use client";

import { useState, useRef, useCallback } from "react";
import type { TouchEvent, KeyboardEvent } from "react";

interface UseCarouselReturn {
  current: number;
  transitioning: boolean;
  prev: () => void;
  next: () => void;
  touchHandlers: {
    onTouchStart: (e: TouchEvent) => void;
    onTouchEnd: (e: TouchEvent) => void;
  };
  keyboardHandler: (e: KeyboardEvent) => void;
}

export function useCarousel(itemCount: number): UseCarouselReturn {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef(0);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(nextIndex);
        setTransitioning(false);
      }, 200);
    },
    [transitioning]
  );

  const prev = useCallback(
    () => goTo(current === 0 ? itemCount - 1 : current - 1),
    [current, itemCount, goTo]
  );

  const next = useCallback(
    () => goTo(current === itemCount - 1 ? 0 : current + 1),
    [current, itemCount, goTo]
  );

  const touchHandlers = {
    onTouchStart: (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e: TouchEvent) => {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) > 50) delta < 0 ? next() : prev();
    },
  };

  const keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return { current, transitioning, prev, next, touchHandlers, keyboardHandler };
}
