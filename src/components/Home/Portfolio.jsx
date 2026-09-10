import React from "react";
import band from "/src/images/band.jpg";
import bbq from "/src/images/bbq.jpg";
import community from "/src/images/community.jpg";
const portfolio = [
  {
    name: "Music",
    desktop: band,
    a: "https://earthandelle.netlify.app/",
    alt: "supplement website",
  },
  {
    name: "Food",
    desktop: bbq,
    a: "https://spotterfitness.netlify.app/",
    alt: "fitness app website",
  },
  {
    name: "Community",
    desktop: community,
    a: "https://eagle-plumes.com/",
    alt: "native american  website",
  },
];
export default function Example() {
  return (
    <div
      id="portfolio"
      className="relative bg-[rgb(243,247,255)] pt-16 -mb-8 overflow-hidden sm:pt-24 lg:pt-32"
      style={{
        gridColumn: "span 7",
        gridRowStart: "second",
        gridRowEnd: "third",
      }}
    >
      <div className=" w-screen">
        <div>
          <h2 className="mt-2 mb-6 max-w-3xl mx-auto text-4xl font-mont font-medium tracking-tight text-[#97278b] text-center .5xl:text-4.5xl">
            <a href="/portfolio">
              Welcome to <br />
              Yartistfest
            </a>
          </h2>
        </div>
        <div className="flex flex-col">
          {portfolio.map((example) => (
            <div
              key={example.name}
              className={` flex  flex-col mx-auto h-full -mb-6 w-screen md:w-1/2 `}
            >
              <div
                className={`${example.name === "Community" ? "text-black" : "text-white"} text-center  w-full md:w-1/2 h-12 absolute z-10 text-5xl font-[340]`}
              >
                {example.name}
              </div>
              <a href={example.a}>
                <img
                  className="relative w-screen h-full"
                  src={example.desktop.src}
                  alt={example.alt}
                  width="300px"
                  height="200px"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
