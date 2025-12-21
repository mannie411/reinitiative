function Button1() {
  return (
    <div
      className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0 cursor-pointer group"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid inset-0 pointer-events-none group-hover:border-[#2d3648] transition-colors"
      />
      <p className="font-eb-garamond font-semibold leading-[normal] relative shrink-0 text-[#53627e] text-[16px] text-center text-nowrap tracking-[6.4px] group-hover:text-[#2d3648] transition-colors">
        BOOK A CALL
      </p>
    </div>
  );
}

export function AboutBookCall() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center px-0 py-[90px] relative shrink-0 w-full max-w-[1440px] mx-auto"
      data-name="Container"
    >
      <div className="font-eb-garamond font-normal leading-[0] relative shrink-0 text-[#2d3648] text-[16px] text-center w-full max-w-[524px] px-4">
        <p className="leading-[normal] mb-0">{`We're architects, not decorators. Strategists, not theorists. Partners, not vendors.`}</p>
        <br />
        <p className="leading-[normal]">
          <span>{`We measure success not in deliverables, but in the distance between where you started and where you arrive. `}</span>
          <span className="font-eb-garamond font-normal italic">
            We prioritize strategy first. Always.
          </span>
        </p>
      </div>
      <Button1 />
    </div>
  );
}
