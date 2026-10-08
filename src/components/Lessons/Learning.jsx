import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import {
  MusicalNoteIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { FadeIn } from "../FadeIn";
const features = [
  {
    name: "Lorem ipsum do",
    description: "Commodo nec sagittis tortor mauris sed. ",
    descriptionTwo:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: MusicalNoteIcon,
  },
  {
    name: "Lorem ipsum do",
    description: "Commodo nec sagittis tortor mauris sed. ",
    descriptionTwo:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: MusicalNoteIcon,
  },
  {
    name: "Lorem ipsum do",
    description: "Commodo nec sagittis tortor mauris sed. ",
    descriptionTwo:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: MusicalNoteIcon,
  },
  {
    name: "Lorem ipsum do",
    description: "Commodo nec sagittis tortor mauris sed. ",
    descriptionTwo:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: MusicalNoteIcon,
  },
  {
    name: "Lorem ipsum do",
    description: "Commodo nec sagittis tortor mauris sed. ",
    descriptionTwo:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: MusicalNoteIcon,
  },
];

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/webdevtrevor/30min";
  return (
    <div className="bg-white py-20 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            Lorem ipsum dolor sit amet, consectetu
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <FadeIn>
          <div className="mx-auto flex justify-center  mt-6 .5xl:w-full ">
            <img
              alt="two people doing therapy"
              src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1738975887/pexels-shkrabaanthony-5217850_i3ogoh.jpg"
              width="300px"
              height="300px"
              className=" aspect-[3/4] size-half border-8 border-white object-fit .5xl:block"
            />
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <p className="mb-8 text-xl  text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
            Here's What You'll Learn in Our Classes:
          </p>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex flex-row items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-600 dark:text-indigo-400"
                  />
                  <span>{feature.name}</span>
                  {isOpen ? (
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-5 size-5 flex-none text-indigo-600 cursor-pointer dark:text-indigo-400"
                      onClick={() => setIsOpen(false)}
                    />
                  ) : (
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="ml-5 size-5 flex-none text-indigo-600 cursor-pointer dark:text-indigo-400"
                      onClick={() => setIsOpen(true)}
                    />
                  )}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                  {isOpen && (
                    <p className="flex-auto">{feature.descriptionTwo}</p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
