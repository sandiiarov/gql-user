import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import fs from 'fs';
import { resolvers } from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync('./src/schema.graphql', 'utf8')),
  resolvers: resolvers as any,
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(4001, async () => {
  console.log(`🚀 RUNNING @ ${4001}`);
});
