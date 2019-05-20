const express = require('express');
const { ApolloServer, gql }  = require('apollo-server-express');
const users = require('./data').users;

const app = express();

const me = users[0];

const typeDefs = gql`
    type Query {
        users: [User]
        user(id: Int!): User
        me: User
    }

    type User {
        id: ID!
        name: String!
    }
`;

const resolvers = {
    Query: {
        users: () => users,
        user: (parent, { id }) => {
            //console.log(id)
            const user = users.filter(user => user.id === id);
            return user[0];
        },
        me: () => me
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

const port = 4000;

app.listen(port, () => console.group('Apollo graphql running on localhost:'+port+'/graphql'));