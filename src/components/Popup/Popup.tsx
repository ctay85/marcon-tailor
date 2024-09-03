"use client";

import { useRef } from "react"
import Link from "next/link";

import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils";

import PopUpImage1 from "~/public/images/tailor-intro-1.png"
import PopUpImage2 from "~/public/images/tailor-intro-2.png"
import { Image } from "../Image";

interface Props {
  isOpen?: boolean;
  onClosePopup?: () => void;
}

const popupImages = [
  {
    image: PopUpImage1,
    collection: "Penthouse",
    startingValue: "$1,950,000"
  },
  {
    image: PopUpImage2,
    collection: "Townhome",
    startingValue: "$1,299,000"
  },
]

export function Popup({ isOpen = false, onClosePopup }: Props) {
  const popupRef = useRef<HTMLDivElement>(null);
  const popupClassname = isOpen ? "opacity-100" : "opacity-0 pointer-events-none";

  useClickOutside(popupRef, () => onClosePopup?.());

  return (
    <div data-popup-open={isOpen} className={cn("fixed top-0 left-0 w-screen h-screen bg-[#041c2ae6] z-50 transition-opacity duration-500 flex justify-center items-center", popupClassname)}>
      <div ref={popupRef} className="bg-tertiary shadow-sm w-full flex justify-center p-2 pt-6 md:p-4 md:pt-12 text-white md:max-w-[600px] md:py-8 md:px-10 border border-secondary/20">
        <div className="flex flex-col justify-center items-center text-center gap-3 md:gap-8 border-t border-white/50">
          <span className="font-GothamBook text-xxs pt-3 md:text-tiny md:pt-6 tracking-widest">
            FINAL RELEASE OF PENTHOUSES & TOWNHOMES
          </span>
          <p className="font-americana-bold text-lg md:text-2xl">Tour Our New Display Homes <br /> By Appointment Only</p>
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {popupImages.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 md:gap-6">
                <Image src={item.image} alt={`${item.collection} interior image`} className="size-[90%] md:size-full" />
                <div className="flex flex-col">
                  <p className="uppercase tracking-widest text-tiny md:text-xs">{item.collection} collection</p>
                  <p className="text-tiny">Starting at {item.startingValue}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-2 md:mt-4">
            <p className="text-base tracking-widest uppercase md:text-xl">5% GST included + 2.5% deposit</p>
            
          </div>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-0 justify-between w-full mt-4">
            <div className="flex flex-col text-tiny items-start">
              <p className="tracking-widest">SALES GALLERY</p>
              <p>
                2425 Alpha Ave, Burnaby, BC
              </p>
              <p>By Appointment Only</p>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col text-tiny items-start">
                <p>Jessica Zhang</p>
                <Link href={'tel:+17787988245'}>
                  <p>
                    T: 778.798.8245
                  </p>
                </Link>
                <Link href={'mailto:jzhang@marcon.ca'}>
                  <p>E: jzhang@marcon.ca</p>
                </Link>
              </div>
              <div className="flex flex-col text-tiny items-start">
                <p>Sarah Fuchs</p>
                <Link href={'tel:+17787921527'}>
                  <p>
                    T: 778.792.1527
                  </p>
                </Link>
                <Link href={'mailto:sfuchs@marcon.ca'}>
                  <p>E: sfuchs@marcon.ca</p>
                </Link>
              </div>
            </div>
          </div>
          <button type="button" onClick={onClosePopup} className="flex items-center uppercase bg-secondary/20 text-white text-tiny mt-1 px-12 py-4 tracking-widest hover:bg-secondary/50">Close</button>
        </div>
      </div>
    </div >
  )
}
