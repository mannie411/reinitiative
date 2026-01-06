import { ImagePlaceholder } from "@/components/shared/blocks/Icons";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[620px] px-4"
      data-name="Heading"
    >
      <p
        className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 
      text-[18px] md:text-[24px] text-center tracking-[-0.48px] w-full max-w-[386px]"
      >
        <span>We're looking for people </span>
        <span className="not-italic">who build brands</span>, not just
        campaigns.
      </p>
    </div>
  );
}

export function CareersHero() {
  return (
    <section className="relative ">
      <div className="shrink-0 w-full" data-name="About Us">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div
            className="content-stretch flex flex-col gap-[64px] items-center px-[20px] 
        md:px-[180px] py-[60px] md:py-[90px] relative w-full"
          >
            <div
              className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full"
              data-name="Container"
            >
              <Heading />
              <div
                className="relative content-stretch flex flex-col gap-[32px] h-[500px] 
            md:h-[708px] items-start shrink-0 w-full"
              >
                <div
                  className="basis-0 bg-[#a0abc0] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full"
                  data-name="Image"
                >
                  <div
                    className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
                    data-name="image-01"
                  >
                    <ImagePlaceholder />
                  </div>
                </div>
              </div>
            </div>
            <p
              className="font-eb-garamond font-normal leading-[normal] relative 
          shrink-0 text-[#53627e] text-[16px] md:text-[18px] text-center w-full
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
