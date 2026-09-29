import React, { Suspense, useRef, useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
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
      className="bg-indigo-50"
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
                  <div ref={containerRef}>
                    <button
                      className=" inline-flex items-center justify-center px-12 py-4 border-2 border-gold text-base font-medium tracking-wide rounded-md text-gold bg-gray-900 hover:bg-gray-800  hover:scale-[1.03] .5xl:text-lg .5xl:px-7"
                      onClick={() => setisOpen(true)}
                    >
                      schedule a free session
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
            {shouldLoad && (
              <Suspense>
                <CalendlyModal
                  fallback={null}
                  url="https://calendly.com/webdevtrevor/30min"
                  onModalClose={() => setisOpen(false)}
                  open={isOpen}
                  rootElement={containerRef.current}
                />
              </Suspense>
            )}
          </h2>
        </FadeIn>
      </div>
    </div>
  );
}
