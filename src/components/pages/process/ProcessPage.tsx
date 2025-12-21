import { ProcessSection } from "./ProcessSection";
import { CompanyLogos, Testimonials } from "../home";

const processSteps = [
  {
    id: "re-define",
    title: "RE:DEFINE",
    services: [
      "Brand Strategy Development",
      "Market Research & Analysis",
      "Competitive Intelligence",
      "Brand Positioning",
      "Audience Segmentation",
      "Brand Architecture",
    ],
    description: [
      "We start where it matters most: clarity.",
      "Through deep consultation, we uncover your brand's truth—the pain points you solve, the challenges you face, how you're perceived versus how you want to be seen.",
      "",
      "This is where confusion ends and direction begins.",
    ],
    descriptionItalic: "This is where confusion ends and direction begins.",
  },
  {
    id: "re-design",
    title: "RE:DESIGN",
    services: [
      "Logo & Visual Identity Development",
      "Brand Guidelines",
      "Website Design & Development",
      "UX/UI Design",
      "Packaging Design",
      "Print Collateral",
      "Brand Asset Creation",
    ],
    description: [
      "Strategy becomes tangible.",
      "",
      "We design everything—identity systems, digital experiences, spatial design, collateral. Every element working together to express who you are, instantly and unmistakably.",
      "",
      "From concept to execution. Tangible and intangible.",
    ],
    descriptionItalic: "From concept to execution. Tangible and intangible.",
  },
  {
    id: "re-express",
    title: "RE:EXPRESS",
    services: [
      "Brand Storytelling",
      "Content Strategy",
      "Copywriting & Messaging",
      "Photography",
      "Videography",
      "Podcast Production",
      "Personal Branding (Founder/Executive)",
      "Brand Voice Development",
    ],
    description: [
      "Your story, told right.",
      "",
      "We craft the content that positions you as the inevitable choice. Photography, video, podcasts, personal branding—every medium strategized to communicate your value effectively.",
      "",
      "Content with purpose. Narrative with impact.",
    ],
    descriptionItalic: "Content with purpose. Narrative with impact.",
  },
  {
    id: "re-scale",
    title: "RE:SCALE",
    services: [
      "Digital Marketing Strategy",
      "SEO & SEM",
      "Social Media Management",
      "Email Marketing",
      "Performance Analytics",
      "Conversion Optimization",
      "Growth Marketing",
    ],
    description: [
      "Visibility that converts.",
      "",
      "We amplify your brand across channels—digital campaigns, social media, content distribution, partnerships. Every initiative measured, optimized, and scaled for consistent growth.",
      "",
      "Strategic reach. Exponential impact.",
    ],
    descriptionItalic: "Strategic reach. Exponential impact.",
  },
  {
    id: "re-structure",
    title: "RE:STRUCTURE",
    services: [
      "Brand Management Systems",
      "Asset Management",
      "Brand Governance",
      "Internal Brand Training",
      "Brand Evolution Planning",
      "Ongoing Brand Consultation",
    ],
    description: [
      "Built to endure.",
      "",
      "We implement systems and processes that keep your brand consistent and adaptive. From asset management to internal training, your brand operates as a unified system across every touchpoint.",
      "",
      "Long-term infrastructure. Sustained excellence.",
    ],
    descriptionItalic: "Long-term infrastructure. Sustained excellence.",
  },
];

export function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfd]">
      {/* Hero Section */}
      <section className="w-full py-[96px]">
        <div className="max-w-[1440px] mx-auto px-[180px]">
          <div className="flex flex-col items-center gap-[64px]">
            {/* Heading */}
            <div className="flex flex-col items-center gap-[16px] max-w-[620px]">
              <h1 className="font-['GT_Super_Ds_Trial:Rg',sans-serif] text-[22px] text-[#2d3648] text-center tracking-[-0.44px]">
                <span>Five pillars. </span>
                <span className="font-gt-super-ds">One</span>{" "}
                <span className="font-gt-super-ds italic">transformation.</span>
              </h1>
              <p className="font-eb-garamond text-[16px] text-[#53627e] text-center max-w-[420px]">
                We don't solve in fragments. We rebuild completely—from strategy
                to scale, every dimension integrated.
              </p>
            </div>

            {/* Category Links */}
            <div className="w-full max-w-[1080px] border-t border-b border-[rgba(160,171,192,0.5)] flex items-center justify-between px-0 py-[24px]">
              {processSteps.map((step) => (
                <p
                  key={step.id}
                  className="font-eb-garamond text-[16px] text-[#53627e] tracking-[3.2px]"
                >
                  {step.title}
                </p>
              ))}
            </div>

            {/* First Section Image */}
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
          </div>
        </div>
      </section>

      {/* Process Sections */}
      {processSteps.map((step, index) => (
        <ProcessSection
          key={step.id}
          title={step.title}
          services={step.services}
          description={step.description}
          descriptionItalic={step.descriptionItalic}
          isFirst={index === 0}
        />
      ))}

      {/* Company Logos */}
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
