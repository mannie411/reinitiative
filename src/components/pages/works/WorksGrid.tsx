import { ImagePlaceholder } from "@/components/shared/blocks";
import { Link } from "@tanstack/react-router";

function ImageContainer() {
  return (
    <div
      className="bg-[#a0abc0] h-[458px] overflow-clip relative  w-full group-hover:opacity-90 transition-opacity"
      data-name="Image"
    >
      <div
        className="absolute left-[calc(50%+0.5px)] size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="image-01"
      >
        <ImagePlaceholder />
      </div>
    </div>
  );
}

function WorkItem({ brand, category }: { brand: string; category: string }) {
  return (
    <Link
      to="/works/work-name"
      params={{ workId: brand.toLowerCase().replace(/\s+/g, "-") }}
      className="content-stretch flex flex-col gap-[32px] items-start relative  w-full cursor-pointer group hover:translate-y-[-4px] transition-transform duration-300"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ImageContainer />
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative  w-full">
        <p className=" font-medium leading-[normal] relative  text-[#2d3648] text-[16px]  tracking-[6.4px] uppercase group-hover:text-[#53627e] transition-colors">
          {brand}
        </p>
        <div className="content-stretch flex items-center relative ">
          <p className="font-avenir-lt leading-[normal] not-italic relative  text-[#53627e] text-[12px]  tracking-[4.8px] uppercase">
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
    <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
      <div
        className="content-stretch flex flex-col gap-[72px] items-center 
  relative w-full"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-start relative  w-full"
          data-name="Row"
        >
          {works.map((work, index) => (
            <WorkItem key={index} brand={work.brand} category={work.category} />
          ))}
        </div>
      </div>
    </div>
  );
}
