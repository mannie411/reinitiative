import { ButtonUnderline } from "@/components/shared/blocks";
import { ImagePlaceholder } from "@/components/shared/blocks/Icons";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[620px] px-4"
      data-name="Heading"
    >
      <p
        className="font-gt-super-ds leading-[normal] not-italic 
      relative shrink-0  text-[22px] text-center tracking-[-0.44px] w-full max-w-[362px]"
      >
        <span>If you're ready to create and collaborate, we'd love</span>
        <span className="not-italic"> to hear from you</span>
      </p>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[300px] md:h-[478px] items-start justify-self-stretch relative shrink-0 w-full">
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
  );
}

export function CareersJoin() {
  return (
    <section className="relative ">
      <div
        className="content-stretch flex flex-col gap-[64px] items-center 
      px-[20px] md:px-[180px] py-[90px] relative shrink-0 w-full "
        data-name="Container"
      >
        <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
          <Heading />
          <ButtonUnderline
            text="JOIN US"
            onClick={() => {
              console.log("Join us");
            }}
          />
        </div>

        <div
          className="gap-[32px] grid grid-cols-1 md:grid-cols-2 relative shrink-0 w-full"
          data-name="Row"
        >
          {[...Array(4)].map((i) => (
            <Image key={`item-${i}`} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
