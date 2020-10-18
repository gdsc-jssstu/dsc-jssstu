const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const dbcon = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWD, {
    host: process.env.MYSQL_DB_HOST,
    dialect: 'mysql'
});

module.exports = dbcon;
global.dbcon = dbcon;