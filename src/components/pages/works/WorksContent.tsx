import { useState } from "react";
import { type Variants, motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Image, LinkUnderline } from "@/components/shared/blocks";

const categories = ["all", "category", "category", "category", "category"];

function HeadingCategoryLink({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row items-center 
      justify-between  py-[24px] relative  w-full"
      data-name="Heading+Category Link"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#a0abc0] border-[1px_0px] border-solid inset-0 pointer-events-none"
      />
      <p
        className="font-eb-garamond font-normal leading-[normal] relative  
      text-[#53627e] text-[16px]  tracking-[4px] uppercase"
      >
        SELECTION
        <span className="italic lowercase"> of </span>
        WORKS
      </p>
      <button onClick={onClick}>
        <p
          className="font-eb-garamond font-normal leading-[normal] relative  cursor-pointer
       text-[#53627e] text-[16px]  text-right tracking-[4px] hidden md:block uppercase"
        >
          Categories
        </p>
      </button>
    </div>
  );
}

function CategoryLinks() {
  // 1. Container variants to handle the orchestration
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each item
        delayChildren: 0.2, // Wait for the panel expansion to finish slightly
      },
    },
  };

  // 2. Item variants for the sliding effect
  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="content-stretch flex flex-wrap font-avenir-lt gap-[24px] md:gap-[72px] 
      items-center leading-[normal] not-italic py-4 relative justify-center
      text-[#2d3648] text-[12px] tracking-[2.4px] uppercase"
      data-name="Category Links"
    >
      {categories.map((cat, idx) => (
        <motion.li
          key={idx}
          variants={item}
          className={`relative cursor-pointer hover:text-[#53627e] transition-colors ${
            cat === "all" ? "font-bold" : ""
          }`}
        >
          <span>{cat}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function FilterSection() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = () => setIsCategoryOpen((prev) => !prev);
  return (
    <motion.div
      // layout
      className="content-stretch flex flex-col gap-[24px] items-center 
      overflow-clip relative  w-full min-h-[150px]"
      data-name="Heading+Category Links"
    >
      <HeadingCategoryLink onClick={toggleCategory} />
      <AnimatePresence>
        {isCategoryOpen && (
          <motion.div
            key="category-content"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
              transition: {
                height: { duration: 0.4, ease: "easeOut" },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -10,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 },
              },
            }}
            className="w-full overflow-hidden" // Prevents content pop during height transition
          >
            <CategoryLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function WorkItem({ brand, category }: { brand: string; category: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative  w-full mb-2">
      <div
        className="bg-[#a0abc0] h-[458px] overflow-clip relative  w-full group-hover:opacity-90 transition-opacity"
        data-name="Image"
      >
        <Image className="group-hover:scale-105" />
      </div>
      <p
        className="font-avenir-lt leading-[normal] not-italic relative 
           text-[#53627e] text-[9px]  tracking-[4.8px] uppercase"
      >
        {category}
      </p>
      <Link
        to="/works/$workId"
        params={{ workId: brand.toLowerCase().replace(/\s+/g, "-") }}
        className="content-stretch flex flex-col gap-[32px] items-start relative  
      w-full cursor-pointer group transition-all duration-300"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative  w-full">
          <p
            className="font-medium leading-[normal] relative  text-[#2d3648] text-[12px]  
        tracking-[6.4px] uppercase group-hover:text-[#53627e] transition-colors"
          >
            {brand}
          </p>
        </div>
      </Link>
    </div>
  );
}

export function RelatedWorks() {
  return (
    <section className="relative  w-full" data-name="Related Works Section">
      <div className="container flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div
          className="content-stretch flex flex-col gap-[64px] items-center 
         relative w-full"
        >
          <div className="content-stretch flex flex-col gap-[32px] items-center relative  w-full">
            <p
              className=" font-medium leading-[normal] relative  
            text-[16px] text-start  tracking-[6.4px] uppercase w-full"
            >
              More Selected Works
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-3  gap-[32px] items-start relative  w-full"
              data-name="Row"
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <WorkItem
                  key={i}
                  brand={"Name of Brand"}
                  category={"Category"}
                />
              ))}
            </div>

            <LinkUnderline href="/works" text="View More" variant="router" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorksGrid() {
  const works = [
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
    { brand: "NAME OF BRAND", category: "CATEGORY" },
  ];

  return (
    <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
      <div
        className="content-stretch flex flex-col gap-[72px] items-center 
  relative w-full"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2  gap-[32px] items-start relative  w-full"
          data-name="Row"
        >
          {works.map((work, index) => (
            <WorkItem key={index} brand={work.brand} category={work.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkList() {
  return (
    <section className="relative w-full">
      <div className="container ">
        <div className="relative w-full content-stretch flex flex-col items-center gap-[24px] ">
          <FilterSection />
          <WorksGrid />
          <div className="flex justify-center my-4 ">
            <LinkUnderline
              href="/booking"
              text="Book a Call"
              variant={"router"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
