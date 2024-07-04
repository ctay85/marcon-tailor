import Image from "next/image";
import Link from "next/link";

const links = [
  { text: "Design", url: "/design", size: 60, mobile: 44 },
  { text: "Homes", url: "/homes", size: 57, mobile: 41 },
  { text: "Interiors", url: "/interiors", size: 82, mobile: 0 },
  { text: "Public Art", url: "/public-art", size: 90, mobile: 0 },
  { text: "Brentwood", url: "/brentwood", size: 102, mobile: 76 },
];

export function Header() {
  return (
    <div className="flex justify-between items-center relative pb-8 md:pb-28 p-4 md:p-8">
      <div className="flex flex-col relative">
        <div className="absolute top-[-5px] md:top-0">
          {links.map((link, index) => (
            <div
              key={index}
              className={`relative group text-[10px] md:text-sm ${
                link.text === "Interiors" || link.text === "Public Art"
                  ? "hidden md:block"
                  : ""
              }`}
            >
              <Link
                href={link.url}
                className="text-primary uppercase block mb-4 relative z-10"
              >
                <span className="relative z-20">{link.text}</span>
                <span
                  className="hidden md:block absolute left-0 right-0 bottom-0 h-3 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.4rem] md:top-[0.6rem]"
                  style={{ width: `${link.size + 6}px` }}
                />
                <span
                  className="hidden md:block absolute left-0 right-0 bottom-0 h-3 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.4rem] md:top-[0.6rem]"
                  style={{ width: `${link.size}px` }}
                />
                <span
                  className="block md:hidden absolute left-0 right-0 bottom-0 h-3 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.4rem] md:top-[0.6rem]"
                  style={{ width: `${link.mobile + 6}px` }}
                />
                <span
                  className="block md:hidden absolute left-0 right-0 bottom-0 h-3 bg-[#AABCCE] opacity-30 transition-transform duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left top-[0.4rem] md:top-[0.6rem]"
                  style={{ width: `${link.mobile}px` }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/TailorLogo.svg"
          alt="Tailor Logo"
          width={0}
          height={30.78}
          className="py-4 w-28 md:w-[188px]"
        />
      </div>
      <Link href="" className="h-[34px] w-[100px] md:w-auto md:h-[50px] text-center flex justify-center items-center bg-secondary font-thin text-white uppercase text-[8px] p-2 md:text-[13px] sm:flex-row tracking-widest">
        <span>Book Appointment</span>
      </Link>
    </div>
  );
}
