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
    }
  };
  
  module.exports = resolvers;