import { imgAboutHero } from "@/assets";
import { Image } from "@/components/shared/blocks";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative  w-full max-w-[620px] px-4"
      data-name="Heading"
    >
      <p
        className="font-gt-super-ds leading-[normal] not-italic relative 
      text-[22px] text-center tracking-[-0.44px] w-full max-w-[444px]"
      >
        <span>{`We saw a pattern: brilliant brands failing not from `}</span>
        <span className="not-italic">lack of vision</span>
        <span>{`, but from `}</span>
        <span className="not-italic">scattered strategy.</span>
      </p>
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="relative " data-name="About Us">
      <div className="container">
        <div className="content-stretch flex flex-col gap-[64px] items-center py-[40px] md:py-[80px]  w-full">
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
