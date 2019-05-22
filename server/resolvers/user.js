const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary');
const { GraphQLScalarType } = require('graphql');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

//Creating JWT
const createToken = (user, secret, expiresIn) => {
  const { id, name, username } = user;
  return jwt.sign({ id, name, username }, secret, { expiresIn }); 
}

// parent, args, context, info
const resolvers = {
    Query: {
      users: (parent, args, { models }) => {
        return models.User.findAll();
      },
      user: (parent, { id }, { models }) => {
        return models.User.findByPk(id);
      },
      //me: (parent, args, { me }) => me
    },
    Mutation: {
      makeUser: (parent, { name }, { models }) => {
        const user = {
          name
        };
        return models.User.create(user);
      },
      removeUser: (parent, { id }, { models }) => {
        return models.User.destroy({
          where: {
            id
          }
        });
      },
      register: async (parent, { name, username, password }, { models }) => {
        const user = {
          name,
          username,
          password
        };
        const registeredUser = await models.User.create(user);
        try{
          if(typeof registeredUser.id === 'number'){
            return true;
          } else {
            return false;
          }

        } catch(error) {
          console.error(error);
          return false;
        }
      },
      login: async (parent, { username, password } , { models, secret }) => {
        const user = await models.User.findOne({where: {username}});
        if(!user) {
          throw new Error('User Not Found')
        }
        const validPassword = await user.validatePassword(password) 

        if(!validPassword) {
          throw new Error('Password Incorrect')
        }
        return {
          token: createToken(user, secret, '30m')
        }
      },
      uploadImage: async (parent, { filename }, { models, loginUser }) => {
        if(!loginUser){
          throw new Error('User not Authenticated');
        }
        const path = require('path');
        const mainDir = path.dirname(require.main.filename);
        filename = `${mainDir}/uploads/${filename}`;
        try{
          const photo = await cloudinary.v2.uploader.upload(filename);
          await models.User.update({
            photo: `${photo.public_id}.${photo.format}`
          }, {
            where: { username: loginUser.username}
          });
          return `${photo.public_id}.${photo.format}`
        } catch(error) {
          throw new Error(error);
        }

      }
    },
    User: {
      car: (parent, args, { models }) => {
        return models.Car.findAll({
          where: {
            userId: parent.id
          }
        });
      }
    },
    CloudinaryOptions: new GraphQLScalarType({
      name: 'CloudinaryOptions',
      parseValue(value) {
        return value;
      },
      serialize(value) {
        return value;
      },
      parseLiteral(ast) {
        console.log(ast.value);
        return ast;
      }
    })

  };
  
  
  module.exports = resolvers;