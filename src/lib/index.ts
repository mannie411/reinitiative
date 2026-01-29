import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = import.meta.env.VITE_WORDPRESS_URL + "/graphql";

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    // Optional: Authorization: `Bearer ${process.env.WP_JWT_TOKEN}`
    "Content-Type": "application/json",
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

export async function resolveCptId(
  slug: string,
  cpt: string,
): Promise<number | null> {
  const query = gql`
    query Get${cpt}Id($uri: String!) {
      ${cpt.toLowerCase()}(id: $uri, idType: URI) {
        id
        databaseId
      }
    }
  `;

  try {
    const res = await graphqlClient.request(query, { uri: slug });
    const item = res[cpt.toLowerCase()];
    return item?.databaseId ?? null;
  } catch (err) {
    console.error("resolveCptId error:", err);
    return null;
  }
}

export * from "./utils";
