import type {
  GetPostQuery,
  GetPostsQuery,
  GetWorkQuery,
  GetWorksQuery,
} from "./graphql";

import {
  GetPostDocument,
  GetPostsDocument,
  GetWorkDocument,
  GetWorksDocument,
} from "./graphql";

export type SingleQueryResultMap = {
  post: NonNullable<GetPostQuery["post"]>;
  work: NonNullable<GetWorkQuery["work"]>;
};

export type ListQueryResultMap = {
  post: NonNullable<GetPostsQuery["posts"]>;
  work: NonNullable<GetWorksQuery["works"]>;
};

export const singleQueryMap = {
  post: {
    document: GetPostDocument,
    pick: (data: GetPostQuery) => data.post!,
  },
  work: {
    document: GetWorkDocument,
    pick: (data: GetWorkQuery) => data.work!,
  },
} as const;

export const listQueryMap = {
  post: {
    document: GetPostsDocument,
    pick: (data: GetPostsQuery) => data.posts!,
  },
  work: {
    document: GetWorksDocument,
    pick: (data: GetWorksQuery) => data.works!,
  },
} as const;
