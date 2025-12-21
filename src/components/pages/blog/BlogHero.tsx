import svgPaths from "@/assets/svg/svg-c9y12vgf3";

function Image5() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="image-01"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="image-01" opacity="0.1">
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

function Heading() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-center left-[calc(50%+2px)] top-[calc(50%-11.5px)] translate-x-[-50%] translate-y-[-50%] px-4 w-full"
      data-name="Heading"
    >
      <p className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 text-[18px] md:text-[22px] text-center text-white tracking-[-0.44px] w-full max-w-[420px]">
        <span>{`Thoughts on brand building, strategy, design, and the systems that `}</span>
        <span className="italic">connect</span>
        <span>{` them.`}</span>
      </p>
    </div>
  );
}

function HeroImage() {
  return (
    <div
      className="basis-0 bg-[#53627e] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Image5 />
      <Heading />
    </div>
  );
}

export function BlogHero() {
  return (
    <div
      className="bg-white relative shrink-0 w-full flex flex-col items-center"
      data-name="Desktop/Blog"
    >
      <div
        className="bg-white content-stretch flex flex-col h-[373px] items-center overflow-clip relative shrink-0 w-full"
        data-name="Hero"
      >
        <HeroImage />
      </div>
    </div>
  );
}
