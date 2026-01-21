import { motion, type Variants } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
import {
  imgCompany1,
  imgCompany2,
  imgCompany3,
  imgCompany4,
  imgCompany5,
  imgCompany7,
  imgCompany8,
  imgCompany9,
} from "@/assets";
import { cn } from "@/lib";

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

// function Logos() {
//   return (
//     <motion.div
//       className="flex gap-[20px] md:items-center md:justify-between w-full hover:pause"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {companies.map((company) => (
//         <motion.div
//           key={company.name}
//           className={cn("relative h-[40px] w-(--logo-width)")}
//           variants={itemVariants}
//           style={{ "--logo-width": company.w }}
//         >
//           <img
//             src={company.img}
//             alt=""
//             className={cn(
//               `absolute inset-0 size-full object-contain pointer-events-none filter
//               grayscale hover:grayscale-0 transition-all duration-300`
//             )}
//           />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

function Logos() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const marqueeLogos = [...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        // 1. Only use variants on desktop to avoid mobile conflicts
        variants={isDesktop ? containerVariants : {}}
        initial={isDesktop ? "hidden" : "visible"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={cn(
          // 2. Ensure opacity-100 is forced if variants fail
          "flex items-center gap-[20px] w-max animate-marquee pause-on-hover opacity-100",
          "md:w-full md:justify-between md:animate-none md:gap-0"
        )}
      >
        {marqueeLogos.map((company, idx) => (
          <motion.div
            key={`${company.name}-${idx}`}
            // 3. Disable item variants on mobile if they cause the "y: 20" stuck issue
            variants={itemVariants}
            className={cn(
              "relative h-[40px] shrink-0",
              idx >= companies.length && "md:hidden"
            )}
            // IMPORTANT: use inline style for width if Tailwind (--) vars are failing
            style={{ width: company.w }}
          >
            <img
              src={company.img}
              alt={company.name}
              className="absolute inset-0 size-full object-contain filter grayscale"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 4. FIX: You had 'hidden' class here! Remove it to see the gradients */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white md:hidden" /> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white md:hidden" /> */}
    </div>
  );
}

export default function CompanyLogos() {
  return (
    <section className="relative" data-name="Company we keep">
      <div className="container overflow-clip size-full py-[40px] md:py-[80px] space-y-12">
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
        </div>
        <Logos />
      </div>
    </section>
  );
}
