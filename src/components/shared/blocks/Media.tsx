import React, { useState } from "react";

import { ImagePlaceholder } from "./Icons";
import type { ImageProp } from "@/types";
import { cn } from "@/lib";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}

export function Image({ className, imgSrc }: ImageProp) {
  const file = imgSrc?.replace(/\.[^/.]+$/, "");

  return (
    <div
      className={cn("flex bg-[#a0abc0] grow overflow-clip relative", className)}
      data-name="Image"
    >
      {imgSrc ? (
        <picture className="size-full">
          {/* 1. Best Compression: AVIF */}
          <source srcSet={`${file}.avif`} type="image/avif" />

          {/* 2. Modern Standard: WebP */}
          <source srcSet={`${file}.webp`} type="image/webp" />

          {/* 3. High Quality Fallback: PNG */}
          <source srcSet={`${file}.png`} type="image/png" />

          {/* 4. Ultimate Fallback & Styling */}
          <img
            src={imgSrc} // Usually the .jpg or .png
            alt={file}
            className="size-full object-cover object-top"
            loading="lazy"
          />
        </picture>
      ) : (
        <div className="absolute left-1/2 size-[80px] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ImagePlaceholder />
        </div>
      )}
    </div>
  );
}

export function Video({
  videoSrc,
  className,
}: {
  videoSrc: string;
  className?: string;
}) {
  const file = videoSrc?.replace(/\.[^/.]+$/, "");

  return (
    <div className={cn("relative overflow-hidden size-full", className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="max-w-full h-screen object-cover size-full"
        // Show a high-quality static image while the video loads
        poster={`${file}.webp`}
      >
        {/* 1. Best Video Compression: WebM */}
        <source src={`${file}.webm`} type="video/webm" />

        {/* 2. Standard Fallback: MP4 */}
        <source src={`${file}.mp4`} type="video/mp4" />

        {/* 3. Ultimate Fallback (Legacy browsers/Errors) */}
        <p>Your browser does not support the video tag.</p>
      </video>
    </div>
  );
}
