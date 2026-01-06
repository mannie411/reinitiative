import type { PropsWithChildren } from "react";
import { PlaceholderImage } from "../../shared/blocks/Placeholder";
import { Link } from "@tanstack/react-router";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center leading-[normal] relative shrink-0 text-center w-[406px]"
      data-name="Heading"
    >
      <h3 className="font-gt-super-ds not-italic relative shrink-0 text-[#394E79] text-[22px] tracking-[-0.44px] w-[371px]">
        <span>{`We meet you `}</span>
        <span className="not-italic">{`where you are `}</span>
        <span>{`and build the systems that `}</span>
        <span className="not-italic">move you forward.</span>
      </h3>
      <p
        className="font-eb-garamond font-normal min-w-full relative 
      shrink-0 text-[#506081] text-[16px] w-[min-content]"
      >
        We power the growth engines of brands ready to scale globally and
        sustainably, designing the systems that give creative businesses the
        structure to grow intelligently and sustainably.
      </p>
    </div>
  );
}

function Image() {
  return (
    <div
      className="basis-0 bg-[#a0abc0] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <PlaceholderImage />
    </div>
  );
}

function HypenButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#2d3648] h-px shrink-0 w-[24px]" />
      <p className="font-gt-super-txt leading-[normal] italic relative shrink-0 text-[16px] text-nowrap">
        view more
      </p>
    </div>
  );
}

function Container({ children }: PropsWithChildren) {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start
      w-[300px] h-[400px] md:w-[445px] md:h-[615px]"
    >
      {children}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section className="relative" data-name="Selected Works">
      <div className="container">
        <div className="content-stretch flex flex-col items-center">
          <div
            className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 py-[40px] md:py-[80px]"
            data-name="Container"
          >
            <Heading />
            <div
              className="content-stretch flex flex-col md:flex-row gap-[40px] md:gap-[80px]"
              data-name="Row"
            >
              <Container>
                <Image />
                <Link
                  to="/work"
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                >
                  <p
                    className="font-eb-garamond font-medium leading-[normal] relative shrink-0 
                   text-[16px] text-nowrap tracking-[6.4px]"
                  >
                    SELECTED WORK
                  </p>
                  <HypenButton />
                </Link>
              </Container>

              <Container>
                <Image />
                <Link
                  to="/about-us"
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                >
                  <p
                    className="font-eb-garamond font-medium leading-[normal] relative shrink-0 
                  text-[16px] text-nowrap tracking-[6.4px]"
                  >
                    ABOUT US
                  </p>
                  <HypenButton />
                </Link>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
