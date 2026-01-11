import { imgAboutHero } from "@/assets";
import { Image } from "@/components/shared/blocks";

function Heading() {
  return (
    <div
      className="container content-stretch flex flex-col items-center relative  w-full max-w-[620px] px-4"
      data-name="Heading"
    >
      <h3
        className="text-[18px] md:text-[22px]  leading-[25px] font-normal 
       text-center tracking-[-0.44px] w-full max-w-[500px]"
      >
        <span>We saw a pattern: brilliant brands failing not from </span>
        <span className="not-italic">lack of vision</span>
        <span>, but from </span>
        <span className="not-italic">scattered strategy.</span>
      </h3>
    </div>
  );
}

export function AboutHero() {
  return (
    <section
      className="relative w-full py-[32px] md:py-[64px] "
      data-name="About Us"
    >
      <div className="container">
        <div className="content-stretch flex flex-col gap-[64px] items-center  w-full">
          <div
            className="content-stretch flex flex-col gap-[72px] items-center 
      relative  w-full max-w-[1440px] mx-auto"
            data-name="Container"
          >
            <Heading />
            <div
              className="content-stretch flex h-[500px] md:h-[708px] items-start relative  w-full overflow-clip"
              data-name="Row"
            >
              <div
                className="basis-0 content-stretch flex flex-col gap-[32px] grow 
        h-full items-start  relative "
              >
                <Image imgSrc={imgAboutHero} className="size-full" />
              </div>
            </div>
          </div>
          <p className="font-eb-garamond font-normal leading-[normal] relative  text-[#53627e] text-[16px] text-center w-full max-w-[534px]">
            Great products with unclear messaging. Strong missions hidden by
            weak design. Founders fixing symptoms, not systems.
            <span className="not-italic">{` We built the solution.`}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
