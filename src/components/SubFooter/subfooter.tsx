import React from "react";
import MarconLogo from "~/public/marcon-logo.svg";
import BuildingForLife from "~/public/building-for-life.svg";
import Image from "next/image";
import LinkedinLogo from "~/public/icons/linkedin.svg";
import FacebookLogo from "~/public/icons/facebook.svg";
import InstagramLogo from "~/public/icons/instagram.svg";
import Link from "next/link";

export function SubFooter() {
  return (
    <section className="bg-[#041C2A] w-full mb-6">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="p-4 pt-8 pb-8 md:p-8">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <div className="lg:flex lg:flex-col lg:w-fit">
            <Image
              src={MarconLogo}
              alt="Marcon"
              className="w-[80px] lg:w-[122px]"
            />
            <div className="flex flex-col pt-6 lg:pt-14 gap-2 lg:gap-5 text-base-white">
              <Image src={BuildingForLife} alt="Building for life." className="w-48 md:w-52" />
              <span className="text-base text-white">
                marcon.ca/tailor
              </span>
            </div>
          </div>
          <div className="mt-8 md:w-1/2 gap-8 lg:max-w-[850px] xl:max-w-[930px] lg:mt-0 lg:flex lg:justify-between">
            <div className="text-xs min-w-fit text-white flex w-full justify-center flex-col">
              <div className="flex flex-col w-full  ">
                <div className="border-t border-base-white text-base-white flex items-center font-normal gap-3 py-4 mt-8 lg:mt-0">
                  <Link
                    className="hover:underline"
                    href="https://marcon.ca/en/projects/?_gl=1*ggl2zu*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5ODg5MS41My4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Projects
                  </Link>
                  <span className="size-[7px] bg-white"></span>
                  <Link
                    className="hover:underline"
                    href="https://marcon.ca/en/projects/?_gl=1*ggl2zu*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5ODg5MS41My4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    All Projects
                  </Link>
                </div>
                <div className="border-t border-base-white text-base-white flex items-center font-normal gap-3 py-4 lg:mt-0">
                  <Link
                    className="hover:underline whitespace-nowrap"
                    href="http://customercare.marcon.ca/customercare/login?_gl=1*monjn1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI4Mi42MC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Homeowner Support
                  </Link>
                  <span className="size-[7px] bg-white"></span>
                  <Link
                    className="hover:underline"
                    href="http://customercare.marcon.ca/customercare/login?_gl=1*monjn1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI4Mi42MC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Overview
                  </Link>
                  <span className="size-[7px] bg-white"></span>
                  <Link
                    className="hover:underline"
                    href="http://customercare.marcon.ca/customercare/login?_gl=1*monjn1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI4Mi42MC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Login
                  </Link>
                </div>
                <div className="border-y border-base-white text-base-white flex items-center font-normal gap-2 py-4 lg:mt-0">
                  <Link
                    className="hover:underline whitespace-nowrap"
                    href="https://marcon.ca/en/our-company/overview/?_gl=1*uejtf1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI5NC40OC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Our Company
                  </Link>
                  <span className="size-[7px] bg-white"></span>
                  <Link
                    className="hover:underline"
                    href="https://marcon.ca/en/our-company/news/?_gl=1*uejtf1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI5NC40OC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Overview
                  </Link>
                  <Link
                    className="hover:underline"
                    href="https://marcon.ca/en/our-company/community/?_gl=1*uejtf1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI5NC40OC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    News
                  </Link>
                  <Link
                    className="hover:underline"
                    href="https://marcon.ca/en/our-company/careers/?_gl=1*uejtf1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI5NC40OC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Community
                  </Link>
                  <Link
                    className="hover:underline"
                    href="https://marcon.ca/en/our-company/careers/?_gl=1*uejtf1*_gcl_au*NDk1MDQ3OTUzLjE3MTg5OTgwODA.*_ga*MTIwOTgxODQ5MC4xNzE4OTk4MDgw*_ga_XPWFSX0R9Q*MTcxODk5ODA4MC4xLjEuMTcxODk5OTI5NC40OC4wLjkyODU0MzM3Mw.."
                    target="_blank"
                  >
                    Careers
                  </Link>
                </div>
              </div>
              <div className="flex gap-2 items-center text-base-white py-4 lg:py-6">
                <Link
                  href="https://www.facebook.com/MarconHomes"
                  target="_blank"
                >
                  <Image src={FacebookLogo} alt="Facebook logo" />
                </Link>
                <Link
                  href="https://www.instagram.com/MarconHomes"
                  target="_blank"
                >
                  <Image src={InstagramLogo} alt="Instagram logo" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/marcon"
                  target="_blank"
                >
                  <Image src={LinkedinLogo} alt="Linkedin logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
