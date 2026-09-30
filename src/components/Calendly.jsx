import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

const SeamlessModalScheduler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/webdevtrevor/30min";

  return (
    <>
      {/* 1. Trigger Button */}
      <button
        className=" inline-flex items-center justify-center px-12 py-4 border-2 border-gold text-base font-medium tracking-wide rounded-md text-gold bg-gray-900 hover:bg-gray-800  hover:scale-[1.03] .5xl:text-lg .5xl:px-7"
        onClick={() => setIsOpen(true)}
      >
        schedule a free session
      </button>

      {/* 2. Custom Pop-up Modal Box Structure */}

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 w-screen h-screen bg-black/50 z-[999999] justify-center items-center`}
        onClick={() => setIsOpen(false)}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute h-8 w-8 top-2 right-4 border-[3px] border-gray-700 text-white flex justify-center items-center leading-none text-[40px]  cursor-pointer z-10"
        >
          <svg
            xmlns="http://w3.org"
            viewBox="0 0 100 100"
            width="100"
            height="100"
          >
            <line
              x1="20"
              y1="20"
              x2="80"
              y2="80"
              stroke="#364153"
              stroke-width="10"
              stroke-linecap="round"
            />
            <line
              x1="80"
              y1="20"
              x2="20"
              y2="80"
              stroke="#364153"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>
        </button>
        {/* Modal Window Container matching Calendly's dimensions */}
        <div
          className="relative top-2 bg-white rounded-xl w-[90%] max-w-[1060px] h-[90%] max-h-[700px] shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Native-looking Floating Close Button */}

          {/* 3. Streamlined, Minimalist Inline Widget */}
          <InlineWidget
            url={calendlyUrl}
            styles={{ width: "100%", height: "100%" }}
            // Strips out profile headers, banners, and wrappers to mimic a crisp modal card
            pageSettings={{
              hideEventTypeDetails: false,
              hideLandingPageDetails: true, // Hides user profile picture/header
              hideGdprBanner: true, // Removes bottom cookie popups
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SeamlessModalScheduler;
