import {
  imgCompany1,
  imgCompany2,
  imgCompany3,
  imgCompany4,
  imgCompany5,
  imgCompany7,
  imgCompany8,
  imgCompany9,
} from "@/assets/images";

function Logos() {
  return (
    <div
      className="content-stretch flex items-start justify-center relative 
     w-full flex-wrap gap-8 "
      data-name="Logos"
    >
      <div
        className="h-[37.604px] relative shrink-0 w-[96.429px]"
        data-name="company-8"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany8}
        />
      </div>
      <div
        className="h-[28.565px] relative shrink-0 w-[95.536px]"
        data-name="company-4"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany4}
        />
      </div>
      <div
        className="h-[46.706px] relative shrink-0 w-[66.071px]"
        data-name="company-2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany2}
        />
      </div>
      <div
        className="h-[35.714px] relative shrink-0 w-[101.786px]"
        data-name="company-7"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCompany7}
        />
      </div>
      <div
        className="h-[50.295px] relative shrink-0 w-[76.786px]"
        data-name="company-5"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany5}
        />
      </div>
      <div
        className="h-[28.735px] relative shrink-0 w-[95.536px]"
        data-name="company-3"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany3}
        />
      </div>
      <div
        className="h-[48.898px] relative shrink-0 w-[53.571px]"
        data-name="company-9"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full"
          src={imgCompany9}
        />
      </div>
      <div
        className="h-[28.638px] relative shrink-0 w-[106.25px]"
        data-name="company-1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCompany1}
        />
      </div>
    </div>
  );
}

export default function CompanyLogos() {
  return (
    <section className="relative" data-name="Company we keep">
      <div className="container">
        <div
          className="content-stretch flex flex-col items-center 
        overflow-clip size-full py-[40px] md:py-[80px] "
        >
          <div
            className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full"
            data-name="Container"
          >
            <p
              className="font-eb-garamond font-normal italic leading-[normal] 
              min-w-full relative shrink-0 text-[18px] text-center w-[min-content]"
            >
              The company we keep.
            </p>
            <Logos />
          </div>
        </div>
      </div>
    </section>
  );
}
