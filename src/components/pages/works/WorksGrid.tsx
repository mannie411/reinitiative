import { Link } from "@tanstack/react-router";
import svgPaths from "@/assets/svg";

function ImageContainer() {
  return (
    <div
      className="bg-[#a0abc0] h-[458px] overflow-clip relative shrink-0 w-full group-hover:opacity-90 transition-opacity"
      data-name="Image"
    >
      <div
        className="absolute left-[calc(50%+0.5px)] size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
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
    </div>
  );
}

function WorkItem({ brand, category }: { brand: string; category: string }) {
  return (
    <Link
      to="/works/work-name"
      params={{ workId: brand.toLowerCase().replace(/\s+/g, "-") }}
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full cursor-pointer group hover:translate-y-[-4px] transition-transform duration-300"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ImageContainer />
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
        <p className=" font-medium leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-nowrap tracking-[6.4px] uppercase group-hover:text-[#53627e] transition-colors">
          {brand}
        </p>
        <div className="content-stretch flex items-center relative shrink-0">
          <p className="font-avenir-lt leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] text-nowrap tracking-[4.8px] uppercase">
            {category}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function WorksGrid() {
  const works = [
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
  ];

  return (
    <div className="w-full" data-name="Works Section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div
          className="content-stretch flex flex-col gap-[72px] items-center 
        md:py-[90px] relative w-full"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-start relative shrink-0 w-full"
            data-name="Row"
          >
            {works.map((work, index) => (
              <WorkItem
                key={index}
                brand={work.brand}
                category={work.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
