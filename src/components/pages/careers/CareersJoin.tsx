import { Image, LinkUnderline } from "@/components/shared/blocks";
import { team } from ".";

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative  w-full max-w-[620px] px-4"
      data-name="Heading"
    >
      <p
        className="font-gt-super-ds leading-[25px] not-italic font-normal
      relative   text-[22px] text-center tracking-[-0.44px] w-full max-w-[500px]"
      >
        If you're ready to create and
        <br />
        collaborate, we'd love
        <span className="not-italic"> to hear from you</span>
      </p>
    </div>
  );
}

export function CareersJoin() {
  return (
    <section className="relative ">
      <div className="container">
        <div
          className="content-stretch flex flex-col gap-[64px] items-center 
       py-[90px] relative  w-full "
          data-name="Container"
        >
          <div className="content-stretch flex flex-col gap-[32px] items-center relative  w-full">
            <Heading />

            <LinkUnderline
              href="mailto:people@thereinitiative.com"
              text="JOIN US"
              variant="default"
            />
          </div>

          <div
            className="gap-[32px] grid grid-cols-1 md:grid-cols-2 relative  w-full"
            data-name="Row"
          >
            {team.map(({ name, role, image }, i) => (
              <div
                key={`team-${i}`}
                className="content-stretch flex flex-col justify-end gap-[32px] h-[300px] md:h-[500px] 
                items-start justify-self-stretch relative  w-full group overflow-clip"
              >
                <Image
                  imgSrc={image}
                  className="absolute size-full z-0 transition-all duration-300 group-hover:scale-105"
                />

                <div className="relative bottom-0 z-10 w-full">
                  <div
                    className="absolute size-full z-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(18, 25, 42, 0) 0%, #12192A 136.06%)",
                    }}
                  />
                  <div className="relative px-8 py-12 z-10">
                    <p className="text-white font-medium text-[20px] uppercase tracking-wide">
                      {name}
                    </p>
                    <p className="text-white text-[14px] font-medium uppercase tracking-wide">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
