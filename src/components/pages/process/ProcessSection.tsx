import { Fragment } from "react";
import { useLenis } from "lenis/react";
import { ProcessCard } from "./Process";
import { processSteps } from ".";

export function ProcessHero() {
  const lenis = useLenis();

  const handleClick = (id: string) => {
    // Scrolls to the element with id="contact-section"
    lenis?.scrollTo(id, {
      offset: -100, // Offset for fixed headers (e.g., 100px from top)
      duration: 1.5, // Custom duration in seconds
      immediate: false, // Set to true to skip the animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="relative w-full py-[32px] md:py-[64px]">
        <div className="container">
          <div className="flex flex-col items-center gap-[32px] md:gap-[64px]">
            {/* Heading */}
            <div className="flex flex-col items-center gap-[16px] max-w-[500px]">
              <h3 className="text-[18px] md:text-[22px] leading-[25px] font-normal text-center w-full max-w-[500px]">
                <span>Five pillars. </span>
                <span className="font-gt-super-ds">One</span>{" "}
                <span className="font-gt-super-ds not-italic">
                  transformation.
                </span>
              </h3>
              <p className="text-[16px] text-center max-w-[420px]">
                We don't solve in fragments. We rebuild completely—from strategy
                to scale, every dimension integrated.
              </p>
            </div>

            {/* Category Links */}
            <div
              className="w-full border-t border-b border-[rgba(160,171,192,0.5)] 
             px-0 py-[24px] "
            >
              <div
                className="flex gap-[20px] md:items-center md:justify-between max-sm:animate-marquee
              w-full hover:pause"
              >
                {processSteps.map((step) => (
                  <p
                    key={step.id}
                    onClick={() => handleClick(`#${step.id}`)}
                    className="font-eb-garamond text-[16px] text-[#53627e] group-hover:text-[#2d3648] cursor-pointer
                      tracking-[3.2px] group-hover:border-[#2d3648]  transition-colors border-transparent border-[0px_0px_1px]"
                  >
                    {step.title}
                  </p>
                ))}
              </div>
            </div>

            {/* First Section Image */}
            {/* <div className="w-full h-[708px] bg-[#a0abc0] rounded-[4px] overflow-hidden relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[80px]">
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="0 0 80 80"
                >
                  <path
                    d="M10 23.3333H70V63.3333C70 65.1014 69.2976 66.7971 68.0474 68.0474C66.7971 69.2976 65.1014 70 63.3333 70H16.6667C14.8986 70 13.2029 69.2976 11.9526 68.0474C10.7024 66.7971 10 65.1014 10 63.3333V23.3333Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                  <path
                    d="M56.6663 70V46.6667C56.6663 44.8986 55.964 43.2029 54.7137 41.9526C53.4635 40.7024 51.7678 40 49.9997 40H29.9997C28.2316 40 26.5359 40.7024 25.2856 41.9526C24.0354 43.2029 23.333 44.8986 23.333 46.6667V70"
                    stroke="white"
                    strokeWidth="5"
                  />
                  <path
                    d="M70 23.3333L40 10L10 23.3333"
                    stroke="white"
                    strokeWidth="5"
                  />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export function ProcessSection() {
  return (
    <section className="relative">
      <div className="container">
        {/* Process Sections */}
        {processSteps.map((step, index) => (
          <ProcessCard
            key={step.id}
            id={step.id}
            title={step.title}
            services={step.services}
            description={step.description}
            descriptionItalic={step.descriptionItalic}
            isFirst={index === 0}
            img={step.img}
          />
        ))}
      </div>
    </section>
  );
}
