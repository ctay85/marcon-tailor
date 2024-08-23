import { Image } from "@/components/Image";
import image1 from "~/public/images/more-quality-1.jpg"
import image2 from "~/public/images/more-quality-2.jpg"
import image3 from "~/public/images/more-quality-3.jpg"

export default function MoreQualitySection() {
  return (
    <div className="flex flex-col gap-2 w-full md:mb-10 md:px-8 lg:px-[10vw] lg:gap-4 xl:px-[15vw] 2xl:px-[20vw]"

    >
      <video autoPlay={true}
        playsInline
        muted={true}
        className="object-cover"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="225">
        <source src={"/videos/Tailor_00019.mp4"} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="grid grid-cols-[55%_45%] gap-2 lg:grid-cols-2 lg:gap-4">
          <video autoPlay={true}
            playsInline
            muted={true}
            className="object-cover size-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="425"
          >
            <source src={"/videos/Tailor_00020.mp4"} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <Image
            src={image1}
            alt="Marcon - Tailor Lobby Elevators"
            className="object-cover size-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="625"
          />
        </div>
        <div className="grid grid-cols-[45%_55%] gap-2 lg:grid-cols-2 lg:gap-4">
          <Image
            src={image2}
            alt="Marcon - Tailor Entrace Hall"
            className="object-cover size-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="725"
          />
          <Image
            src={image3}
            alt="Marcon - Party Area"
            className="object-cover size-full"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="825"
          />
        </div>
      </div>
    </div>
  )
}