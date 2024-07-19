import { Image } from "@/components/Image";
import Link from "next/link";
import BookAppointmentForm from "./components/book-appointment-form";

export default function BookAppointment() {
  return (
    <main className="w-full h-full mb-10">
      <header className="flex items-center justify-center py-7 md:py-14 lg:py-20">
        <Link href={"/"}>
          <Image
            src="/images/TailorLogo.svg"
            alt="Tailor Logo"
            width={0}
            height={30.78}
            className="w-28 md:w-[188px]"
          />
        </Link>
      </header>
      <div className="flex flex-col gap-9 py-10 px-4 md:px-8 lg:py-5 lg:px-[10vw] xl:px-[15vw] 2xl:px-[20vw]">
        <div data-aos="fade"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="w-full"
        >
          <h1 className="text-primary font-americana-bold text-2xl leading-[30px] lg:text-3xl lg:leading-10 font-bold">
            Book an appointment
            <br />
            with a Marcon Advisor
          </h1>
        </div>
        <BookAppointmentForm />
      </div>
    </main>
  )
}