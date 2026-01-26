import type { FC, JSX, PropsWithChildren } from "react";
import NormalizedLink from "./Link";
import { cn } from "@/lib";

// export const ButtonsBlock = ({ innerBlocks }: { innerBlocks?: any[] }) => {
//   return (
//     <div className="flex flex-wrap gap-3" data-name="CoreButtons">
//       <BlockRenderer blocks={innerBlocks} />
//     </div>
//   );
// };

// export const ColumnsBlock = ({ innerBlocks }: { innerBlocks?: any[] }) => {
//   console.log("colunms_block: ", innerBlocks);
//   return (
//     <div
//       className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       data-name="CoreColumns"
//     >
//       <BlockRenderer blocks={innerBlocks} />
//     </div>
//   );
// };

// export const ColumnBlock = ({ innerBlocks }: { innerBlocks?: any[] }) => {
//   console.log("column_block: ", innerBlocks);
//   return (
//     <div className="space-y-4" data-name="CoreColumn">
//       <BlockRenderer blocks={innerBlocks} />
//     </div>
//   );
// };

interface WordPressBlockProps extends PropsWithChildren {
  attributes?: any;
}

export const ButtonsBlock: FC<WordPressBlockProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-3" data-name="CoreButtons">
      {children}
    </div>
  );
};

export const ButtonBlock = ({
  attributes,
}: {
  attributes: { text?: string; url?: string };
}) => {
  if (!attributes?.url) return null;

  return (
    <NormalizedLink href={attributes.url} data-name="CoreButton">
      <span className="inline-flex px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {attributes.text}
      </span>
    </NormalizedLink>
  );
};

export const ColumnsBlock: FC<WordPressBlockProps> = ({
  children,
  attributes,
}) => {
  return (
    <div
      className={cn(
        attributes.className ?? "grid grid-cols-1 md:grid-cols-2 gap-8 ",
      )}
      data-name="CoreColumns"
    >
      {children}
    </div>
  );
};

export const ColumnBlock: FC<WordPressBlockProps> = ({
  children,
  attributes,
}) => {
  return (
    <div
      className={cn("space-y-4", attributes.className ?? "")}
      data-name="CoreColumn"
    >
      {children}
    </div>
  );
};

export const GalleryBlock = ({
  attributes,
}: {
  attributes: { images?: { url: string; alt?: string }[] };
}) => {
  if (!attributes?.images?.length) return null;

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      data-name="CoreGallery"
    >
      {attributes.images.map((img, i) => (
        <img key={i} src={img.url} alt={img.alt ?? ""} />
      ))}
    </div>
  );
};

export const HeadingBlock = ({
  attributes,
}: {
  attributes: {
    content?: string;
    className?: string;
    level?: number;
    style?: any;
  };
}) => {
  const level = attributes.level ?? 2;
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const typography =
    attributes.style !== null ? JSON.parse(attributes.style).typography : {};

  return (
    <Tag
      className={cn(attributes.className ?? "font-bold mb-4", "mb-1")}
      dangerouslySetInnerHTML={{ __html: attributes.content ?? "" }}
      data-name={`CoreHeading${level}`}
      style={{ ...typography }}
    />
  );
};

export const HeroBlock = ({
  attributes,
}: {
  attributes: {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
  };
}) => {
  return (
    <section
      className="relative h-[400px] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${attributes.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold">{attributes.title}</h1>
      <p className="mt-2 text-lg">{attributes.subtitle}</p>
    </section>
  );
};

export const ImageBlock = ({
  attributes,
}: {
  attributes: {
    alt?: string;
    className?: string;
    url?: string;
  };
}) => {
  if (!attributes?.url) return null;

  return (
    <img
      src={attributes.url}
      alt={attributes.alt ?? ""}
      className={cn("max-w-full", attributes.className ?? "")}
      data-name="CoreImage"
    />
  );
};

export const ParagraphBlock = ({
  attributes,
}: {
  attributes: { content?: string; className?: string; style?: any };
}) => {
  if (!attributes?.content) return null;
  const typography =
    attributes.style !== null ? JSON.parse(attributes.style).typography : {};

  return (
    <p
      className={cn(attributes.className ?? "mb-4")}
      dangerouslySetInnerHTML={{ __html: attributes.content }}
      data-name="CoreParagraph"
      style={{ ...typography }}
    />
  );
};
