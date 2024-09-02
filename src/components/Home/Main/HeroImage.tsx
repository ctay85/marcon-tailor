import { Image } from "@/components/Image";
import image1 from "~/public/images/TailorDrone.png"

export function HeroImage() {
  return (
    <div className="w-full md:mb-10">
      <Image
        src={image1}
        alt="Marcon - Tailor Building"
        className="object-cover object-bottom size-full md:max-h-[1000px] 3xl:max-h-[1200px] 4xl:max-h-[2000px] 4xl:object-none"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
        unoptimized
      />
    </div>
  );
}
