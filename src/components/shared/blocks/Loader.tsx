import { Fragment } from "react";
import { Skeleton } from "@/components/ui";

export const Loader = () => {
  return <div>Loader</div>;
};

export const SkeletonList = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-[22px] w-full">
      {Array.from({ length: count }).map((_, idx) => (
        <Fragment key={idx}>
          <div className="flex-1 space-y-4">
            <Skeleton className="w-full h-[360px] md:h-[400px]" />
            <Skeleton className="w-[70%] h-[20px]" />
            <Skeleton className="w-[45%] h-[20px]" />
          </div>
        </Fragment>
      ))}
    </div>
  );
};
