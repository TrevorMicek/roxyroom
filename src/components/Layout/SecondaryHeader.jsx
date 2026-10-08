import React, { useState } from "react";
import { FadeIn } from "../FadeIn";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import Logo from "../../images/66073008_padded_logo(1).jpeg";

import band from "../../images/roxyroom.jpg";
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
      case "Lessons":
        return ["Drum Lessons", ""];
      case "Contact":
        return ["Contact The Roxy", "Room Music Company"];
    }
  };
  return (
    <div
      className="relative bg-dark"
      style={{
        gridColumn: "span 5",
        gridRowStart: "header",
        gridRowEnd: "main",
      }}
    >
      <div className="relative border-b-[1px] border-gold  pb-16 sm:pb-24">
        <Navbar title={props.title} border={false} />

        <main
          className="
          relative py-6   flex justify-center items-center mx-auto max-w-7xl  sm:mt-24"
        >
          <div className="text-center ">
            <h1 className="text-3xl xs:text-4xl font-mont tracking-tight text-white sm:text-5xl lg:text-6xl">
              <FadeIn
                viewport={{ once: true, margin: "0px 0px -100px" }}
                duration={0.5}
                x={-20}
              >
                <span className="relative bg-[linear-gradient(to_right,theme(colors.gold),#FFECA0,theme(colors.gold))] bg-clip-text text-transparent top-6 xl:inline">
                  {props.title ? Title()[0] : ""}
                </span>
              </FadeIn>{" "}
              <br />
              <FadeIn
                viewport={{ once: true, margin: "0px 0px -100px" }}
                duration={0.5}
                x={20}
              >
                <span className="relative text-cream -top-2  xl:inline">
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
