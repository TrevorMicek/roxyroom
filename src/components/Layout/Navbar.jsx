import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../images/66073008_padded_logo(1).jpeg";
export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-[#1A1A1A] border-b-2 border-gold dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <img alt="Your Company" src={logo.src} className="h-8 w-auto" />
            </div>
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
          <div className="-mr-2 flex sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
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

      <DisclosurePanel className="absolute bg-[#1A1A1A]  border border-gold w-screen h-80 z-20 sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 dark:bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
          <DisclosureButton
            as="a"
            href="/"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white dark:bg-gray-950/50"
          >
            Home
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            About
          </DisclosureButton>

          <DisclosureButton
            as="a"
            href="/contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Contact
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
