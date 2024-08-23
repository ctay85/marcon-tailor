import { Image } from "@/components/Image";
import image1 from "~/public/images/TailorDrone.png"

export function HeroImage() {
  return (
    <div className="w-full md:mb-10">
      <Image
        src={image1}
        alt="Marcon - Tailor Building"
        className="object-cover object-bottom size-full md:max-h-[1000px]"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
      />
    </div>
  );
}
