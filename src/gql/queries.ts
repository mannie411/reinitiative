import { gql } from "graphql-request";

// // You can use a template literal tag for the first run
// export const placeholder = /* GraphQL */ `
//   query GetSiteTitle {
//     generalSettings {
//       title
//     }
//   }
// `;

// export const GET_PAGE_BY_URI = gql(`
//   query GetPage($uri: ID!) {
//     page(id: $uri, idType: URI) {
//       title
//       editorBlocks {
//         name
//         renderedHtml
//         # This is where your ACF Data lives
//         attributes {
//           ... on WordpressAcfBlockAttributes {
//             data
//           }
//         }
//       }
//     }
//   }
// `);

// export const GET_ALL_POSTS = gql(`
//   query GetPosts($first: Int!) {
//     posts(first: $first) {
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }
//   }
// `);

// export const GET_PAGE_BLOCKS = gql(`
//   query GetPageBlocks($uri: ID!) {
//     page(id: $uri, idType: URI) {
//       editorBlocks {
//         name
//         renderedHtml
//         innerBlocks {
//           name
//           renderedHtml
//         }
//         # This allows Faust to see your ACF data
//         attributes {
//           ... on WordpressAcfBlockAttributes {
//             data
//           }
//         }
//       }
//     }
//   }
// `);

// export const GET_WORKS = gql(`
//   query GetProject($uri: String!) {
//     nodeByUri(uri: $uri) {
//       ... on Project {
//         id
//         title
//         projectDetails { # Example ACF Group
//           clientName
//           completionDate
//           projectUrl
//         }
//         editorBlocks {
//           name
//           attributesJSON
//         }
//       }
//     }
//   }
// `);

export const GET_POST = gql`
  #import "../fragments/coreBlocks.graphql"
  # Fetch a single post (or CPT if postType is replaced)
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      editorBlocks(flat: false) {
        __typename
        name
        ...CoreBlocksFragment
      }
    }
  }
`;

export const GET_POSTS = gql`
  #import "../fragments/coreBlocks.graphql"

  # Fetch paginated posts (by category or all)
  query GetPosts($first: Int!, $after: String, $categoryName: String) {
    posts(
      first: $first
      after: $after
      where: { categoryName: $categoryName }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        editorBlocks(flat: false) {
          __typename
          name
          ...CoreBlocksFragment
        }
      }
    }
  }
`;

export const GET_WORK = gql`
  #import "../fragments/coreBlocks.graphql"

  # Fetch a single post (or CPT if postType is replaced)
  query GetPost($slug: ID!) {
    work(id: $slug, idType: SLUG) {
      id
      title
      slug
      editorBlocks(flat: true) {
        __typename
        name
        ...CoreBlocksFragment
      }
    }
  }
`;

export const GET_WORKS = gql`
  #import "../fragments/coreBlocks.graphql"

  # Fetch paginated posts (by category or all)
  query GetPosts($first: Int!, $after: String, $categoryName: String) {
    works(
      first: $first
      after: $after
      where: { categoryName: $categoryName }
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        editorBlocks(flat: true) {
          __typename
          name
          ...CoreBlocksFragment
        }
      }
    }
  }
`;
