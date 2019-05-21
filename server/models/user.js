const user = (sequelize, Datatypes) => {
    const User = sequelize.define('user', {
        name: {
            type: Datatypes.STRING
        },
        username: {
            type: Datatypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: Datatypes.STRING,
            validate: {
                notEmpty: true
            }
        }
    });

    User.associate = models => {
        User.hasMany(models.Car, { onDelete: 'CASCADE' })
    }

    return User;
}

module.exports = user;