"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";

import tailorIntro from "~/public/animations/tailor-intro.json";
import { cn } from "@/lib/utils";
import { Popup } from "../Popup";

export function Intro() {
  const animContainerRef = useRef<HTMLDivElement>(null);
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const sectionClassname = isIntroVisible ? "opacity-100" : "opacity-0 pointer-events-none"

  useEffect(() => {
    function hideIntro() {
      setIsIntroVisible(false);
      window.scrollTo(0, 0);

      setTimeout(() => setIsPopupOpen(true), 500)
    }

    const anim = Lottie.loadAnimation({
      container: animContainerRef.current as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: tailorIntro
    });

    anim?.addEventListener('complete', hideIntro);
    
    return () => {
      anim?.removeEventListener('complete', hideIntro);
      anim.destroy();
    }
  }, [])

  return (
    <>
      <section className={cn("fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center transition-opacity duration-500 bg-[#041C2A]", sectionClassname)}>
        <div ref={animContainerRef} data-intro-visible={isIntroVisible} />
      </section>
      <Popup isOpen={isPopupOpen} onClosePopup={() => setIsPopupOpen(false)} />
    </>
  )
}