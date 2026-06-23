"use client";

import { useEffect, useState } from "react";

/**
 * Shared scroll-position hook. Returns true once the user has scrolled past
 * `threshold` pixels. Used to coordinate the fixed Navigation bar and the
 * standalone language toggle so they never render on top of each other.
 */
export function useScrolled(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
