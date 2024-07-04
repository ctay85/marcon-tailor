"use client";

import AOS from "aos";
import ImageComponent, { ImageProps } from "next/image";

export function Image(props: ImageProps) {
  return (
    <ImageComponent
      {...props}
      onLoad={() => AOS.refresh()}
    />
  )
}