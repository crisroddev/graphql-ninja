const user = (sequelize, Datatypes) => {
    const User = sequelize.define('user', {
        name: {
            type: Datatypes.STRING
        }
    });

    return User;
}

module.exports = user;