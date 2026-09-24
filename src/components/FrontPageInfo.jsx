import React, { useState } from "react";

export default function Example() {
  const [learnMore, setLearnMore] = useState(false);
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=567&q=80"
            width="100px"
            height="50px"
            alt="team working together at office"
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-base text-indigo-600 font-semibold tracking-wide uppercase">
              what we do
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Page Builder vs Hand Coded
            </h3>
            <p className="mt-8 max-w-2xl text-lg text-gray-500">
              Our main focus is small businesses that have a website they made
              with a page builder, yet are looking for something that isn&apos;t
              so slow, isn&apos;t so templated, & isn&apos;t so expensive.
            </p>
            <div className="mt-5 prose prose-indigo text-gray-900">
              <p className="max-w-2xl text-gray-900">
                We are actively trying to bridge the gap between page built
                websites that are great for starting out, and websites
                you&apos;d see at a mid-sized business. When you need something
                better there&apos;s only expensive options. This is where we
                excel & this is why we do what we do; to make fast, high quality
                websites that are affordable to small businesses like your
                clients.
              </p>
              <ul role="list text-gray-500">
                <li class="text-gray-600">
                  Our websites always score two to three times as fast on page
                  load times.
                </li>
                <li class="text-gray-600">
                  Every website we make is uniquely hand coded to your liking &
                  branding.
                </li>
                <li class="text-gray-600">
                  Our prices are roughly half the cost of other designers &
                  developers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
