import { Link } from "@tanstack/react-router";
import svgPaths from "../../../../assets/svg/svg-c9y12vgf3";

function BlogCardContent({ articleId }: { articleId: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
        <div className="content-stretch flex items-center relative shrink-0">
          <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a0abc0] text-[10px] text-nowrap tracking-[4px] uppercase">
            CATEGORY
          </p>
        </div>
        <p className="font-['EB_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-nowrap tracking-[6.4px] uppercase group-hover:text-[#53627e] transition-colors">
          name of article
        </p>
      </div>

      <Link
        to="/blog/$articleId"
        params={{ articleId }}
        className="content-stretch flex items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0 cursor-pointer"
        data-name="Button"
        onClick={(e) => {
          e.stopPropagation();
          window.scrollTo(0, 0);
        }}
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid inset-0 pointer-events-none group-hover:border-[#53627e] transition-colors"
        />
        <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] text-center text-nowrap tracking-[2.88px] uppercase">
          read more
        </p>
      </Link>
    </div>
  );
}

function HeadingCategoryLink() {
  return (
    <div
      className="content-stretch flex items-center justify-between px-0 py-[24px] relative shrink-0 w-full"
      data-name="Heading+Category Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#a0abc0] border-[1px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[18px] text-nowrap tracking-[7.2px] uppercase">
        blog articles
      </p>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[18px] text-nowrap text-right tracking-[7.2px] hidden md:block">
        CATEGORIES
      </p>
    </div>
  );
}

function CategoryLinks() {
  return (
    <div
      className="content-stretch flex flex-wrap font-['Avenir_LT_Pro:55_Roman',sans-serif] gap-[24px] md:gap-[72px] items-center leading-[normal] not-italic px-0 md:px-[24px] py-0 relative shrink-0 text-[#2d3648] text-[12px] text-nowrap tracking-[2.4px] uppercase"
      data-name="Category Links"
    >
      <p className="relative shrink-0 cursor-pointer hover:text-[#53627e] transition-colors font-bold">
        all
      </p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#53627e] transition-colors">
        CATEGORY
      </p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#53627e] transition-colors">
        CATEGORY
      </p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#53627e] transition-colors">
        CATEGORY
      </p>
      <p className="relative shrink-0 cursor-pointer hover:text-[#53627e] transition-colors">
        CATEGORY
      </p>
    </div>
  );
}

function FilterSection() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full max-w-[1080px]"
      data-name="Heading+Category Links"
    >
      <HeadingCategoryLink />
      <CategoryLinks />
    </div>
  );
}

function BlogCardImage() {
  return (
    <div
      className="bg-[#a0abc0] h-[300px] md:h-[458px] overflow-clip relative shrink-0 w-full group-hover:opacity-90 transition-opacity"
      data-name="Image"
    >
      <div
        className="absolute left-[calc(50%-0.33px)] size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
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

function BlogCard({ articleId }: { articleId: string }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full cursor-pointer group hover:translate-y-[-4px] transition-transform duration-300"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <BlogCardImage />
      <BlogCardContent articleId={articleId} />
    </div>
  );
}

function BlogGrid() {
  // Creating a grid with 8 items as per the Figma import
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[64px] items-start relative shrink-0 w-full max-w-[1080px]"
      data-name="Row"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <BlogCard key={i} articleId={`article-${i + 1}`} />
      ))}
    </div>
  );
}

export function BlogList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] md:px-[180px] py-[60px] md:py-[96px] relative w-full gap-[64px]">
          <FilterSection />
          <BlogGrid />
        </div>
      </div>
    </div>
  );
}
