import { Image } from "@/components/Image";
import image1 from "~/public/images/burnaby-drone.png"

export function DroneBanner() {
  return (
    <div className="w-full md:pt-14 md:mb-10">
      <Image
        src={image1}
        alt="Marcon - Tailor Building"
        className="object-cover object-bottom size-full md:max-h-[1000px]"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="350"
        quality={100}
      />
    </div>
  );
}
