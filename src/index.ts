import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync('./src/schema.graphql', 'utf8')),
  resolvers: resolvers as any,
  introspection: true,
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  ${url}`);
});
