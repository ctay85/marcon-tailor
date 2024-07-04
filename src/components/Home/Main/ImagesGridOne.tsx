import { Image } from "@/components/Image";
import image1 from "~/public/images/image1.png";
import image2 from "~/public/images/image2.png";
import image3 from "~/public/images/image3.png";
import image4 from "~/public/images/image4.png";
import image5 from "~/public/images/image5.png";
import image6 from "~/public/images/image6.png";

export function ImagesGridOne() {
  return (
    <div className="w-full mb-12 md:mb-28 p-4 md:p-8">
      <div className="hidden sm:flex gap-4">
        <div className="w-2/3 relative flex flex-col">
          <Image
            src={image1}
            alt="Image 1"
            layout="responsive"
            width={500}
            height={0}
            className="object-cover h-full-important"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="flex-1 relative">
            <Image
              src={image2}
              alt="Image 2"
              layout="responsive"
              width={250}
              height={250}
              className="object-cover"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            />
          </div>
          <div className="flex-1 relative">
            <Image
              src={image3}
              alt="Image 3"
              layout="responsive"
              width={250}
              height={250}
              className="object-cover"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            />
          </div>
          <div className="flex-1 relative">
            <Image
              src={image4}
              alt="Image 4"
              layout="responsive"
              width={250}
              height={250}
              className="object-cover"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex gap-4 mt-4">
        <div className="w-1/3 relative flex flex-col">
          <Image
            src={image5}
            alt="Image 1"
            layout="responsive"
            width={500}
            height={750}
            className="object-cover"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          />
        </div>
        <div className="w-2/3 relative flex flex-col">
          <Image
            src={image6}
            alt="Image 1"
            layout="responsive"
            width={500}
            height={750}
            className="object-cover h-full-important"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
      </div>

      {/* Grid Mobile */}
      <div className="sm:hidden flex w-full mb-1">
        <div className="w-full relative">
          <Image
            src={image1}
            alt="Image 1"
            layout="responsive"
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
            layout="responsive"
            width={500}
            height={750}
            className="object-cover"
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src={image3}
            alt="Image 3"
            layout="responsive"
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
            layout="responsive"
            width={500}
            height={100}
            className="object-cover min-h-full "
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src={image5}
            alt="Image 5"
            layout="responsive"
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
            layout="responsive"
            width={500}
            height={750}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
