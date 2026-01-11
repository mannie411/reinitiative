import type { ButtonProp, LinkProp } from "@/types";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";

export function ButtonUnderline({ text = "", onClick }: ButtonProp) {
  return (
    <button
      className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 
      relative  cursor-pointer group"
      data-name="Button"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] 
        border-solid inset-0 pointer-events-none group-hover:border-[#2d3648] transition-colors"
      />
      <p
        className="font-eb-garamond font-semibold leading-[normal] relative 
       text-[#53627e] text-[14px] text-center  tracking-[6.4px] group-hover:text-[#2d3648] transition-colors"
      >
        {text}
      </p>
    </button>
  );
}

export function LinkUnderline({ href, text, variant = "default" }: LinkProp) {
  return (
    <Fragment>
      {variant === "router" && (
        <Link
          to={href}
          className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 
      relative  cursor-pointer group"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] 
            border-solid inset-0 pointer-events-none group-hover:border-[#2d3648] transition-colors"
          />
          <p
            className="font-eb-garamond font-semibold leading-[normal] relative  
          text-[#53627e] text-[14px] text-center  tracking-[6.4px] group-hover:text-[#2d3648]
          transition-colors uppercase"
          >
            {text}
          </p>
        </Link>
      )}
      {variant === "default" && (
        <a
          href={href}
          className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 
      relative  cursor-pointer group"
        >
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)]
             border-solid inset-0 pointer-events-none group-hover:border-[#2d3648] transition-colors"
          />
          <p
            className="font-eb-garamond font-semibold leading-[normal] relative  
          text-[#53627e] text-[14px] text-center  tracking-[6.4px] group-hover:text-[#2d3648] transition-colors"
          >
            {text}
          </p>
        </a>
      )}
    </Fragment>
  );
}
