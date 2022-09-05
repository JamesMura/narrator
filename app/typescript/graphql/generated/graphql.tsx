import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601Date: any;
};

export type Author = {
  __typename?: 'Author';
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  books?: Maybe<Array<Book>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  avatarUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  edition?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiers?: Maybe<Array<BookIdentifier>>;
  narrator: Narrator;
  published?: Maybe<Scalars['ISO8601Date']>;
  title?: Maybe<Scalars['String']>;
  topReviews?: Maybe<Array<Review>>;
};

export type BookIdentifier = {
  __typename?: 'BookIdentifier';
  bookId: Scalars['Int'];
  id: Scalars['ID'];
  idType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Narrator = {
  __typename?: 'Narrator';
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  books?: Maybe<Array<Book>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  authors?: Maybe<Array<Author>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Book>>;
  featuredBooks?: Maybe<Array<Book>>;
  narrators?: Maybe<Array<Narrator>>;
};


export type QueryBookArgs = {
  id: Scalars['Int'];
};


export type QueryFeaturedBooksArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type Review = {
  __typename?: 'Review';
  book: Book;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  narratorRating?: Maybe<Scalars['Float']>;
  storyRating?: Maybe<Scalars['Float']>;
  userId: Scalars['Int'];
};

export type GetFeaturedBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedBooksQuery = { __typename?: 'Query', featuredBooks?: Array<{ __typename?: 'Book', id: string, title?: string | null, avatarUrl?: string | null, description?: string | null }> | null };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', id: string, title?: string | null, avatarUrl?: string | null, description?: string | null }> | null };

export type GetBookQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, title?: string | null, avatarUrl?: string | null, description?: string | null, identifiers?: Array<{ __typename?: 'BookIdentifier', id: string, idType?: string | null }> | null, author: { __typename?: 'Author', id: string, name?: string | null } } | null };

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { __typename?: 'Query', authors?: Array<{ __typename?: 'Author', id: string, name?: string | null, avatarUrl?: string | null, bio?: string | null }> | null };

export type GetNarratorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNarratorsQuery = { __typename?: 'Query', narrators?: Array<{ __typename?: 'Narrator', id: string, name?: string | null, avatarUrl?: string | null, bio?: string | null }> | null };


export const GetFeaturedBooksDocument = gql`
    query GetFeaturedBooks {
  featuredBooks {
    id
    title
    avatarUrl
    description
  }
}
    `;

/**
 * __useGetFeaturedBooksQuery__
 *
 * To run a query within a React component, call `useGetFeaturedBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturedBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetFeaturedBooksQuery, GetFeaturedBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeaturedBooksQuery, GetFeaturedBooksQueryVariables>(GetFeaturedBooksDocument, options);
      }
export function useGetFeaturedBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeaturedBooksQuery, GetFeaturedBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeaturedBooksQuery, GetFeaturedBooksQueryVariables>(GetFeaturedBooksDocument, options);
        }
export type GetFeaturedBooksQueryHookResult = ReturnType<typeof useGetFeaturedBooksQuery>;
export type GetFeaturedBooksLazyQueryHookResult = ReturnType<typeof useGetFeaturedBooksLazyQuery>;
export type GetFeaturedBooksQueryResult = Apollo.QueryResult<GetFeaturedBooksQuery, GetFeaturedBooksQueryVariables>;
export const GetBooksDocument = gql`
    query GetBooks {
  books {
    id
    title
    avatarUrl
    description
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const GetBookDocument = gql`
    query GetBook($id: Int!) {
  book(id: $id) {
    id
    title
    avatarUrl
    description
    identifiers {
      id
      idType
    }
    author {
      id
      name
    }
  }
}
    `;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
      }
export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;
export const GetAuthorsDocument = gql`
    query GetAuthors {
  authors {
    id
    name
    avatarUrl
    bio
  }
}
    `;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
      }
export function useGetAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
        }
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;
export const GetNarratorsDocument = gql`
    query GetNarrators {
  narrators {
    id
    name
    avatarUrl
    bio
  }
}
    `;

/**
 * __useGetNarratorsQuery__
 *
 * To run a query within a React component, call `useGetNarratorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNarratorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNarratorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNarratorsQuery(baseOptions?: Apollo.QueryHookOptions<GetNarratorsQuery, GetNarratorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNarratorsQuery, GetNarratorsQueryVariables>(GetNarratorsDocument, options);
      }
export function useGetNarratorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNarratorsQuery, GetNarratorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNarratorsQuery, GetNarratorsQueryVariables>(GetNarratorsDocument, options);
        }
export type GetNarratorsQueryHookResult = ReturnType<typeof useGetNarratorsQuery>;
export type GetNarratorsLazyQueryHookResult = ReturnType<typeof useGetNarratorsLazyQuery>;
export type GetNarratorsQueryResult = Apollo.QueryResult<GetNarratorsQuery, GetNarratorsQueryVariables>;