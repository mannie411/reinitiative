import type { FC } from "react";
import { BLOCK_REGISTRY } from "./";

interface BlockRendererProps {
  blocks?: any[];
}

const BlockRenderer: FC<BlockRendererProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, i) => {
        if (!block?.name) return null;

        const BlockComponent = BLOCK_REGISTRY[block.name];

        if (!BlockComponent) {
          console.warn(`Unmapped block: ${block.name}`);
          return null;
        }

        return (
          <BlockComponent
            key={`${block.name}-${i}`}
            attributes={block.attributes}
          >
            {block.innerBlocks?.length > 0 && (
              <BlockRenderer blocks={block.innerBlocks} />
            )}
          </BlockComponent>
        );
      })}
    </>
  );
};
export default BlockRenderer;
