import { Image } from "@/components/Image";
import image1 from "~/public/images/image1.png";
import image2 from "~/public/images/image2.png";
import image3 from "~/public/images/image3.png";
import image4 from "~/public/images/image4.png";
import image5 from "~/public/images/image5.png";
import image6 from "~/public/images/image6.png";

export function ImagesGridOne() {
  return (
    <div className="w-full md:mb-10 px-4 md:px-8 lg:px-[10vw] xl:px-[15vw] 2xl:px-[20vw]">
      <div className="hidden sm:flex gap-4">
        <div className="w-2/3 relative flex flex-col">
          <Image
            src={image1}
            alt="Marcon - Tailor Final Building"
            className="object-cover size-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="225"
            quality={100}
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="flex-1 relative">
            <Image
              src={image2}
              alt="Marcon - Tailor Lobby Entrance"
              className="object-cover size-full"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="500"
            />
          </div>
          <div className="flex-1 relative">
            <Image
              src={image3}
              alt="Marcon - Tailor Lobby Entrance (Side View)"
              className="object-cover size-full"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="225"
            />
          </div>
          <div className="flex-1 relative">
            <Image
              src={image4}
              alt="Marcon - Tailor Artwork Night"
              className="object-cover size-full"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="225"
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex gap-4 mt-4">
        <div className="w-1/3 relative flex flex-col">
          <Image
            src={image5}
            alt="Marcon - Tailor Outdoor Amenity"
            className="object-cover size-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="225"
          />
        </div>
        <div className="w-2/3 relative flex flex-col">
          <Image
            src={image6}
            alt="Marcon - Tailor Street View"
            className="object-cover size-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="500"
            quality={90}
          />
        </div>
      </div>

      {/* Grid Mobile */}
      <div className="sm:hidden flex w-full mb-1">
        <div className="w-full relative">
          <Image
            src={image1}
            alt="Image 1"
            width={500}
            height={750}
            className="object-cover"
          />
        </div>
      </div>
      <div className="sm:hidden flex w-full mb-1 gap-1">
        <div className="w-1/2 relative">
          <Image
            src={image2}
            alt="Image 2"
            width={500}
            height={750}
            className="object-cover"
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src={image3}
            alt="Image 3"
            width={500}
            height={750}
            className="object-cover"
          />
        </div>
      </div>
      <div className="sm:hidden flex w-full mb-1 gap-1">
        <div className="w-1/2 relative h-auto ">
          <Image
            src={image4}
            alt="Image 4"
            width={500}
            height={100}
            className="object-cover min-h-full "
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src={image5}
            alt="Image 5"
            width={500}
            height={0}
            className="object-cover h-full"
          />
        </div>
      </div>
      <div className="sm:hidden flex w-full">
        <div className="w-full relative">
          <Image
            src={image6}
            alt="Image 6"
            width={500}
            height={750}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
