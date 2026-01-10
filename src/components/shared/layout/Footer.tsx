import svgPaths from "@/assets/svg";
import { Link } from "@tanstack/react-router";

const Links = () => {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row items-center 
      justify-between relative  w-full gap-4 md:gap-0"
      data-name="Links"
    >
      <div
        aria-hidden="true"
        className="hidden absolute border-[#53627e] border-[0px_0px_1px]
         border-solid inset-0 pointer-events-none"
      />
      <Link
        to="https://www.instagram.com/thereinitiative/"
        target="_blank"
        className="order-1 font-eb-garamond font-normal leading-[normal] relative  
        text-[9px] text-center text-nowrap text-white tracking-[5.6px] uppercase
      cursor-pointer hover:underline"
      >
        instagram
      </Link>
      <Link
        to=""
        className="order-3 md:order-2 font-eb-garamond font-normal leading-[normal] relative  
      text-[9px] text-center text-nowrap text-white tracking-[5.6px] uppercase
      cursor-pointer hover:underline"
      >
        privacy policy
      </Link>
      <Link
        to="https://www.linkedin.com/company/the-reinitiative"
        target="_blank"
        className="order-3 font-eb-garamond font-normal leading-[normal] relative  
      text-[9px] text-center text-nowrap text-white tracking-[5.6px] uppercase
      cursor-pointer hover:underline"
      >
        LinkedIn
      </Link>
    </div>
  );
};

const Copyright = () => {
  return (
    <div
      className="relative  hidden items-center text-white space-x-2 align-middle"
      data-name="copyright"
    >
      <svg
        className="inline-block size-[16px]"
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
      <p className="inline-block font-eb-garamond text-[12px] tracking-[6.6px] text-white">
        <span> 2026</span>
      </p>
    </div>
  );
};

const LinksCopyright = () => {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center 
    relative  w-full"
      data-name="Links+copyright"
    >
      <Links />
      <Copyright />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-[#2d3648] " data-name="Footer">
      <div
        className="relative w-full content-stretch flex flex-col gap-[36px] items-center 
        px-[20px] md:px-[64px] py-[49px]  text-white"
      >
        <p
          className="font-gt-super-ds leading-[normal] not-italic relative 
            text-white text-[16px] text-center  tracking-[5.2px] uppercase w-full"
        >
          Re:Initiative
        </p>
        <div
          className="content-stretch flex flex-col  md:flex-row gap-[10px] items-center 
      justify-center relative  w-full"
          data-name="Copyright"
        >
          <p
            className="font-eb-garamond font-normal leading-[16px] relative  
      text-[9px] text-center text-white tracking-[6.6px] uppercase"
          >
            created in house. all rights reserved
          </p>
        </div>
        <LinksCopyright />
      </div>
    </footer>
  );
};

export default Footer;
