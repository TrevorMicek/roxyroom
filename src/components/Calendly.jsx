import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

const SeamlessModalScheduler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/webdevtrevor/30min";

  return (
    <>
      {/* 1. Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="your-custom-button-styling"
      >
        Schedule Appointment
      </button>

      {/* 2. Custom Pop-up Modal Box Structure */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 w-screen h-screen bg-black/50 z-[999999] justify-center items-center`}
        onClick={() => setIsOpen(false)}
      >
        {/* Modal Window Container matching Calendly's dimensions */}
        <div
          className="relative bg-white rounded-xl w-[90%] max-w-[1060px] h-[90%] max-h-[700px] shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Native-looking Floating Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-[22px] border-none bg-transparent text-2xl text-neutral-500 cursor-pointer z-10"
          >
            &times;
          </button>

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
