"use client"

import Link from "next/link";
import { Image } from "../Image";

import MenuIcon from "~/public/icons/navIcon.svg"


import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const links = [
  { text: "Design", url: "#More Thought.", size: 60, mobile: 44 },
  { text: "Amenities", url: "#More Quality.", size: 90, mobile: 66 },
  { text: "Homes", url: "#More Home.", size: 57, mobile: 41 },
  { text: "Downloads", url: "#Downloads.", size: 102, mobile: 76 },
  { text: "Register", url: "#register-form", size: 76, mobile: 56 },
  // { text: "Interiors", url: "", size: 82, mobile: 0 },
];

export function Header() {
  return (
    <NavigationMenu.Root className="sticky z-50 top-0 bg-tertiary">
      <NavigationMenu.List className="flex relative justify-between items-center p-4 md:px-8 md:py-5 lg:px-14 xl:px-16">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
            className="flex items-center justify-center w-10 h-6">
            <Image src={MenuIcon} alt="Menu Navbar" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute pt-7 px-3 bg-tertiary data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            {links.map((link, index) => (
              <div
                key={index}
                className={`relative group text-tiny md:text-sm`}
              >
                <Link
                  href={link.url}
                  className="text-white uppercase block mb-4 relative z-10"
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
            width={104}
            height={26.4}
            className="md:w-36 md:h-9"
          />
        </NavigationMenu.Item>
        <NavigationMenu.Link target="_blank" href="https://calendly.com/tailorbymarcon" className="w-21 h-9 p-3 bg-secondary bg-opacity-20 flex text-center items-center md:h-10 md:w-auto md:px-3">
          <span className="font-normal uppercase text-white text-xxs md:text-tiny">Book <span className="hidden md:inline-flex">an</span> Appointment</span>
        </NavigationMenu.Link>
      </NavigationMenu.List>
    </NavigationMenu.Root>

  );
}
