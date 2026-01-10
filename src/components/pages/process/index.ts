import {
  imgServiceDefine,
  imgServiceDesign,
  imgServiceExpress,
  imgServiceScale,
  imgServiceStructure,
} from "@/assets/images";

import type { ProcessCardProp } from "@/types";

export * from "./ProcessSection";

export const processSteps: ProcessCardProp[] = [
  {
    id: "re-define",
    img: imgServiceDefine,
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
    img: imgServiceDesign,
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
    img: imgServiceExpress,
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
    img: imgServiceScale,
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
    img: imgServiceStructure,
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
