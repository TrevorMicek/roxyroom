import React, { Suspense, useRef, useEffect, useState } from "react";
import CalendlyScheduler from "../Calendly";
import { FadeIn } from "../FadeIn";

const CalendlyModal = React.lazy(() =>
  import("react-calendly").then((module) => ({ default: module.PopupModal })),
);
export default function Example() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    setShouldLoad(true);
  }, []);
  const containerRef = useRef(null);
  return (
    <div
      className="bg-cream"
      style={{
        gridColumn: "span 7",
        gridRowStart: "third",
        gridRowEnd: "span 7",
      }}
    >
      <div className="pt-4 py-10 max-w-7xl mx-auto  px-4 sm:px-6 .5xl:py-24 .5xl:px-8 .5xl:flex .5xl:items-center .5xl:justify-between .5xl:w-[800px]">
        <FadeIn x={-24}>
          <h2 className="text-3xl font-default font-medium tracking-tight text-gray-900 md:text-4xl .5xl:text-4xl">
            <span className="block">Ready to learn?</span>

            <FadeIn
              viewport={{ once: true, margin: "0px 0px -50px" }}
              duration={0.75}
              x={-24}
            >
              <div className="mt-8  lg:mt-0 lg:flex-shrink-0">
                <div className="mx-auto">
                  <CalendlyScheduler />
                </div>
              </div>
            </FadeIn>
          </h2>
        </FadeIn>
      </div>
    </div>
  );
}
