import svgPaths from "@/assets/svg/svg-rmxwyj29u9";

const Links = () => {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row items-center justify-between pb-[24px] pt-4 md:pt-0 px-0 relative shrink-0 w-full gap-4 md:gap-0"
      data-name="Links"
    >
      <div
        aria-hidden="true"
        className="hidden md:block absolute border-[#53627e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-eb-garamond font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[5.6px] uppercase cursor-pointer hover:underline">
        instagram
      </p>
      <p className="font-eb-garamond font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[5.6px] uppercase cursor-pointer hover:underline">
        privacy policy
      </p>
      <p className="font-eb-garamond font-normal leading-[normal] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[5.6px] uppercase cursor-pointer hover:underline">
        pinterest
      </p>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="copyright">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="copyright">
          <path
            d={svgPaths.p2baff800}
            id="Vector"
            stroke="var(--stroke-0, #A0ABC0)"
            strokeWidth="0.5"
          />
          <path
            d={svgPaths.p379bb400}
            id="Vector_2"
            stroke="var(--stroke-0, #A0ABC0)"
            strokeLinecap="round"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
};

const Copyright1 = () => {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full"
      data-name="Copyright"
    >
      <p className="font-eb-garamond font-normal leading-[normal] relative shrink-0 text-[11px] text-center text-nowrap text-white tracking-[6.6px] uppercase">
        created in house. all rights reserved
      </p>
      <Copyright />
    </div>
  );
};

const LinksCopyright = () => {
  return (
    <div
      className="content-stretch flex flex-col gap-[36px] items-center md:items-start relative shrink-0 w-full"
      data-name="Links+copyright"
    >
      <Links />
      <Copyright1 />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full" data-name="Footer">
      <div className="bg-[#394e79] relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[56px] items-center px-[20px] md:px-[180px] py-[49px] relative w-full">
            <p className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 text-[26px] text-center text-white tracking-[5.2px] uppercase w-full">
              Re:Initiative
            </p>
            <LinksCopyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
