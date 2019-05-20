const user = (sequelize, Datatypes) => {
    const User = sequelize.define('user', {
        name: {
            type: Datatypes.STRING
        }
    });
}

module.exports = user;