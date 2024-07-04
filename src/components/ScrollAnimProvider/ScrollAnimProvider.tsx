"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

interface Props {
  children: React.ReactNode;
}

export function ScrollAnimProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      disable:
        /bot|crawler|spider|crawling/i.test(navigator.userAgent) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        offset: 0
    });
  }, []);

  return children;
}
