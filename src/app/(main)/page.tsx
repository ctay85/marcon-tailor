import { Header } from "@/components/Header";
import { DroneBanner, HeroImage } from "@/components/Home/Main";
import { Title } from "@/components/Home/Title";
import { Togglegrid } from "@/components/ToggleGrid";
import { RegisterForm } from "@/components/RegisterForm";
import { Intro } from "@/components/Intro";
import MoreQualitySection from "@/components/Home/Main/MoreQualitySection";

export default function Home() {
  return (
    <>
      <Intro />
      <main
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="225"
      >
        <Header />
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="225"
        >
          <Title
            title="More Thought."
            description="Designed by Shift Architecture, Tailor is a boutique, twenty-seven storey tower with a sculpted base and thoughtful residential program."
          />
        </div>
        <HeroImage />
        <Title
          title="More Quality."
          description="The lobby features high-end finishes and forty-foot ceilings to accommodate “Wind Veil”, an environmental sculpture by Catherine Widgery."
        />
        <MoreQualitySection />
        <Title
          title="More Home."
          description="The interiors were planned to maximize space and finished to stand the test of time."
        />
        <Togglegrid />
        <RegisterForm />
        <DroneBanner />
      </main>
    </>
  );
}
