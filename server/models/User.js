const Sequelize = require('sequelize');

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
});