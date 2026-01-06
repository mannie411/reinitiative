import { ImagePlaceholder } from "@/components/shared/blocks/Icons";

interface ProcessSectionProps {
  title: string;
  services: string[];
  description: string[];
  descriptionItalic: string;
  isFirst?: boolean;
}

export function ProcessCard({
  title,
  services,
  description,
  descriptionItalic,
  isFirst = false,
}: ProcessSectionProps) {
  return (
    <section
      className={`w-full ${isFirst ? "pb-[96px]" : "py-[96px]"} ${!isFirst ? "border-t border-[#a0abc0]" : ""}`}
    >
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[180px]">
        <div className="flex flex-col gap-[64px]">
          {/* Image - only show for non-first sections */}
          <div className="w-full h-[708px] bg-[#a0abc0] rounded-[4px] overflow-hidden relative">
            <div className="animate-in fade-in slide-in-from-top-8 duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[80px]">
              <ImagePlaceholder />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[16px]">
            {/* Title */}
            <div className="font-eb-garamond text-[16px] text-[#53627e] tracking-[7.68px] uppercase">
              <span className="font-eb-garamond font-semibold">RE:</span>
              {title.replace("RE:", "")}
            </div>

            {/* Services and Description */}
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[161px] items-start">
              {/* Services List */}
              <div className="w-[239px] shrink-0">
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
    </section>
  );
}
