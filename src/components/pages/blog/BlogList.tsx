import { useState, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/shared/blocks";
import { AnimatePresence, motion, type Variants } from "motion/react";

function BlogCardContent({ articleId }: { articleId: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative  w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative ">
        <div className="content-stretch flex items-center relative ">
          <p
            className="font-avenir-lt leading-[normal] not-italic relative  
          text-[#a0abc0] text-[9px]  tracking-[4px] uppercase"
          >
            CATEGORY
          </p>
        </div>
        <p
          className="font-eb-garamond font-medium leading-[normal] relative  
         text-[12px]  tracking-[4px] uppercase group-hover:text-[#53627e] transition-colors"
        >
          name of article
        </p>
      </div>

      <Link
        to="/blog/$articleId"
        params={{ articleId }}
        className="content-stretch flex items-center justify-center pb-[8px] pt-0 px-0 
        relative  cursor-pointer"
        data-name="Button"
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          e.stopPropagation();
          window.scrollTo(0, 0);
        }}
      >
        <div
          aria-hidden="true"
          className="absolute border-[0px_0px_1px] border-[rgba(160,171,192,0.8)] 
          border-solid inset-0 pointer-events-none group-hover:border-[#53627e] transition-colors"
        />
        <p
          className="font-avenir-lt leading-[normal] not-italic relative  
        text-[#53627e] text-[10px] text-center  tracking-[2.88px] uppercase"
        >
          read more
        </p>
      </Link>
    </div>
  );
}

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
        Blog articles
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

  const categories = ["all", "category", "category", "category", "category"];

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
      overflow-clip relative  w-full"
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

function BlogCardImage() {
  return (
    <div
      className="bg-[#a0abc0] h-[300px] md:h-[458px] overflow-clip relative 
       w-full group-hover:opacity-90 transition-opacity"
      data-name="Image"
    >
      <div
        className="absolute left-[calc(50%-0.33px)] size-[80px] top-1/2 
        translate-x-[-50%] translate-y-[-50%] group-hover:scale-105 transition-transform"
        data-name="image-01"
      >
        <ImagePlaceholder />
      </div>
    </div>
  );
}

function BlogCard({ articleId }: { articleId: string }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start 
      relative  w-full cursor-pointer group  duration-300"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <BlogCardImage />
      <BlogCardContent articleId={articleId} />
    </div>
  );
}

function BlogGrid() {
  // Creating a grid with 8 items as per the Figma import
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-x-[32px] gap-y-[64px] items-start relative  w-full"
      data-name="Row"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <BlogCard key={i} articleId={`article-${i + 1}`} />
      ))}
    </div>
  );
}

export function BlogList() {
  return (
    <section className="relative">
      <div className="container" data-name="Container">
        <div className="flex flex-col items-center size-full">
          <motion.div
            layout
            className="content-stretch flex flex-col items-center
        relative w-full gap-[64px]"
          >
            <FilterSection />
            <BlogGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
