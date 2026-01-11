import { LinkUnderline } from "@/components/shared/blocks";

export function AboutBookCall() {
  return (
    <section className="relative">
      <div className="container">
        <div
          className="content-stretch flex flex-col gap-[32px] items-center"
          data-name="Container"
        >
          <div
            className="font-eb-garamond font-normal leading-[0] relative 
           text-[16px] text-center w-full max-w-[524px] px-4"
          >
            <p className="leading-[normal] mb-0">
              We're architects, not decorators. Strategists, not theorists.
              Partners, not vendors.
            </p>
            <br />
            <p className="leading-[normal]">
              <span>
                We measure success not in deliverables, but in the distance
                between where you started and where you arrive.{" "}
              </span>
              <span className="font-eb-garamond font-normal not-italic">
                We prioritize strategy first. Always.
              </span>
            </p>
          </div>
          <LinkUnderline href="/booking" text="BOOK A CALL" variant="router" />
        </div>
      </div>
    </section>
  );
}
