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
    });

    // window.addEventListener('load', function() {
    //   // This is needed when we have a lot of content shift on the page.
    //   // This makes sures AOS use the correct element sizing to calculate
    //   // the animation anchor points, preventing animations from
    //   // playing to late.
    //   AOS.refresh();
    // });
  }, []);

  return children;
}
