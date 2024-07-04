import React from "react";
import Image from "next/image";

import Artboard from "~/public/images/MapSection/Artboard.svg";
import ArtboardDescription from "~/public/images/MapSection/Artboard-description.svg";
import ArtboardFull from "~/public/images/MapSection/Artboard-full.svg";

export function MapSection() {
  return (
    <div
      className="h-fit w-full flex mb-12"
    >
      <div className="flex md:hidden h-full w-full flex-col overflow-hidden">
        <Image
          alt="Artboard"
          src={Artboard}
          className="h-auto w-full transform scale-[1.4] ml-[11%]"
        />
        <Image
          alt="Artboard Description"
          src={ArtboardDescription}
          className="h-auto w-full mt-[20%]"
        />
      </div>
      <div className="hidden md:flex h-full w-full flex-row overflow-hidden">
        <Image alt="Artboard" src={ArtboardFull} className="h-auto w-full" />
      </div>
    </div>
  );
}
