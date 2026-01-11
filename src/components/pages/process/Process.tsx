import { Image } from "@/components/shared/blocks";
import type { ProcessCardProp } from "@/types";

export function ProcessCard({
  id,
  title,
  services,
  description,
  descriptionItalic,
  isFirst = false,
  img,
}: ProcessCardProp) {
  return (
    <div
      id={id}
      className={`w-full ${isFirst ? "pb-[96px]" : "py-[96px]"} ${!isFirst ? "border-t border-[#a0abc0]" : ""}`}
    >
      <div className="flex flex-col gap-[64px]">
        {/* Image - only show for non-first sections */}
        <div className="w-full h-[708px] bg-[#a0abc0] rounded-[4px] overflow-hidden relative">
          <Image imgSrc={img} className="size-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[16px] max-w-[980px] mx-auto">
          {/* Title */}
          <div className="font-eb-garamond text-[16px] text-[#53627e] tracking-[7.68px] uppercase">
            <span className="font-eb-garamond font-semibold">RE:</span>
            {title.replace("RE:", "")}
          </div>

          {/* Services and Description */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[161px] items-start">
            {/* Services List */}
            <div className="w-[239px] ">
              <div className="font-eb-garamond text-[16px] text-[#53627e] leading-[normal]">
                {services.map((service, index) => (
                  <p key={index} className="mb-0">
                    {service}
                  </p>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="md:flex-1">
              <div className="font-eb-garamond text-[16px] text-[#53627e] leading-[normal]">
                {description.map((paragraph, index) => {
                  // Check if this paragraph contains the italic text
                  if (paragraph === descriptionItalic) {
                    return (
                      <p
                        key={index}
                        className="font-eb-garamond font-medium italic mb-0"
                      >
                        {paragraph}
                      </p>
                    );
                  }

                  // Check if paragraph contains inline italic
                  if (
                    paragraph.includes("clarity.") ||
                    paragraph.includes("tangible.") ||
                    paragraph.includes("told right.")
                  ) {
                    const parts = paragraph.split(
                      /\b(clarity|tangible|told right)\b/
                    );
                    return (
                      <p key={index} className="mb-0">
                        {parts.map((part, i) => {
                          if (part === "clarity" || part === "tangible") {
                            return (
                              <span
                                key={i}
                                className="font-eb-garamond font-medium italic"
                              >
                                {part}
                              </span>
                            );
                          }
                          if (part === "told right") {
                            return (
                              <span
                                key={i}
                                className="font-eb-garamond font-medium italic"
                              >
                                {part}
                              </span>
                            );
                          }
                          return part;
                        })}
                      </p>
                    );
                  }

                  // Empty paragraph for spacing
                  if (paragraph === "") {
                    return (
                      <p key={index} className="mb-0">
                        &nbsp;
                      </p>
                    );
                  }

                  // Regular paragraph
                  return (
                    <p key={index} className="mb-0">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
