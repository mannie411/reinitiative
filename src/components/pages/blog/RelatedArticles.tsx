import { Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/shared/blocks";

function HeadingCategoryLink() {
  return (
    <div
      className="content-stretch flex items-center justify-between px-0 py-[24px] relative shrink-0 w-full"
      data-name="Heading+Category Link"
    >
      <p
        className="font-eb-garamond font-normal leading-[normal] relative 
      shrink-0 text-[#53627e] text-[18px] text-nowrap tracking-[7.2px] uppercase"
      >
        more blog articles
      </p>
    </div>
  );
}

function ArticleImage() {
  return (
    <div
      className="bg-[#a0abc0] h-[300px] md:h-[458px] overflow-clip relative 
      shrink-0 w-full group-hover:opacity-90 transition-opacity"
      data-name="Image"
    >
      <div
        className="absolute left-[calc(50%-0.33px)] size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="image-01"
      >
        <ImagePlaceholder />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p
        className="font-avenir-lt leading-[normal] not-italic relative shrink-0 
      text-[#a0abc0] text-[10px] text-nowrap tracking-[4px] uppercase"
      >
        CATEGORY
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame1 />
      <p
        className="font-eb-garamond font-medium leading-[normal] relative shrink-0 
      text-[#2d3648] text-[16px] text-nowrap tracking-[6.4px] uppercase group-hover:text-[#53627e]
      transition-colors"
      >
        name of article
      </p>
    </div>
  );
}

function ReadMoreButton() {
  return (
    <div
      className="content-stretch flex items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid 
        inset-0 pointer-events-none group-hover:border-[#53627e] transition-colors"
      />
      <p
        className="font-avenir-lt leading-[normal] not-italic relative shrink-0 text-[#53627e] 
      text-[12px] text-center text-nowrap tracking-[2.88px] uppercase"
      >
        read more
      </p>
    </div>
  );
}

function ArticleCardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full">
      <Frame4 />
      <ReadMoreButton />
    </div>
  );
}

function ArticleCard() {
  return (
    <Link
      to="/blog/$articleId"
      params={{ articleId: "related-article" }}
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 
      w-full cursor-pointer group hover:translate-y-[-4px] transition-transform duration-300"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArticleImage />
      <ArticleCardContent />
    </Link>
  );
}

function Row() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-[32px] items-start relative shrink-0 w-full"
      data-name="Row"
    >
      {[...Array(3).keys()].map((_, i) => (
        <ArticleCard key={i} />
      ))}
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <HeadingCategoryLink />
      <Row />
    </div>
  );
}

function ButtonLink() {
  return (
    <Link
      to="/blog"
      className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 
      relative shrink-0 cursor-pointer group"
      data-name="Button Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] 
        border-solid inset-0 pointer-events-none group-hover:border-[#53627e] transition-colors"
      />
      <p
        className="font-avenir-lt leading-[normal] not-italic relative shrink-0
       text-[#53627e] text-[12px] text-center text-nowrap tracking-[2.88px] uppercase"
      >
        See all articles
      </p>
    </Link>
  );
}

export function RelatedArticles() {
  return (
    <section className="relative">
      <div className="container" data-name="About Us">
        <div
          className="content-stretch flex flex-col gap-[72px] items-center pb-[90px]
           pt-[40px]  relative w-full  overflow-clip rounded-[inherit] size-full"
        >
          <Frame6 />
          <ButtonLink />
        </div>
      </div>
    </section>
  );
}
