import type { PropsWithChildren } from "react";
import { Image } from "../../shared/blocks/";
import { Link } from "@tanstack/react-router";
import { imgHomeAbout, imgHomeWorks } from "@/assets";
import type { ImageProp } from "@/types";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-center leading-[normal] 
      relative  text-center "
      data-name="Heading"
    >
      <h3 className="text-[18px] md:text-[22px] leading-[25px] font-normal text-center tracking-[-0.44px] w-full max-w-[500px]">
        <span>We meet you </span>
        <span className="not-italic">where you are </span>
        <span>and build the systems that </span>
        <span className="not-italic">move you forward.</span>
      </h3>
      <p className="w-full max-w-[500px]">
        We power the growth engines of brands ready to scale globally and
        sustainably, designing the systems that give creative businesses the
        structure to grow intelligently and sustainably.
      </p>
    </div>
  );
}

function ImageLink({ href, imgSrc = undefined }: ImageProp) {
  return (
    <Link
      to={href}
      className="basis-0 bg-[#a0abc0] grow  h-[400px] md:h-[615px] overflow-clip relative  w-full"
    >
      <Image imgSrc={imgSrc} />
    </Link>
  );
}

function HypenButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative ">
      <div className="bg-[#0a111f] h-px  w-[24px]" />
      <p className="font-gt-super-txt leading-[normal] italic relative  text-[16px] ">
        view more
      </p>
    </div>
  );
}

function Container({ children }: PropsWithChildren) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start max-w-[445px]">
      {children}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      className="relative py-[32px] md:py-[64px]"
      data-name="Selected Works"
    >
      <div className="container">
        <div
          className="content-stretch flex flex-col gap-[72px] w-full"
          data-name="Container"
        >
          <Heading />
          <div
            className="content-stretch flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[80px] w-full"
            data-name="Row"
          >
            <Container>
              <ImageLink href="/works" imgSrc={imgHomeWorks} />
              <Link
                to="/works"
                className="content-stretch flex items-center justify-between relative  w-full"
              >
                <p
                  className="font-eb-garamond font-medium leading-[normal] relative 
                   text-[14px] md:text-base  tracking-[6.4px]"
                >
                  SELECTED WORK
                </p>
                <HypenButton />
              </Link>
            </Container>

            <Container>
              <ImageLink href="/about-us" imgSrc={imgHomeAbout} />
              <Link
                to="/about-us"
                className="content-stretch flex items-center justify-between relative w-full"
              >
                <p
                  className="font-eb-garamond font-medium leading-[normal] relative
                  text-[14px] md:text-base  tracking-[6.4px]"
                >
                  ABOUT US
                </p>
                <HypenButton />
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
