import TailorBrochure from "~/public/images/Download/Penthouse_Brochure.png"
import TailorFloorplans from "~/public/images/Download/Penthouse_Floorplans.png"
import TailorFeatures from "~/public/images/Download/Penthouse_Features.png"
import Image from "next/image"
import Link from "next/link"

const downloadItems = [
  {
    title: "Brochure",
    image: TailorBrochure,
    link: "https://cdnmarcon.sfo3.cdn.digitaloceanspaces.com/tailor/emails/36-townhomes-and-penthouses-thank-you/Tailor_PenthouseInformationPackage_FINALP.pdf",
    delay: 200,
  },
  {
    title: "Floorplans",
    image: TailorFloorplans,
    link: "/files/tailor-penthouses_floorplans.pdf",
    delay: 400,
  },
  {
    title: "Features",
    image: TailorFeatures,
    link: "/files/tailor-penthouses_features.pdf",
    delay: 600,
  }
]

export default function DownloadPenthouses() {
  return (
    <div className="pt-32 pb-7 md:pb-10 w-full flex flex-col">
      <h1
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="225"
        className="text-white text-2xl leading-[30px] md:text-3xl font-bold font-americana-bold"
      >
        Downloads.
      </h1>
      <div className="w-full pt-14 px-3 grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-10 lg:px-0">
        {downloadItems.map((item, index) => (
          <div
            className="flex flex-col gap-3 items-center"
            key={index}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay={item.delay}
          >
            <h1 className="uppercase text-xs text-white tracking-widest">{item.title}</h1>
            <Image src={item.image} alt={`${item.title} image`} className="size-full" unoptimized />
            <Link className="uppercase mt-3 bg-secondary/20 px-5 py-4 text-tiny text-white tracking-widest" href={item.link} target="_blank">Download</Link>
          </div>
        ))}
      </div>
    </div>
  )
}