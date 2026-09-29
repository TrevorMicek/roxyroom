import React, { useState } from "react";
import { FadeIn } from "../FadeIn";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "../../images/66073008_padded_logo(1).jpeg";
//[#c740ac]

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header(props) {
  //https://myfreelogomaker.com/s/195111791
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const Title = () => {
    switch (props.title) {
      case "About":
        return ["Learn more about me", "and my music"];
      case "Contact":
        return ["Contact The Roxy", "Room Music Company"];
    }
  };
  return (
    <div
      className="relative bg-[#1A1A1A]"
      style={{
        gridColumn: "span 5",
        gridRowStart: "header",
        gridRowEnd: "main",
      }}
    >
      <div className={`  relative  pb-16 sm:pb-24`}>
        <Popover as="header" className="">
          <div className=" pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between pr-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="relative h-16 w-auto flex items-start justify-between w-full md:w-auto">
                  <a href="/" className="">
                    <span className="sr-only">Workflow</span>
                    <img
                      src={Logo.src}
                      alt="artsy yartisfest logo"
                      height="50px"
                      width="60px"
                    />
                  </a>

                  <div className="flex items-center md:hidden">
                    <Popover.Button
                      onClick={openMenu}
                      className="relative   rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-violet-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                    >
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
                      className="text-base font-medium text-white hover:text-indigo-500"
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
              className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white  overflow-hidden">
                <div className="h-20 w-auto pt-4 flex items-center justify-between">
                  <a
                    href="/"
                    className="rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
                    <span className="sr-only">Workflow</span>
                    <img
                      src={Logo.src}
                      alt="artsy yartisfest logo"
                      height="50px"
                      width="60px"
                    />
                  </a>

                  <div className="px-4 pt-4 -mr-2">
                    <Popover.Button
                      onClick={() => setIsOpen(false)}
                      className="relative bottom-3 bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    >
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

        <main
          className={` ${
            isOpen ? "mb-44" : "mb-2"
          } relative  mt-5 h-24  flex justify-center items-center mx-auto max-w-7xl  sm:mt-24`}
        >
          <div className="text-center absolute">
            <h1 className="text-3xl xs:text-4xl font-mont tracking-tight text-white sm:text-5xl lg:text-6xl">
              <FadeIn
                viewport={{ once: true, margin: "0px 0px -100px" }}
                duration={0.5}
                x={-20}
              >
                <span className="relative top-6 xl:inline">
                  {props.title ? Title()[0] : ""}
                </span>
              </FadeIn>{" "}
              <br />
              <FadeIn
                viewport={{ once: true, margin: "0px 0px -100px" }}
                duration={0.5}
                x={20}
              >
                <span className={`relative -top-2  xl:inline`}>
                  {props.title ? Title()[1] : ""}
                </span>
              </FadeIn>
            </h1>
            <p className="px-4 mt-3 max-w-sm  mx-auto text-lg text-gray-300 sm:text-lg md:mt-5 md:text-xl ">
              {props.text}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
