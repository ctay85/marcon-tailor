import image7 from "~/public/images/image7.png";

import { Header } from "@/components/Header";
import { ImagesGridOne } from "@/components/Home/Main";
import { Title } from "@/components/Home/Title";
import { Togglegrid } from "@/components/ToggleGrid";
import { MapSection } from "@/components/MapSection";
import { RegisterForm } from "@/components/RegisterForm";
import { Intro } from "@/components/Intro";
import { Image } from "@/components/Image";

export default function Home() {
  return (
    <>
      <Intro />
      <main
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <Header />
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Title
            title="More Thought."
            description="Designed by Shift Architecture, Tailor is a sleek, twenty-seven storey tower with a sculpted base."
          />
        </div>
        <ImagesGridOne />
        <Title
          title="More Function."
          description="The lobby at Tailor features forty-foot ceilings to accommodate “Wind Veil”, an environmental sculpture created by artist Catherine Widgery."
        />
        <div className="w-full px-4 md:mb-10 md:px-8 lg:px-[10vw] xl:px-[15vw] 2xl:px-[20vw]">
          <Image
            src={image7}
            alt="Image 1"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            quality={100}
            className="object-cover size-full"
          />
        </div>
        <Title
          title="More Home."
          description="The interiors were planned to maximize space and finished to stand the test of time."
        />
        <Togglegrid />
        <Title
          title="Celebrate More."
          description="The homes at Tailor offer more than Brentwood has ever seen, built for life by Marcon."
        />
        <MapSection />
        <RegisterForm />
      </main>
    </>
  );
}
