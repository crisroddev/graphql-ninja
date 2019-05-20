const express = require('express');
const { ApolloServer }  = require('apollo-server-express');

const app = express();

const typeDefs = null;
const resolvers = null;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

const port = 4000;

app.listen(port, () => console.group('Apollo graphql running on localhost:'+port+'/graphql'));