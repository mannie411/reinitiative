import svgPaths from "../../../../assets/svg/svg-m8f02np3ck";

function Content() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#53627e] w-full max-w-[380px]"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[2.4px] uppercase w-full">
        Who We Are
      </p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] w-full">
        <p className="mb-0 text-[#53627e]">
          <span>{`We're `}</span>
          <span className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic">
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
        <p className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic text-[#53627e]">
          Small team. Big impact.
        </p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="image-01"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="image-01">
          <path
            d={svgPaths.p1eb7e900}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p2c4b0480}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p374a8480}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="basis-0 bg-[#a0abc0] grow h-[300px] md:h-[420px] min-h-px min-w-px overflow-clip relative shrink-0 w-full md:w-auto"
      data-name="Image"
    >
      <Image2 />
    </div>
  );
}

function Column() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[64px] grow h-full items-center min-h-px min-w-px relative shrink-0 w-full"
      data-name="Column"
    >
      <Content />
      <Image1 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[20px] md:px-[40px] py-0 relative shrink-0 w-full max-w-[1080px]"
      data-name="Section"
    >
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0 w-full">
        <Column />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="image-01"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="image-01">
          <path
            d={svgPaths.p1eb7e900}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p2c4b0480}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p374a8480}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Image4() {
  return (
    <div
      className="basis-0 bg-[#a0abc0] grow h-[300px] md:h-[420px] min-h-px min-w-px overflow-clip relative shrink-0 w-full md:w-auto"
      data-name="Image"
    >
      <Image3 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#53627e] w-full max-w-[380px]"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[2.4px] uppercase w-full">
        What We Value
      </p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] w-full">
        <p className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic mb-0 text-[#53627e]">
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

function Column1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col-reverse md:flex-row gap-[32px] md:gap-[64px] grow h-full items-center min-h-px min-w-px relative shrink-0 w-full"
      data-name="Column"
    >
      <Image4 />
      <Content1 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[20px] md:px-[40px] py-0 relative shrink-0 w-full max-w-[1080px]"
      data-name="Section"
    >
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0 w-full">
        <Column1 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#53627e] w-full max-w-[380px]"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[2.4px] uppercase w-full">{`Who We're Looking For`}</p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] w-full">
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

function Image5() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="image-01"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="image-01">
          <path
            d={svgPaths.p1eb7e900}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p2c4b0480}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p374a8480}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Image6() {
  return (
    <div
      className="basis-0 bg-[#a0abc0] grow h-[300px] md:h-[420px] min-h-px min-w-px overflow-clip relative shrink-0 w-full md:w-auto"
      data-name="Image"
    >
      <Image5 />
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[64px] grow h-full items-center min-h-px min-w-px relative shrink-0 w-full"
      data-name="Column"
    >
      <Content2 />
      <Image6 />
    </div>
  );
}

function Section2() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[20px] md:px-[40px] py-0 relative shrink-0 w-full max-w-[1080px]"
      data-name="Section"
    >
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0 w-full">
        <Column2 />
      </div>
    </div>
  );
}

export function CareersValues() {
  return (
    <div
      className="content-stretch flex flex-col gap-[80px] md:gap-[120px] items-center pb-[120px] pt-[90px] px-0 relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px] border-[rgba(160,171,192,0.6)] border-solid inset-0 pointer-events-none"
      />
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}
