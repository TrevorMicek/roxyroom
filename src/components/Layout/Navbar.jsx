import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  AnimatePresence,
  easeInOut,
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FadeIn } from "../FadeIn";
import logo from "../../images/66073008_padded_logo(1).jpeg";
export default function Example(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Disclosure
      as="nav"
      className="relative py-1 bg-[#1A1A1A] border-b-2 border-gold dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <FadeIn x={-5}>
              {" "}
              <div className="shrink-0">
                <a href="/">
                  <img
                    alt="Your Company"
                    src={logo.src}
                    className="h-10 w-auto cursor-pointer"
                  />
                </a>
              </div>
            </FadeIn>
            <div className="hidden sm:ml- sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 dark:bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                <a
                  href="/"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white dark:bg-gray-950/50"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
            </div>
          </div>
          <div className="mr-2 flex sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <DisclosurePanel
            static
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="absolute bg-[#1A1A1A]  border border-gold w-screen h-80 z-30 sm:hidden"
          >
            <div className="space-y-1 px-2 pt-2 pb-12">
              {/* Current: "bg-gray-900 dark:bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
              <DisclosureButton
                as="a"
                href="/"
                className={`${props.title === "Home" ? "flex flex-row justify-between block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-gold dark:bg-gray-950/50" : "flex flex-row justify-between block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"}`}
              >
                <span>Home</span>{" "}
                <ChevronRightIcon className="h-6 w-6 .5xl:h-7 .5xl:w-7" />
              </DisclosureButton>
              <div className="-mt-2 w-11/12 pb-1 border-t border-gray-400 mx-auto" />
              <DisclosureButton
                as="a"
                href="/about"
                className={`${props.title === "About" ? "flex flex-row justify-between block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-gold dark:bg-gray-950/50" : "flex flex-row justify-between block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"}`}
              >
                <span>About</span>{" "}
                <ChevronRightIcon className="h-6 w-6 .5xl:h-7 .5xl:w-7" />
              </DisclosureButton>
              <div className="-mt-2 w-11/12 pb-1 border-t border-gray-400 mx-auto" />
              <DisclosureButton
                as="a"
                href="/lessons"
                className={`${props.title === "Lessons" ? "flex flex-row justify-between block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-gold dark:bg-gray-950/50" : "flex flex-row justify-between block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"}`}
              >
                <span>Lessons</span>{" "}
                <ChevronRightIcon className="h-6 w-6 .5xl:h-7 .5xl:w-7" />
              </DisclosureButton>
              <div className="-mt-2 w-11/12 pb-1 border-t border-gray-400 mx-auto" />
              <DisclosureButton
                as="a"
                href="/contact"
                className={`${props.title === "Contact" ? "flex flex-row justify-between block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-gold dark:bg-gray-950/50" : "flex flex-row justify-between block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"}`}
              >
                <span>Contact</span>{" "}
                <ChevronRightIcon className="h-6 w-6 .5xl:h-7 .5xl:w-7" />
              </DisclosureButton>
              <div className="-mt-2 w-11/12 pb-1 border-t border-gray-400 mx-auto" />
            </div>
            <a
              href="mailto:webdevtrevor@gmail.com"
              className="text-gray-200 underline block text-center"
            >
              theroxyroom@gmail.com
            </a>
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Disclosure>
  );
}
