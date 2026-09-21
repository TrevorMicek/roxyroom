import React from "react";
import { FadeIn } from "../FadeIn";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

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
        <div className=" pt-5 pb-12 text-left bg-[#1A1A1A] sm:pt-16  .5xl:py-20 md:pb-52 .5xl:pb-52 ">
          <Popover
            as="header"
            className="relative z-10 border-solid border-indigo-200 border-b"
          >
            <div className="">
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between pr-4 sm:px-6 .5xl:w-[800px]"
                aria-label="Global"
              >
                <div className="flex items-center flex-1 ">
                  <div className="h-12 w-auto flex items-start justify-between w-full md:w-auto">
                    <FadeIn x={-24}>
                      <a href="/" className="">
                        <span className="sr-only">Workflow</span>
                        <img
                          src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1788545365/yartistfest_vetfzs.png"
                          alt="artsy yartisfest logo"
                          height="50px"
                          width="150px"
                        />
                      </a>
                    </FadeIn>
                    <div className="flex items-center md:hidden">
                      <Popover.Button className="relative  bg-bg rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:flex md:absolute md:right-10">
                    {navigation.map((item) => (
                      <a
                        href={`${item.href}`}
                        key={item.name}
                        className="text-base font-medium text-[#C5A059] hover:text-indigo-500"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white  overflow-hidden">
                  <div className="h-20 w-auto pt-4 flex items-center justify-between">
                    <a
                      href="/"
                      className="rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    >
                      <span className="sr-only">Workflow</span>
                      <img
                        src="src\images\Yartistfest.png"
                        alt="artsy noco web designs logo"
                        height="50px"
                        width="250px"
                      />
                    </a>
                    <div className="px-4 pt-4 -mr-2">
                      <Popover.Button className="relative bottom-3 bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-100 hover:bg-indigo-500"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="relative mx-auto py-8 max-w-7xl lg:px-8 .5xl:w-[800px] .5xl:z-10">
            <div className=" ">
              <div className=" max-w-md px-2 sm:max-w-2xl sm:px-9  lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="">
                  <h1 className="mt-8 tiny:text-[1.9rem] xs:text-4xl text-3.5xl font-mont font-[425]  text-[#C5A059] sm:mt-5 sm:text-5xl .5xl:text-5.5xl .5xl:py-1 lg:mt-6 xl:text-6xl">
                    The Roxy Room Music Company
                  </h1>
                  <p className="mt-3 text-gray-300 sm:mt-5 sm:text-xl .5xl:pt-4 .5xl:-mb-4 .5xl:text-1.5xl xl:text-xl min-w-full ">
                    Great Music. Amazing Food. A Brighter Future for Denver
                    Students. YartistFest brings together local sound, culinary
                    talent, and community spirit for a cause that hits home.
                  </p>
                  <FadeIn>
                    <div className="mt-10 sm:mt-12">
                      <div className="sm:col-span-2">
                        <div className="inline-flex rounded-md border-[#C5A059] border-2 shadow">
                          <a
                            href="/about"
                            className=" inline-flex items-center justify-center px-20 tiny:px-16  xs:px-24 py-3 border border-transparent text-base font-medium rounded-md text-[#C5A059] bg-gray-900 hover:bg-gray-800 .5xl:text-lg .5xl:px-7"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
