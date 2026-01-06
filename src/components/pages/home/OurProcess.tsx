import { PlaceholderImage } from "../../shared/blocks/Placeholder";

function ButtonLink() {
  return (
    <div
      className="content-stretch flex items-center justify-center pb-[12px] pt-0 px-0 relative shrink-0 cursor-pointer"
      data-name="Button Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] border-solid inset-0 pointer-events-none"
      />
      <p className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 text-[#53627e] text-[14px] text-center text-nowrap tracking-[5.6px]">
        VIEW OUR PROCESS
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full max-w-[480px]"
      data-name="Heading"
    >
      <p className="font-gt-super-ds leading-[normal] not-italic relative shrink-0 text-[#2d3648] text-[22px] text-center tracking-[-0.44px] w-full max-w-[371px]">
        <span>
          We&apos;re human,
          <br aria-hidden="true" />
          <span> We don&apos;t </span>
        </span>
        <span className="font-gt-super-ds italic">rush</span>
        <span>
          .<br aria-hidden="true" />
          We
        </span>
        <span className="font-gt-super-ds italic"> think </span>
        <span>. We build. We </span>
        <span className="font-gt-super-ds italic">refine</span>.
      </p>
      <p className="font-eb-garamond font-normal leading-[normal] min-w-full relative shrink-0 text-[#53627e] text-[16px] text-center w-[min-content]">
        Every brand we work with deserves clarity, and clarity is a process
        built with care and intention. Our services are delivered through five
        strategic pillars, the ways we partner with you to build, grow, and
        sustain your brand.
      </p>
      <ButtonLink />
    </div>
  );
}

function Image4() {
  return (
    <div
      className="basis-0 bg-[#a0abc0] grow min-h-[400px] min-w-px overflow-clip relative shrink-0 w-full"
      data-name="Image"
    >
      <PlaceholderImage />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px relative shrink-0 w-full">
      <Image4 />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="content-stretch flex h-[708px] items-start relative shrink-0 w-full"
      data-name="Row"
    >
      <Frame7 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
      <Row1 />
    </div>
  );
}

export function OurProcess() {
  return (
    <section className="relative">
      <div className="shrink-0 w-full" data-name="About Us">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center px-[20px] md:px-[180px] py-[90px] relative w-full">
            <Container2 />
          </div>
        </div>
      </div>
    </section>
  );
}
