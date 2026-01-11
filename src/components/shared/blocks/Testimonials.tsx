import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import svgPaths from "@/assets/svg";
import type { Testimonial } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../ui/carousel";

const testimonials: Testimonial[] = [
  {
    content:
      " They took the time to understand my objective and made thoughtful, strategic suggestions that elevated the final output.",
    name: "Assumpta Ozua",
    position: "Ave Creations",
  },
  {
    content:
      " They took the time to understand my objective and made thoughtful, strategic suggestions that elevated the final output.",
    name: "Assumpta Ozua",
    position: "Ave Creations",
  },
  {
    content:
      " They took the time to understand my objective and made thoughtful, strategic suggestions that elevated the final output.",
    name: "Assumpta Ozua",
    position: "Ave Creations",
  },
];

function KeyboardArrowUp() {
  return (
    <div className="relative size-[24px]" data-name="keyboard_arrow_up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="keyboard_arrow_up">
          <path
            d={svgPaths.p3c144b80}
            fill="var(--fill-0, #2D3648)"
            id="icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Testimonial() {
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) {
      return;
    }
    // You can also use the api here for other customizations
  }, [api]);
  return (
    <div
      className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full"
      data-name="Testimonal"
    >
      <div className="relative shrink-0 w-full" data-name="Content+arrow">
        <div className="flex flex-row items-center size-full justify-center">
          <div
            className="content-stretch flex items-center justify-between 
          p-[10px] relative w-full md:max-w-[600px]"
          >
            <div
              onClick={() => api?.scrollPrev()}
              className="flex items-center justify-center relative shrink-0 size-[24px]
               cursor-pointer hover:opacity-70 transition-opacity"
              style={{
                "--transform-inner-width": "0",
                "--transform-inner-height": "0",
              }}
            >
              <div className="flex-none rotate-[270deg]">
                <KeyboardArrowUp />
              </div>
            </div>
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 6000,
                }),
              ]}
            >
              <CarouselContent>
                {testimonials.map(({ content, name, position }, idx) => (
                  <CarouselItem key={`item-${idx}`} className="basis-full ">
                    <div
                      className="content-stretch flex flex-col
                gap-[30px] items-center leading-[normal] relative 
                text-[16px] text-center max-w-[394px] mx-auto"
                      data-name="Name+Company"
                    >
                      <p
                        className="font-eb-garamond font-normal leading-[normal] relative shrink-0
                       text-[16px] text-center w-full "
                      >
                        {content}
                      </p>
                      <div className="space-y-2">
                        <p
                          className="font-eb-garamond font-normal text-[12px] relative  tracking-normal 
                      md:tracking-[6px] w-full uppercase"
                        >
                          {name}
                        </p>
                        <p
                          className="font-eb-garamond font-normal text-[12px] relative tracking-normal 
                      md:tracking-[6px] w-full uppercase"
                        >
                          {position}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div
              onClick={() => api?.scrollNext()}
              className="flex items-center justify-center relative shrink-0 size-[24px] 
              cursor-pointer hover:opacity-70 transition-opacity"
              style={
                {
                  "--transform-inner-width": "0",
                  "--transform-inner-height": "0",
                } as React.CSSProperties
              }
            >
              <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                <KeyboardArrowUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative" data-name="Testimonials">
      <div className="container">
        <div className="overflow-clip rounded-[inherit] size-full w-full">
          <div className="content-stretch flex flex-col items-center py-[40px] md:py-[80px]">
            <div
              className="content-stretch flex flex-col gap-[26px] items-center relative shrink-0 w-full"
              data-name="Container"
            >
              <p
                className="font-eb-garamond font-normal leading-[normal] relative 
            shrink-0  text-[20px] text-center tracking-[8px] uppercase w-full"
              >
                <span className="tracking-[3.2px]">In </span>
                <span className=" italic tracking-[1.12px] lowercase">
                  their
                </span>
                <span className="tracking-[3.2px]"> words</span>
              </p>
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
