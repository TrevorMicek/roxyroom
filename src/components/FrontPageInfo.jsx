import React, { useState } from "react";
import band from "../images/The Roxy Room 1.jpg";
import { FadeIn } from "./FadeIn";
export default function Example() {
  const benefits = [
    {
      name: "Empowering Learners:",
      description:
        "We break down barriers to music education by offering flexible, mobile lessons that bring high-quality instruction directly to you.",
      icon: "CodeBracketIcon",
    },
    {
      name: "A World of Music:",
      description:
        "Our curriculum specializes in world music styles, expanding your musical horizons and deepening your global citizenship.",
      icon: "ChartBarIcon",
    },

    {
      name: "Fostering Connection:",
      description:
        "We do not just teach individuals; we build a vibrant collective of musicians, artists, and music lovers who support one another.",
      icon: "BoltIcon",
    },
  ];
  return (
    <div
      className="relative bg-white pr-4"
      style={{
        gridColumn: "span 7",
        gridRowStart: "second",
        gridRowEnd: "third",
      }}
    >
      <div className="pt-5 lg:absolute lg:inset-0 ">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            loading="lazy"
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={band.src}
            width="100px"
            height="50px"
            alt="team working together at office"
          />
        </div>
      </div>
      <div className=" px-4 my-16">
        <h2 className="mt-5 mb-6 text-base text-gold font-mont font-semibold tracking-wide uppercase .5xl:text-lg">
          Benefits
        </h2>
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="relative">
              <FadeIn>
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gold text-white ">
                    <benefit.icon
                      className="h-6 w-6 .5xl:h-7 .5xl:w-7"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="ml-16 text-lg leading-6 font-mont font-medium text-gray-900 .5xl:text-xl">
                    {benefit.name === "Monthly Cost" ? (
                      <span>&#216; </span>
                    ) : null}
                    {benefit.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600 .5xl:text-lg">
                  {benefit.description}
                </dd>
              </FadeIn>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
