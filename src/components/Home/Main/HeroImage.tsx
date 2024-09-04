'use client'
import { useState, useEffect } from 'react';
import { Image } from "@/components/Image";
import image1 from "~/public/images/TailorDrone.png";
import image2 from "~/public/images/TailorDroneMobile.png";

export function HeroImage() {
  const [imageSrc, setImageSrc] = useState(image1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateImage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
          setImageSrc(image2);
        } else {
          setImageSrc(image1);
        }
      };

      updateImage();
      window.addEventListener('resize', updateImage);

      return () => window.removeEventListener('resize', updateImage);
    }
  }, []);

  return (
    <div className="w-full md:mb-10">
      <Image
        src={imageSrc}
        alt="Marcon - Tailor Building"
        className="object-cover object-top w-full md:max-h-[1000px] 3xl:max-h-[1200px] 4xl:max-h-[2000px]"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
        unoptimized
      />
    </div>
  );
}
