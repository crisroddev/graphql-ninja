const user = (sequelize, Datatypes) => {
    const User = sequelize.define('user', {
        name: {
            type: Datatypes.STRING
        }
    });

    User.associate = models => {
        User.hasMany(models.Car, { onDelete: 'CASCADE' })
    }

    return User;
}

module.exports = user;