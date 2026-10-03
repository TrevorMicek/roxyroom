import React, { useState, useEffect } from "react";

import Logo from "../images/musicnote.png";

export default function FeatureSection() {
  return (
    <div className="lg:pt-32">
      <div class="flex flex-row absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8 md:px-16 overflow-visible">
        <svg
          class="w-full h-[40px] md:h-[120px] overflow-visible"
          xmlns="http://w3.org"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,60 C 300,160 450,-40 600,60 C 750,160 900,-40 1200,100"
            class="fill-none stroke-slate-300 stroke-[4] stroke-linecap-round"
          />
        </svg>
        <div class="bg-cream absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src={Logo.src}
            alt="Centered graphic"
            class="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white  object-cover"
          />
        </div>

        <svg
          class="w-full h-[40px] md:h-[120px] overflow-visible"
          xmlns="http://w3.org"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M 1200,60 C 900,160 750,-40 600,60 C 450,160 300,-40 0,100"
            class="fill-none stroke-slate-300 stroke-[4] stroke-linecap-round"
          />
        </svg>
      </div>
    </div>
  );
}
