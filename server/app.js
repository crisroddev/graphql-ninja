const express = require('express');
const { ApolloServer, gql }  = require('apollo-server-express');

const app = express();

const typeDefs = gql`
    type Query {
        me: User
    }

    type User {
        name: String!
    }
`;

const resolvers = {
    Query: {
        me: () => {
            return {
                name: 'Susan'
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

const port = 4000;

app.listen(port, () => console.group('Apollo graphql running on localhost:'+port+'/graphql'));