import type { PropsWithChildren } from "react";
import { Image } from "@/components/shared/blocks/";
import { imgCareerBg1, imgCareerBg2, imgCareerBg3 } from "@/assets";

function Column({ children }: PropsWithChildren) {
  return (
    <div
      className="basis-0 content-stretch flex flex-col md:flex-row gap-[32px] 
      md:gap-[64px] grow h-full items-center justify-center min-h-px min-w-px relative  w-full"
      data-name="Column"
    >
      {children}
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative s
      hrink-0 text-[#53627e] w-full max-w-[380px]"
      data-name="Content"
    >
      <p
        className="font-avenir-lt leading-[normal] 
      not-italic relative  text-[12px] tracking-[2.4px] uppercase w-full"
      >
        Who We Are
      </p>
      <div className="font-eb-garamond font-normal leading-[normal] relative  text-[16px] w-full">
        <p className="mb-0 text-[#53627e]">
          <span>{`We're `}</span>
          <span className="font-eb-garamond font-medium italic">
            architects
          </span>
          , not decorators.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="text-[#53627e]">
            A team obsessed with turning scattered potential into strategic
            systems. We work with ambitious brands at their inflection point
          </span>
          <span>{`; `}</span>
          <span className="text-[#53627e]">
            building the foundations that make growth inevitable.
          </span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-eb-garamond font-medium italic text-[#53627e]">
          Small team. Big impact.
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start 
      relative  text-[#53627e] w-full max-w-[380px]"
      data-name="Content"
    >
      <p
        className="font-avenir-lt leading-[normal] not-italic relative 
       text-[12px] tracking-[2.4px] uppercase w-full"
      >
        What We Value
      </p>
      <div className="font-eb-garamond font-normal leading-[normal] relative  text-[16px] w-full">
        <p className="font-eb-garamond font-medium italic mb-0 text-[#53627e]">
          Strategy over speed.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 text-[#53627e]">
          We take time to understand before we build.
        </p>
        <p className="mb-0 text-[#53627e]">
          Integration over isolation Every discipline connects. Every decision
          compounds.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 text-[#53627e]">{`Partnership over ego The best work comes from collaboration, not competition. Growth over comfort `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="text-[#53627e]">
          We challenge each other. We support each other. We all get better.
        </p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative 
       text-[#53627e] w-full max-w-[380px]"
      data-name="Content"
    >
      <p
        className="font-avenir-lt leading-[normal] not-italic relative  
      text-[12px] tracking-[2.4px] uppercase w-full"
      >{`Who We're Looking For`}</p>
      <div className="font-eb-garamond font-normal leading-[normal] relative  text-[16px] w-full">
        <p className="mb-0">{`Curious minds. Clear communicators. People who ask "why" before "how."`}</p>
        <p className="mb-0">{`You don't need to know everything. But you need to want to learn everything.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>
          We hire for thinking, not just skill. For potential, not just
          portfolio.
        </p>
      </div>
    </div>
  );
}

export function CareersValues() {
  return (
    <section className="relative">
      <div className="container">
        <div
          className=" content-stretch flex flex-col gap-[80px] md:gap-[120px] 
      items-center pb-[120px] pt-[90px] px-0 relative "
          data-name="Container"
        >
          <div
            aria-hidden="true"
            className="absolute  border-[1px_0px] border-[rgba(160,171,192,0.6)] 
        border-solid inset-0 pointer-events-none "
          />

          <div
            className="content-stretch flex items-center justify-center  relative  w-full"
            data-name="Section"
          >
            <div className="basis-0 flex flex-row grow items-center self-stretch  w-full">
              <Column>
                <Content />
                <div
                  className="basis-0 bg-[#a0abc0] grow h-[300px] md:h-[420px] 
      min-h-px min-w-px overflow-clip relative  w-full md:max-w-[550px]"
                  data-name="Image"
                >
                  <Image imgSrc={imgCareerBg1} className="size-full" />
                </div>
              </Column>
            </div>
          </div>

          <div
            className="content-stretch flex items-center justify-center relative  w-full"
            data-name="Section"
          >
            <div className="basis-0 flex flex-row grow items-center self-stretch  w-full">
              <Column>
                <div
                  className="basis-0 bg-[#a0abc0] grow h-[300px] md:h-[420px] 
      min-h-px min-w-px overflow-clip relative  w-full md:max-w-[550px]"
                  data-name="Image"
                >
                  <Image imgSrc={imgCareerBg2} className="size-full" />
                </div>
                <Content1 />
              </Column>
            </div>
          </div>

          <div
            className="content-stretch flex items-center justify-centerrelative  w-full"
            data-name="Section"
          >
            <div className="basis-0 flex flex-row grow items-center self-stretch  w-full">
              <Column>
                <Content2 />
                <div
                  className="basis-0 bg-[#a0abc0] grow h-[300px] md:h-[420px] 
      min-h-px min-w-px overflow-clip relative w-full md:max-w-[550px]"
                  data-name="Image"
                >
                  <Image imgSrc={imgCareerBg3} className="size-full" />
                </div>
              </Column>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
