import React, { useState, useEffect } from "react";
import {
  CodeBracketIcon,
  ChartBarIcon,
  CreditCardIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../images/PC.jpg";
import { FadeIn } from "../FadeIn";
const benefits = [
  {
    name: "Exceptional Websites",
    description:
      "Elevating your website and brand with our 100% Custom Solutions simply can't be beat by WordPress websites that are slow, templated, and lack the care and design we offer.",
    icon: CodeBracketIcon,
  },
  {
    name: "Hands Off Experience",
    description:
      "Save yourself time and effort by having a developer take care of all of your website needs, which allows you to focus on more important things in your business.",
    icon: ChartBarIcon,
  },

  {
    name: "Performance",
    description:
      "The #1 reason visitors will leave a website is if it's slow to load. Our sites are lightning fast, accessible and SEO friendly to rank higher on Google and provide a better user experience.",
    icon: BoltIcon,
  },
  {
    name: "Monthly Cost",
    description:
      "Maintenance and edits are all built right into each website package so there's no annoying monthly subscription.",
    icon: CreditCardIcon,
  },
];
/*
const features = [
  {
    name: '100% Hand Coded',
    description:
    "All of our sites are made from scratch using our own code. This allows us full control over the design and functionality, leading to more traffic and conversions.",
    icon: CodeIcon,
  },
  {
    name: 'Optimization',
    description:
      "The #1 reason visitors will leave a website is if it's slow to load. Our sites are lightning fast, accessible and SEO friendly to rank higher on Google and provide a better user experience.",
    icon: LightningBoltIcon,
  },
  {
    name: 'Subscription Pricing',
    description:
      "We use a unique subscription pricing model, so you enjoy no upfront costs, affordable packages and no hidden fees.",
    icon: TagIcon,
  }
]
<div className="mt-10 hidden">
        <h2 className="mt-5 mb-6 text-base text-default font-semibold tracking-wide uppercase">Features</h2>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

         <div className=" mx-auto mt-12 max-w-[400px]  w-full h-72  ">
          <img
            alt="city image with orange sunset"
            src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1738031325/luca-bravo-XJXWbfSo2f0-unsplash_knthmr.jpg"
            width="300px"
            height="300px"
            className="rounded-lg aspect-[3/4] size-full object-fit lg:block"
          />
        </div>
*/
export default function FeatureSection() {
  return (
    <div
      className="pb-10 pt-12 -mt-1  relative overflow-hidden bg-[rgb(243,247,255)]"
      style={{
        gridColumn: "span 7",
        gridRowStart: "first",
        gridRowEnd: "second",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-8 .5xl:w-[800px]">
        <div className="">
          <p className="mt-2 relative z-10 max-w-3xl text-3xl font-mont font-[425] tracking-tight text-gray-900 .5xl:text-4xl">
            Where Local Art Meets Live Sounds.
          </p>
          <p
            className={`mt-4 relative z-10 max-w-2xl text-xl text-gray-600 .5xl:text-1.5xl`}
          >
            YartistFest brings together local sound, culinary talent, and
            community spirit for a cause that hits home. Every ticket, meal, and
            memory created helps directly fund instruments, sheet music, and
            vital resources for Denver public school music programs in need.
          </p>
        </div>
      </div>
    </div>
  );
}
