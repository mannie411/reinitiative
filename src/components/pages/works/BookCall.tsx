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

export function BookCall() {
  return <Button1 />;
}
