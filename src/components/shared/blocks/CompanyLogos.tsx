import { motion, type Variants } from "motion/react";
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

const companies = [
  { img: imgCompany8, name: "company-8", w: "96.429px", h: "37.604px" },
  { img: imgCompany4, name: "company-4", w: "95.536px", h: "28.565px" },
  { img: imgCompany2, name: "company-2", w: "66.071px", h: "46.706px" },
  { img: imgCompany7, name: "company-7", w: "101.786px", h: "35.714px" },
  { img: imgCompany5, name: "company-5", w: "76.786px", h: "50.295px" },
  { img: imgCompany3, name: "company-3", w: "95.536px", h: "28.735px" },
  { img: imgCompany9, name: "company-9", w: "53.571px", h: "48.898px" },
  { img: imgCompany1, name: "company-1", w: "106.25px", h: "28.638px" },
];

// 1. Define the orchestration variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // This is where the magic happens: children will stagger automatically
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Logos() {
  return (
    <motion.div
      className="flex flex-wrap items-start justify-center gap-8 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the section is visible
    >
      {companies.map((company) => (
        <motion.div
          key={company.name}
          className="relative"
          variants={itemVariants}
          style={{ width: company.w, height: company.h }}
        >
          <img
            src={company.img}
            alt=""
            className="absolute inset-0 size-full object-contain pointer-events-none filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
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
            className="content-stretch flex flex-col gap-[36px] items-center relative  w-full"
            data-name="Container"
          >
            <p
              className="font-eb-garamond font-normal italic leading-[normal] 
              min-w-full relative  text-[18px] text-center w-[min-content]"
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
