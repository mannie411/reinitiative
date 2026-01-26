import { useMemo, useState } from "react";
import { type Variants, motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { LinkUnderline, SkeletonList } from "@/components/shared/blocks";
import { usePosts } from "@/hooks";
import WorkItem from "./WorkItem";

const ex_categories = ["all", "category", "category", "category", "category"];

const ex_works = [
  {
    title: "NAME OF title",
    category: "CATEGORY",
    slug: "/works/work-one",
    img: undefined,
  },
  {
    title: "NAME OF title",
    category: "CATEGORY",
    slug: "/works/work-two",
    img: undefined,
  },
  {
    title: "NAME OF title",
    category: "CATEGORY",
    slug: "/works/work-three",
    img: undefined,
  },
  {
    title: "NAME OF title",
    category: "CATEGORY",
    slug: "/works/work-four",
    img: undefined,
  },
  {
    title: "NAME OF title",
    category: "CATEGORY",
    slug: "/works/work-five",
    img: undefined,
  },
  {
    title: "NAME OF title",
    category: "CATEGORY",
    slug: "/works/work-six",
    img: undefined,
  },
];

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
      text-[#53627e] text-[16px]  tracking-[4px] uppercase hidden md:inline-block"
      >
        SELECTION
        <span className="italic lowercase"> of </span>
        WORKS
      </p>
      <button onClick={onClick} className="flex gap-4">
        <p
          className="font-eb-garamond font-normal leading-[normal] relative  cursor-pointer
       text-[#53627e] text-[16px]  text-right tracking-[4px]  uppercase hidden md:inline-block"
        >
          Categories
        </p>

        <p
          className="inline-block md:hidden font-eb-garamond font-normal leading-[normal] relative  
      text-[#53627e] text-[16px]  tracking-[4px] uppercase  "
        >
          SELECTION
          <span className="italic lowercase"> of </span>
          WORKS
        </p>
        <ChevronDown className="inline-block md:hidden" color="#53627e" />
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
      {ex_categories.map((cat, idx) => (
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

export function WorksGrid({ data }: { data: any[] }) {
  console.log(ex_works);
  console.log(data);
  return (
    <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
      <div
        className="content-stretch flex flex-col gap-[72px] items-center 
  relative w-full"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3  gap-[32px] items-start relative  w-full"
          data-name="Row"
        >
          {data.map((work, index) => (
            <WorkItem key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkList() {
  const { data, isLoading } = usePosts({ postType: "work", pageSize: 6 });

  const works = useMemo(() => {
    return (
      data?.pages
        .flatMap((page) => page.nodes ?? [])
        .map(({ title, slug, categories, featuredImage, heroFields }) => ({
          title,
          slug,
          img: featuredImage?.node?.sourceUrl,
          category: categories?.nodes?.[0]?.name ?? "",
          header:
            heroFields?.hero?.at(0) === "full_image" ||
            heroFields?.hero?.at(0) === "full_image"
              ? "transparent"
              : "default",
        })) ?? []
    );
  }, [data]);

  return (
    <section className="relative w-full">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          {isLoading && <SkeletonList count={3} />}

          {!isLoading && (
            <>
              <FilterSection />
              <WorksGrid data={works} />
            </>
          )}

          <div className="flex justify-center my-4">
            <LinkUnderline
              href="/booking"
              text="Book a Call"
              variant="router"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
