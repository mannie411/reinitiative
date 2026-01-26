import {
  useQuery,
  useInfiniteQuery,
  type InfiniteData,
} from "@tanstack/react-query";
import { graphqlClient } from "@/lib";
import { singleQueryMap, listQueryMap } from "@/gql";
import type { ListQueryResultMap } from "@/gql/";
import type { PostTypeKey } from "@/types/";
import {
  type GetPostQuery,
  type GetWorkQuery,
  type GetPostsQuery,
  type GetWorksQuery,
  type GetRelatedPostsQuery,
  GetRelatedPostsDocument,
} from "@/gql/graphql";

export const getPost = <T extends PostTypeKey>(postType: T, slug: string) => {
  const { document, pick } = singleQueryMap[postType];

  return {
    queryKey: [postType, slug] as const,

    queryFn: async () => {
      const data = await graphqlClient.request<
        T extends "post" ? GetPostQuery : GetWorkQuery
      >(document, { slug });

      return pick(data);
    },
  };
};

// export const usePost = <T extends PostTypeKey>({
//   postType,
//   slug,
// }: {
//   postType: T;
//   slug: string;
// }) => {
//   const { document, pick } = singleQueryMap[postType];

//   return useQuery({
//     queryKey: [postType, slug] as const,
//     queryFn: async () => {
//       const data = await graphqlClient.request<
//         T extends "post" ? GetPostQuery : GetWorkQuery
//       >(document, { slug });

//       return pick(data as any) as SingleQueryResultMap[T];
//     },
//   });
// };

export const usePost = <T extends PostTypeKey>({
  postType,
  slug,
}: {
  postType: T;
  slug: string;
}) => {
  return useQuery(getPost(postType, slug));
};

export const usePosts = <T extends PostTypeKey>({
  postType,
  pageSize = 10,
  categoryName,
}: {
  postType: T;
  pageSize?: number;
  categoryName?: string;
}) => {
  const { document, pick } = listQueryMap[postType];

  return useInfiniteQuery<
    ListQueryResultMap[T],
    Error,
    InfiniteData<ListQueryResultMap[T]>,
    [T, "list", string?],
    string | null
  >({
    queryKey: [postType, "list", categoryName],
    initialPageParam: null,
    queryFn: async ({ pageParam }): Promise<ListQueryResultMap[T]> => {
      const data = await graphqlClient.request<
        T extends "post" ? GetPostsQuery : GetWorksQuery
      >(document, {
        first: pageSize,
        after: pageParam,
        categoryName,
      });

      return pick(data as any) as ListQueryResultMap[T];
    },
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
  });
};

export const useRelatedPosts = ({
  categoryIds,
  excludeId,
  first = 3,
}: {
  categoryIds: number[];
  excludeId: number;
  first?: number;
}) => {
  return useQuery({
    queryKey: ["related-posts", categoryIds, excludeId],
    queryFn: async () => {
      const data = await graphqlClient.request<GetRelatedPostsQuery>(
        GetRelatedPostsDocument,
        {
          first,
          categoryIds,
          exclude: [excludeId],
        },
      );

      return data.posts?.nodes ?? [];
    },
    enabled: categoryIds.length > 0,
  });
};
