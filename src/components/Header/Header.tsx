"use client"

import Link from "next/link";
import { Image } from "../Image";

import MenuIcon from "~/public/icons/navIcon.svg"


import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const links = [
  { text: "Design", url: "#More Thought.", size: 60, mobile: 44 },
  { text: "Public Art", url: "#More Function.", size: 90, mobile: 66 },
  { text: "Homes", url: "#More Home.", size: 57, mobile: 41 },
  { text: "Brentwood", url: "#Celebrate More.", size: 102, mobile: 76 },
  { text: "Register", url: "#register-form", size: 76, mobile: 56 },
  // { text: "Interiors", url: "", size: 82, mobile: 0 },
];

export function Header() {
  return (
    <NavigationMenu.Root className="sticky z-50 top-0 bg-white/90 shadow-sm">
      <NavigationMenu.List className="flex relative justify-between items-center p-4 md:p-8 lg:px-14 xl:px-16">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
            className="flex items-center justify-center w-10 h-6">
            <Image src={MenuIcon} alt="Menu Navbar" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute pt-7 px-3 bg-white/90 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            {links.map((link, index) => (
              <div
                key={index}
                className={`relative group text-[10px] md:text-sm`}
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

          </NavigationMenu.Content>

        </NavigationMenu.Item>
        <NavigationMenu.Item className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/TailorLogo.svg"
            alt="Tailor Logo"
            width={0}
            height={30.78}
            className="py-4 w-28 md:w-[188px]"
          />
        </NavigationMenu.Item>
        <NavigationMenu.Link href="/book-appointment" className="pr-3 pl-3 h-[34px] w-[100px] md:w-auto md:h-[50px] text-center flex justify-center items-center bg-secondary font-thin text-white uppercase text-[8px] p-2 md:text-[13px] sm:flex-row tracking-widest">
          <span>Book Appointment</span>
        </NavigationMenu.Link>
      </NavigationMenu.List>
    </NavigationMenu.Root>

  );
}
