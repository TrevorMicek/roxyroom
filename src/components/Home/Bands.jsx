import React from "react";
import { FadeIn } from "../FadeIn";
const portfolio = [
  {
    name: "Yoo Doo Voo Doo",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nato",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602584/earthMonitor_ye5lra.png",
    link: "https://earthandelle.netlify.app/",
  },
  {
    name: "Josh Keith Band",
    description:
      "This fitness app is transforming the way people work out. With their new website, they're able to funnel more customers directly to their app.",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602691/spotterMonitor_mrakwf.png",
    link: "https://spotterfitness.netlify.app/",
  },

  {
    name: "Richard Deandra",
    description:
      "A little piece of history in the high mountains of Colorado, this 100 year old business is now getting more sales online then ever before.",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602790/eagleMonitor_ejsvyn.png",
    link: "https://eagle-plumes.com/",
  },
  {
    name: "Jermey Robak Experience",
    description:
      "This Colorado marketer is now able to  offer services directly through their website, increasing their reach and sales.",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602388/marketMonitor_ygzigy.png",
    link: "https://getmarketintel.com/",
  },
  {
    name: "Andy & Friends Jazz Band",
    description:
      "This Colorado marketer is now able to  offer services directly through their website, increasing their reach and sales.",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602388/marketMonitor_ygzigy.png",
    link: "https://getmarketintel.com/",
  },
];
export default function Example() {
  return (
    <div
      class="   bg-indigo-50  pt-16 overflow-hidden sm:pt-24  lg:pt-32 "
      style={{ gridColumn: "span 7", gridRow: "span 9" }}
    >
      <div class="mx-auto flex flex-col justify-center px-4 sm:px-9  sm:max-w-2xl .5xl:w-[800px] lg:px-12 lg:max-w-7xl">
        <div>
          <h2 className="mt-2 mb-4 max-w-3xl mx-auto text-4xl font-mont font-medium tracking-tight text-[#97278b] text-center .5xl:text-4.5xl">
            <a href="/portfolio">Meet The Bands</a>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:mb-10">
          {portfolio.map((example) => (
            <div class="flex flex-col lg:flex-col">
              <FadeIn viewport={{ once: true, margin: "0px 0px -85px" }}>
                <p class=" mt-5  text-base font-mont  text-[#97278b] font-semibold tracking-wide uppercase .5xl:text-lg">
                  <a href={`${example.link}`}>{example.name}</a>
                </p>
                <p class=" mt-5 max-w-prose  text-xl text-gray-500  .5xl:mt-2 lg:w-[500px]">
                  {portfolio[0].description}
                </p>
              </FadeIn>
              <FadeIn duration={0.75}>
                <div class=" mt-10 relative mb-24 mx-auto items-center space-y-8 sm:mx-1 md:space-x-16 lg:inset-y-0 lg:right-0 lg:h-full">
                  <a href={`${example.link}`} class="w-fit">
                    <img
                      class="relative w-[300px] mr-0 object-fit  sm:w-[400px]"
                      src={example.desktop}
                      alt={`${example.name} website on desktop and mobile`}
                      width="250px"
                      height="175px"
                      loading="lazy"
                    />
                  </a>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
