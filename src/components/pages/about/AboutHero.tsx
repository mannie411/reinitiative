import svgPaths from "@/assets/svg/svg-jkx9cin3no";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[620px] px-4"
      data-name="Heading"
    >
      <p
        className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 text-[#2d3648] 
      text-[22px] text-center tracking-[-0.44px] w-full max-w-[444px]"
      >
        <span>{`We saw a pattern: brilliant brands failing not from `}</span>
        <span className="font-['GT_Super_Ds_Trial:Rg_It',sans-serif]">
          lack of vision
        </span>
        <span>{`, but from `}</span>
        <span className="font-['GT_Super_Ds_Trial:Rg_It',sans-serif]">
          scattered strategy.
        </span>
      </p>
    </div>
  );
}

function Image10() {
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

function Image() {
  return (
    <div
      className="basis-0 bg-[#a0abc0] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Image />
    </div>
  );
}

function Row() {
  return (
    <div
      className="content-stretch flex h-[500px] md:h-[708px] items-start relative shrink-0 w-full"
      data-name="Row"
    >
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Container"
    >
      <Heading />
      <Row />
    </div>
  );
}

export function AboutHero() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="About Us">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center pb-[30px] pt-[60px] md:pt-[90px] px-[20px] md:px-[180px] relative w-full">
          <Container />
          <p className="font-eb-garamond font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[16px] text-center w-full max-w-[534px]">
            Great products with unclear messaging. Strong missions hidden by
            weak design. Founders fixing symptoms, not systems.
            <span className="font-eb-garamond font-medium italic">{` We built the solution.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
