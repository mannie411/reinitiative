import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import svgPaths from "../../assets/svg/svg-3i71g9bhv5";
import { CompanyLogos, Testimonials } from "@/app/components/pages/home";

export const Route = createFileRoute("/work/$workId")({
  component: WorkDetailsPage,
});

function FilmIcon() {
  return (
    <div
      className="absolute left-1/2 size-[80px] top-[calc(50%-44.5px)] translate-x-[-50%] translate-y-[-50%]"
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

function HeroSection() {
  return (
    <div
      className="bg-[#2d3648] h-[1025px] relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="absolute inset-0 size-full">
        <div className="absolute top-[90px] w-full h-[935px] flex items-center justify-center">
          <FilmIcon />
        </div>
      </div>
    </div>
  );
}

function BrandDescription() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full md:w-[607px]"
      data-name="Content"
    >
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
        <p className="font-['EB_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-nowrap tracking-[6.4px] uppercase">
          name of brand
        </p>
        <div className="content-stretch flex items-center relative shrink-0">
          <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] text-nowrap tracking-[4.8px] uppercase">
            CATEGORY
          </p>
        </div>
      </div>
      <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[16px] w-full">
        Lorem ipsum dolor sit amet consectetur. Condimentum massa enim imperdiet
        feugiat odio aliquam praesent mattis vitae. Lobortis pellentesque leo
        congue adipiscing eleifend magna diam. Quis eget mi amet parturient
        fermentum amet vulputate curabitur maecenas. Sed faucibus quis magna
        gravida ut donec. Neque integer at turpis metus tellus. Lacus suscipit
        ac tempus integer lacinia consequat. Et rhoncus tristique ipsum et
        bibendum diam nulla proin massa. Habitasse massa velit arcu vitae morbi
        egestas. Amet vel ante egestas vulputate pharetra lectus felis nisl.
      </p>
    </div>
  );
}

function Services() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 text-[16px] w-full md:w-[219px]"
      data-name="Content"
    >
      <p className="font-['EB_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d3648] text-nowrap tracking-[6.4px] uppercase">
        services
      </p>
      <div className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#53627e] w-[min-content]">
        <p className="mb-0">Brand Strategy Development</p>
        <p className="mb-0">{`Market Research & Analysis`}</p>
        <p className="mb-0">Competitive Intelligence</p>
        <p className="mb-0">Brand Positioning</p>
        <p className="mb-0">Audience Segmentation</p>
        <p>Brand Architecture</p>
      </div>
    </div>
  );
}

function DescriptionSection() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-start justify-between relative shrink-0 w-full max-w-[1080px] gap-8">
      <BrandDescription />
      <Services />
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div
      className="bg-[#a0abc0] h-[500px] md:h-[708px] overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <div
        className="absolute left-1/2 size-[80px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
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

function QuoteSection() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full max-w-[1080px] mt-8 mb-8">
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[504px]"
        data-name="Content"
      >
        <p className="font-['EB_Garamond:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#53627e] text-[16px] text-center md:text-left w-full">
          Lorem ipsum dolor sit amet consectetur. In massa ornare proin facilisi
          diam in fermentum. Molestie pharetra lectus feugiat tempus amet.
          Adipiscing duis interdum viverra aenean euismod commodo pellentesque
          dictumst. Quis vitae auctor nunc iaculis sapien nec morbi vitae.
        </p>
      </div>
    </div>
  );
}

function WorkWithUsCTA() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full mt-16"
      data-name="Container"
    >
      <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full max-w-[660px]">
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <p className="font-['EB_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d3648] text-[20px] text-center text-nowrap tracking-[8px] uppercase w-full">
            Explore what we do
          </p>
          <p className="font-['GT_Super_Ds_Trial:Rg',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d3648] text-[36px] text-center tracking-[-0.72px] w-full">
            Want to work with us?
          </p>
        </div>

        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          <Link
            to="/careers"
            className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0 cursor-pointer group"
            data-name="Button Link"
          >
            <div
              aria-hidden="true"
              className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid inset-0 pointer-events-none group-hover:border-[#53627e] transition-colors"
            />
            <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] text-center text-nowrap tracking-[2.88px] uppercase">
              Get in touch
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="About Us">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[72px] items-center px-[20px] md:px-[180px] py-[90px] relative w-full">
          <DescriptionSection />
          <ImagePlaceholder />
          <ImagePlaceholder />
          <QuoteSection />
          <ImagePlaceholder />
          <WorkWithUsCTA />
        </div>
      </div>
    </div>
  );
}

function RelatedWorks() {
  return (
    <div
      className="bg-white relative shrink-0 w-full mt-20"
      data-name="Related Works Section"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[20px] md:px-[180px] py-[60px] md:py-[90px] relative w-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
            <p className="font-['EB_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2d3648] text-[16px] text-center text-nowrap tracking-[6.4px] uppercase">
              More from our portfolio
            </p>

            <div className="flex flex-col md:flex-row gap-[32px] items-center w-full justify-center">
              <Link
                to="/selected-works"
                className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0 cursor-pointer group"
                data-name="Button Link"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid inset-0 pointer-events-none group-hover:border-[#53627e] transition-colors"
                />
                <p className="font-['Avenir_LT_Pro:55_Roman',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[12px] text-center text-nowrap tracking-[2.88px] uppercase">
                  View all works
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkDetailsPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans w-full">
      <HeroSection />
      <MainContent />
      <RelatedWorks />
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
