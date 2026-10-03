import React from "react";
import { FadeIn } from "../FadeIn";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Navbar from "./Navbar";
import band from "../../images/roxyroom.jpg";
import Logo from "../../images/66073008_padded_logo(1).jpeg";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Bands", href: "/bands" },

  { name: "Contact", href: "/contact" },
];

export default function HeroComp() {
  return (
    <div className="relative overflow-hidden ">
      <main>
        <div className=" pb-12 text-left bg-[#1A1A1A] sm:pt-16  .5xl:py-20 md:pb-52 .5xl:pb-52 ">
          <Navbar title="Home" />
          <div className="relative mx-auto py-8 max-w-7xl lg:px-8 .5xl:w-[800px] .5xl:z-10">
            <div className=" ">
              <div className=" max-w-md px-2 sm:max-w-2xl sm:px-9  lg:px-0 lg:text-left lg:flex lg:items-start lg:flex-row lg:space-x-24">
                <div className="pb-10 lg:mt-12">
                  <h1 className="mt-8  xs:text-4xl text-3.5xl font-default text-4xl  text-gold sm:mt-5 sm:text-5xl .5xl:text-5.5xl .5xl:py-1 lg:mt-6 xl:text-6xl">
                    The Roxy Room Music Company
                  </h1>
                  <p className="mt-3 font-default text-lg text-gray-300 sm:mt-5 sm:text-xl .5xl:pt-4 .5xl:-mb-4 .5xl:text-1.5xl xl:text-xl w-80 ">
                    Empowering artists, producing authentic sounds, and shaping
                    the future of independent music.
                  </p>
                </div>
                <img
                  className="relative z-10 h-80 w-full object-cover lg:h-96 lg:mt-24 lg:min-w-80"
                  src={band.src}
                  width="100px"
                  height="50px"
                  alt="team working together at office"
                />
              </div>
              <FadeIn>
                <div className="mt-10 sm:mt-12 lg:-mt-28">
                  <div className="sm:col-span-2">
                    <div className="inline-flex rounded-md border-[#C5A059] border-2 shadow  hover:scale-[1.03]">
                      <a
                        href="/about"
                        className=" inline-flex font-default items-center justify-center px-20 tiny:px-16  xs:px-24 py-3 border border-transparent text-base font-medium rounded-md text-gold bg-gray-900 hover:bg-gray-800 .5xl:text-lg .5xl:px-7"
                      >
                        Music Starts Here
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
