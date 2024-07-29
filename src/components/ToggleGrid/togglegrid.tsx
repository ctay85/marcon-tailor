"use client";
import { useState } from "react";
import { PenthousesGrid } from "./penthousesGrid";
import { TownhomesGrid } from "./townhomesGrid";
import Link from "next/link";

type Option = "townhomes" | "penthouses";

export function Togglegrid() {
  const [option, setOption] = useState<Option>("townhomes");

  const handleOptionChange = (newOption: Option) => {
    setOption(newOption);
  };
  const renderGrid = () => {
    if (option == "penthouses") {
      return <PenthousesGrid />;
    } else if (option == "townhomes") {
      return <TownhomesGrid />;
    }
    return null;
  };
  return (
    <div className="text-[13px] px-4 justify-between items-center flex-col md:flex md:mb-10  md:px-8 lg:px-[10vw] xl:px-[15vw] 2xl:px-[20vw]">
      <div
        className="w-full gap-20 flex"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          <input
            type="radio"
            className="hidden"
            id="townhomes"
            name="option"
            value="townhomes"
            checked={option === "townhomes"}
            onChange={() => handleOptionChange("townhomes")}
          />
          <label
            htmlFor="townhomes"
            className="cursor-pointer relative z-10 group"
          >
            <span className="relative z-20 text-primary">TOWNHOMES</span>
            <span className={`absolute left-0 right-0 bottom-0 h-3 w-24 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform group-hover:scale-x-100 origin-left top-[0.5rem] ${option === "townhomes" ? "scale-x-100" : "scale-x-0"}`} />
            <span className={`absolute left-0 right-0 bottom-0 h-3 w-[90px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform group-hover:scale-x-100 origin-left top-[0.5rem] ${option === "townhomes" ? "scale-x-100" : "scale-x-0"}`} />
          </label>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="400"
        >
          <input
            type="radio"
            id="penthouses"
            name="option"
            value="penthouses"
            className="hidden"
            checked={option === "penthouses"}
            onChange={() => handleOptionChange("penthouses")}
          />
          <label
            htmlFor="penthouses"
            className="cursor-pointer relative z-10 group"
          >
            <span className="relative z-20 text-primary">PENTHOUSES</span>
            <span className={`absolute left-0 right-0 bottom-0 h-3 w-24 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform group-hover:scale-x-100 origin-left top-[0.5rem] ${option === "penthouses" ? "scale-x-100" : "scale-x-0"}`} />
            <span className={`absolute left-0 right-0 bottom-0 h-3 w-[90px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform group-hover:scale-x-100 origin-left top-[0.5rem] ${option === "penthouses" ? "scale-x-100" : "scale-x-0"}`} />
          </label>
        </div>
      </div>
      <div
        className="w-full mt-10 h-fit"
      >
        {renderGrid()}
      </div>
      <div
        className="w-full gap-12 md:gap-20 flex pl-1 md:pl-12 mt-10"
      >
        <Link
          href={`/files/tailor-${option}_floorplans.pdf`}
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
          className="cursor-pointer relative z-10 group"
        >
          <span className="relative z-20 text-primary">FLOORPLANS</span>
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[100px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[94px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
        </Link>
        <Link
          href={`/files/tailor-${option}_features.pdf`}
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="400"
          className="cursor-pointer relative z-10 group"
        >
          <span className="relative z-20 text-primary">FEATURES</span>
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[80px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[74px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
        </Link>
        <Link
          href={`/files/tailor-${option}_brochure.pdf`}
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
          className="cursor-pointer relative z-10 group"
        >
          <span className="relative z-20 text-primary">BROCHURE</span>
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[86px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[80px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
        </Link>
      </div>
    </div>
  );
}
