"use client";

import { useRef } from "react"
import Link from "next/link";
import { X } from "@phosphor-icons/react/dist/ssr";

import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";

interface Props {
  isOpen?: boolean;
  onClosePopup?: () => void;
}

export function Popup({ isOpen = false, onClosePopup }: Props) {
  const popupRef = useRef<HTMLDivElement>(null);
  const popupClassname = isOpen ? "opacity-100" : "opacity-0 pointer-events-none";

  useClickOutside(popupRef, () => onClosePopup?.());

  return (
    <div data-popup-open={isOpen} className={cn("fixed top-0 left-0 w-screen h-screen bg-[#041c2ae6] z-50 transition-opacity duration-500 flex justify-center items-center", popupClassname)}>
      <div ref={popupRef} className="bg-white w-full flex justify-center p-4 pt-12 relative text-[#00506a] md:max-w-[600px] md:py-16 md:px-8">
        <button className="absolute top-0 -translate-y-5 bg-white p-2 rounded-full shadow-lg" onClick={onClosePopup}><X size={24} color="#00506a" /></button>

        <div className="flex flex-col justify-center items-center text-center gap-8 font-GothamBook text-[17.5px]">
          <span className="font-americana-bold text-[2rem] md:text-[2.6rem] md:mb-4">
            8.8% Purchaser Incentive
            <br />
            2.5% Total Deposit
          </span>

          <p>With tower homes sold out, only a curated selection of Penthouse Residences and Townhomes remain.</p>
          <p>For a limited time, you can secure a coveted home at Tailor with a 8.8% purchaser incentive and 2.5% total deposit.</p>
          <p>
            Connect with one of our in-house
            <br />
            Marcon Advisors to learn more!
          </p>

          <Link href="/book-appointment" onClick={onClosePopup} className="flex items-center uppercase bg-[#00506a] text-white text-[0.7rem] h-[50px] px-16">Book Appointment</Link>
        </div>
      </div>
    </div>
  )
}