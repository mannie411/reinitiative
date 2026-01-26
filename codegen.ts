import type { CodegenConfig } from "@graphql-codegen/cli";

import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.VITE_WORDPRESS_URL}/graphql`,
  documents: "src/gql/**/*.graphql",
  generates: {
    "src/gql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        // "typescript-react-query",
        "typed-document-node",
      ],
      config: {
        fetcher: "graphql-request",
        exposeQueryKeys: true,
        exposeFetcher: true,
        addInfiniteQuery: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
