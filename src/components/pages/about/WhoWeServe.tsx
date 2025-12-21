import svgPaths from "../../../assets/svg/svg-jkx9cin3no";

function Content2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full">
        Who We Serve
      </p>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] w-full">
        <span>{`We work with visionary founders who `}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">
          refuse to settle
        </span>
        . Who see the gap between where they are and w
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">{`here they're going.`}</span>
        <span>{` Who understand that real transformation requires more than`}</span>
        <span className="font-['EB_Garamond:Italic',sans-serif] italic">{` a new logo or marketing campaign.`}</span>
      </p>
    </div>
  );
}

function Image6() {
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

function Image7() {
  return (
    <div
      className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image6 />
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="Column"
    >
      <Content2 />
      <Image7 />
    </div>
  );
}

function Image8() {
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

function Image9() {
  return (
    <div
      className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image8 />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Content"
    >
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center w-full">
        <p className="mb-0">{`You have traction but your brand doesn't match your ambition. You're solving real problems but struggling to communicate your value. You're ready to invest in transformation, not just tactics.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic">
          We meet you at that moment.
        </p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="Column"
    >
      <Image9 />
      <Content3 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row gap-[60px] md:gap-[80px] items-center justify-center px-[20px] md:px-[40px] py-0 relative shrink-0 w-full max-w-[1080px] mx-auto"
      data-name="Section"
    >
      <Column2 />
      <Column3 />
    </div>
  );
}

export function WhoWeServe() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[120px] pt-[90px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Section1 />
    </div>
  );
}
