const bcrypt = require('bcrypt');

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
        },
        photo: {
            type: Datatypes.STRING
        }
    });

    User.prototype.hashPassword = async function() {
       return await bcrypt.hash(this.password, 10);
    };

    User.prototype.validatePassword = async function(password) {
        return await bcrypt.compare(password, this.password);
    }



    User.associate = models => {
        User.hasMany(models.Car, { onDelete: 'CASCADE' })
    };

    User.beforeCreate(async user => {
        user.password = await user.hashPassword(user.password);
    });

    return User;
    
}

module.exports = user;