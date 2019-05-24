//Dotenv
require('dotenv').config();
const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const jwt = require('jsonwebtoken');

// Multer
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function( req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage });

// Routes
const routes = require('./routes');

//req access via const app = express();
const getLoggedInUser = req => {
  const token = req.headers['x-auth-token'];
  if(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch(error) {
      throw new Error('Session Expired');
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ( { req }) => ({
    models,
    secret: process.env.JWT_SECRET,
    loginUser: getLoggedInUser(req)
  })
});

server.applyMiddleware({ app });

app.set('view engine', 'pug');
app.set('views', `${__dirname}/public`);

app.get('/', routes.index);
app.get('/user/:id', routes.userInfo);
app.post('/upload', upload.fields([{ name: 'file'}, { name: 'id' }]), routes.upload);

app.use(cors());

const port = 4000;

app.listen(port, () => console.info('Apollo GraphQL server is running on localhost:' + port + '/graphql'));