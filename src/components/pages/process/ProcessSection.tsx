interface ProcessSectionProps {
  title: string;
  services: string[];
  description: string[];
  descriptionItalic: string;
  isFirst?: boolean;
}

export function ProcessSection({
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
      <div className="max-w-[1440px] mx-auto px-[180px]">
        <div className="flex flex-col gap-[64px]">
          {/* Image - only show for non-first sections */}
          {!isFirst && (
            <div className="w-full h-[708px] bg-[#a0abc0] rounded-[4px] overflow-hidden relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[80px]">
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="0 0 80 80"
                >
                  <path
                    d="M10 23.3333H70V63.3333C70 65.1014 69.2976 66.7971 68.0474 68.0474C66.7971 69.2976 65.1014 70 63.3333 70H16.6667C14.8986 70 13.2029 69.2976 11.9526 68.0474C10.7024 66.7971 10 65.1014 10 63.3333V23.3333Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                  <path
                    d="M56.6663 70V46.6667C56.6663 44.8986 55.964 43.2029 54.7137 41.9526C53.4635 40.7024 51.7678 40 49.9997 40H29.9997C28.2316 40 26.5359 40.7024 25.2856 41.9526C24.0354 43.2029 23.333 44.8986 23.333 46.6667V70"
                    stroke="white"
                    strokeWidth="5"
                  />
                  <path
                    d="M70 23.3333L40 10L10 23.3333"
                    stroke="white"
                    strokeWidth="5"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-[16px]">
            {/* Title */}
            <div className="font-eb-garamond text-[16px] text-[#53627e] tracking-[7.68px] uppercase">
              <span className="font-eb-garamond font-semibold">RE:</span>
              {title.replace("RE:", "")}
            </div>

            {/* Services and Description */}
            <div className="flex gap-[161px] items-start">
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
              <div className="flex-1">
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
