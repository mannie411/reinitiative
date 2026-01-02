import type { PropsWithChildren } from "react";
import { PlaceholderImage } from "../../shared/blocks/Placeholder";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center leading-[normal] relative shrink-0 text-center w-[406px]"
      data-name="Heading"
    >
      <p className="font-gt-super-ds not-italic relative shrink-0 text-[#2d3648] text-[22px] tracking-[-0.44px] w-[371px]">
        <span>{`We meet you `}</span>
        <span className="italic">{`where you are `}</span>
        <span>{`and build the systems that `}</span>
        <span className="italic">move you forward.</span>
      </p>
      <p className="font-eb-garamond font-normal min-w-full relative shrink-0 text-[#53627e] text-[16px] w-[min-content]">
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
      <p className="font-gt-super-txt leading-[normal] italic relative shrink-0 text-[#53627e] text-[16px] text-nowrap">
        view more
      </p>
    </div>
  );
}

function Container({ children }: PropsWithChildren) {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start
     min-h-px min-w-px relative shrink-0"
    >
      {children}
    </div>
  );
}

export function SelectedWork() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="About Us">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] md:px-[180px] py-[90px] relative w-full">
          <div
            className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full"
            data-name="Container"
          >
            <Heading />
            <div
              className="content-stretch flex flex-col md:flex-row gap-[80px] h-auto md:h-[708px] i
              tems-start relative shrink-0 w-full"
              data-name="Row"
            >
              <Container>
                <Image />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p
                    className="font-eb-garamond font-medium leading-[normal] relative shrink-0 
                  text-[#53627e] text-[16px] text-nowrap tracking-[6.4px]"
                  >
                    SELECTED WORK
                  </p>
                  <HypenButton />
                </div>
              </Container>

              <Container>
                <Image />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p
                    className="font-eb-garamond font-medium leading-[normal] relative shrink-0 
                  text-[#53627e] text-[16px] text-nowrap tracking-[6.4px]"
                  >
                    ABOUT US
                  </p>
                  <HypenButton />
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
