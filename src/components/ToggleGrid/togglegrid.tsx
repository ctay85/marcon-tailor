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
    <div className="flex-col md:flex justify-between items-center sm:mb-28 mt-14 sm:mt-6 mb-20 text-[13px] p-4 md:p-8">
      <div
        className="w-full gap-20 flex pl-1 md:pl-12"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
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
            <span className="absolute left-0 right-0 bottom-0 h-3 w-24 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.5rem]" />
            <span className="absolute left-0 right-0 bottom-0 h-3 w-[90px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.5rem]" />
          </label>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
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
            <span className="absolute left-0 right-0 bottom-0 h-3 w-24 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.5rem]" />
            <span className="absolute left-0 right-0 bottom-0 h-3 w-[90px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.5rem]" />
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
          href={"#"}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="cursor-pointer relative z-10 group"
        >
          <span className="relative z-20 text-primary">FLOORPLANS</span>
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[100px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[94px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
        </Link>
        <Link
          href={"#"}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
          className="cursor-pointer relative z-10 group"
        >
          <span className="relative z-20 text-primary">FEATURES</span>
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[80px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
          <span className="absolute left-0 right-0 bottom-0 h-3 w-[74px] bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.6rem]" />
        </Link>
        <Link
          href={"#"}
          data-aos="fade-up"
          data-aos-duration="1200"
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
