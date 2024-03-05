import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/index.js';

// Initialize Apollo client
export const graphQLClient = new ApolloClient({
  ssrMode: true, // Indicates that we want to use server side rendering
  link: createHttpLink({
    // Use createHttpLink instead of uri
    uri: 'https://api.oulunliikenne.fi/proxy/graphql', //Path to GraphQL schema
    fetchOptions: {
      mode: 'cors',
    },
  }),
  cache: new InMemoryCache(), // Cache management
});
