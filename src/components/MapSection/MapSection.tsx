import React from "react";

import Artboard from "~/public/images/MapSection/Artboard.svg";
import ArtboardDescription from "~/public/images/MapSection/Artboard-description.svg";
import ArtboardFull from "~/public/images/MapSection/Artboard-full.svg";
import { Image } from "../Image";

export function MapSection() {
  return (
    <div
      data-aos="fade"
      data-aos-duration="1200"
      data-aos-delay="200"
      className="h-fit w-full flex mb-12"
    >
      <div className="flex lg:hidden h-full w-full flex-col overflow-hidden">
        <Image
          alt="Artboard"
          src={Artboard}
          className="h-auto w-full"
        />
        <Image
          alt="Artboard Description"
          src={ArtboardDescription}
          className="h-auto w-full"
        />
      </div>
      <div className="hidden lg:flex h-full w-full flex-row overflow-hidden">
        <Image alt="Artboard" src={ArtboardFull} className="h-auto w-full" />
      </div>
    </div>
  );
}
