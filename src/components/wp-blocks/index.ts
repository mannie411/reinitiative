import BlockRenderer from "./BlockRenderer";
import {
  ParagraphBlock,
  HeadingBlock,
  ColumnsBlock,
  ColumnBlock,
  ButtonsBlock,
  ButtonBlock,
  GalleryBlock,
  ImageBlock,
  HeroBlock,
} from "./Core";
import NormalizedLink from "./Link";

export const BLOCK_REGISTRY: Record<string, any> = {
  "core/paragraph": ParagraphBlock,
  "core/heading": HeadingBlock,
  "core/columns": ColumnsBlock,
  "core/column": ColumnBlock,
  "core/buttons": ButtonsBlock,
  "core/button": ButtonBlock,
  "core/image": ImageBlock,
  "core/gallery": GalleryBlock,
  "core/acf_hero": HeroBlock,
};

export * from "./ACF";

export { BlockRenderer, NormalizedLink };
