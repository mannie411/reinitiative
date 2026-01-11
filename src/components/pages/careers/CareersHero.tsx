import { imgCareerHero } from "@/assets";
import { Image } from "@/components/shared/blocks";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative  w-full max-w-[500px]"
      data-name="Heading"
    >
      <h3 className="text-[18px] md:text-[22px] leading-[25px] font-normal text-center w-full max-w-[500px]">
        <span>We're looking for people </span>
        <span className="not-italic">
          who build
          <br />
          brands
        </span>
        , not just campaigns.
      </h3>
    </div>
  );
}

export function CareersHero() {
  return (
    <section className="relative w-full py-[32px] md:py-[64px]">
      <div className="container" data-name="About Us">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[64px] items-center relative w-full">
            <div
              className="content-stretch flex flex-col gap-[64px] items-center relative  w-full overflow-clip"
              data-name="Container"
            >
              <Heading />
              <div
                className="relative content-stretch flex flex-col gap-[32px] h-[500px] 
            md:h-[708px] items-start  w-full"
              >
                <Image imgSrc={imgCareerHero} />
              </div>
            </div>
            <p
              className="font-eb-garamond font-normal leading-[normal] relative 
           text-[#53627e] text-[16px] md:text-[18px] text-center w-full
          max-w-[578px]"
            >
              We believe great work comes from diverse collaboration. That's why
              we work closely with each other to ensure every project meets your
              goals and exceeds expectations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
