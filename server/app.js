const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');

const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

//const me = models.users[0];
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    //me
  }
});
server.applyMiddleware({ app });

const port = 4000;

app.listen(port, () => console.info('Apollo GraphQL server is running on localhost:' + port + '/graphql'));