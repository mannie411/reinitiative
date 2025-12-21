import svgPaths from "../../../assets/svg/svg-jkx9cin3no";

function Film() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="film"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="film">
          <path
            d={svgPaths.p171d8280}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M23.3333 6.66667V73.3333"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M56.6667 6.66667V73.3333"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M6.66667 40H73.3333"
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M6.66667 23.3333H23.3333"
            id="Vector_5"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M6.66667 56.6667H23.3333"
            id="Vector_6"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M56.6667 56.6667H73.3333"
            id="Vector_7"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
          <path
            d="M56.6667 23.3333H73.3333"
            id="Vector_8"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function Image5() {
  return (
    <div
      className="basis-0 bg-[#2d3648] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <Film />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Image5 />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="content-stretch flex h-[353px] items-start relative shrink-0 w-full"
      data-name="Row"
    >
      <Frame1 />
    </div>
  );
}

export function VideoSection() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Container"
    >
      <Row1 />
    </div>
  );
}
