import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'http://localhost:4011/api',
    cache: new InMemoryCache(),
});

