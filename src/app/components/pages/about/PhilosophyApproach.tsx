import svgPaths from "../../../../assets/svg/svg-jkx9cin3no";

function Content() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full">
        our Philosophy
      </p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] w-full">
        <p className="mb-0">{`Transformation isn't a service. It's a system.`}</p>
        <p className="mb-0">
          Strategy shapes design. Design amplifies story. Story drives growth.
          Growth needs structure.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic">
          Everything connected. Everything working together.
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
      className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image2 />
    </div>
  );
}

function Column() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="Column"
    >
      <Content />
      <Image1 />
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
      className="bg-[#a0abc0] h-[300px] md:h-[538px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image3 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center md:text-left w-full"
      data-name="Content"
    >
      <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] tracking-[2.4px] uppercase w-full">
        our approach
      </p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] w-full">
        <p className="mb-0">
          We work with brands at their turning point—between potential and
          performance.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          We rebuild five areas: strategy, identity, narrative, growth,
          operations.
        </p>
        <p>{`Brands that don't just look different. Brands that work differently.`}</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="Column"
    >
      <Image4 />
      <Content1 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row gap-[60px] md:gap-[80px] items-center justify-center px-[20px] md:px-[40px] py-0 relative shrink-0 w-full max-w-[1080px] mx-auto"
      data-name="Section"
    >
      <Column />
      <Column1 />
    </div>
  );
}

export function PhilosophyApproach() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[120px] pt-[90px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Section />
    </div>
  );
}
