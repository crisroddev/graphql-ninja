const Sequelize = require('sequelize');
const sequelize = new Sequelize('grapqhl', 'root', 'cra260385', {
    dialect: 'mysql',
    operatorAliases: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
};