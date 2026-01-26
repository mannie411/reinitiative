import { Link } from "@tanstack/react-router";
import { Image } from "@/components/shared/blocks";

function WorkItem({
  title,
  category,
  slug,
  img,
  header = "default",
}: {
  title: string;
  category: string;
  slug: string;
  img?: string;
  header?: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative  w-full mb-2">
      <div
        className="bg-[#a0abc0] h-[458px] overflow-clip relative  w-full group-hover:opacity-90 transition-opacity"
        data-name="Image"
      >
        <Image className="group-hover:scale-105" imgSrc={img} />
      </div>
      <p
        className="font-avenir-lt leading-[normal] not-italic relative 
           text-[#53627e] text-[9px]  tracking-[4.8px] uppercase"
      >
        {category}
      </p>
      <Link
        to="/works/$workId"
        // params={{ workId: title.toLowerCase().replace(/\s+/g, "-") }}
        params={{ workId: slug }}
        search={{ header }}
        preload="intent"
        className="content-stretch flex flex-col gap-[32px] items-start relative  
      w-full cursor-pointer group transition-all duration-300"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative  w-full">
          <p
            className="font-medium leading-[normal] relative  text-[#2d3648] text-[12px]  
        tracking-[6.4px] uppercase group-hover:text-[#53627e] transition-colors"
          >
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default WorkItem;
