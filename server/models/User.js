const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = require('../utils/db_connection').define('User', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(320),
        allowNull: false,
        unique: true
    },
    name: Sequelize.STRING(255),
    secret: Sequelize.STRING(255)
}, {
    hooks: {
        beforeCreate: async (user, options) => {
            const salt = await bcrypt.genSalt(10);
            user.secret = await bcrypt.hash(user.secret, salt);
        },
        beforeUpdate: async (user, options) => {
            const salt = await bcrypt.genSalt(10);
            user.secret = await bcrypt.hash(user.secret, salt);
        }
    }
});