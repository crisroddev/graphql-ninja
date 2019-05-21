//Dotenv
require('dotenv').config();
const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

//const me = models.users[0];
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    secret: process.env.JWT_SECRET
    //me
  }
});
server.applyMiddleware({ app });
app.use(cors());

const port = 4000;

app.listen(port, () => console.info('Apollo GraphQL server is running on localhost:' + port + '/graphql'));