import { Image } from "@/components/Image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="225"
      className="w-full h-full p-4 md:px-8 md:py-5 lg:px-14 xl:px-16"
    >
      <div className="w-full flex justify-center">
        <Link href={"/"}>
          <Image
            src="/images/TailorLogo.svg"
            alt="Tailor Logo"
            width={104}
            height={26.4}
            className="md:w-36 md:h-9"
          />
        </Link>
      </div>
      <div className="flex flex-col bg-tertiary w-full h-full text-center text-white font-americana-bold justify-center gap-2 mt-56">
        <h2 className=" text-xl lg:text-4xl tracking-widest">Thank You For <br /> Registering</h2>
        <p className="text-xs lg:text-sm">{"We've received your submission and will get back to you shortly."}</p>
      </div>
    </main>
  )
}