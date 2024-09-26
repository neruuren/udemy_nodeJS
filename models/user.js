const Sequilize = require('sequelize');

const sequilize = require('../helpers/database');

const User = sequilize.define('user', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequilize.STRING,
    email: Sequilize.STRING,
});

module.exports = User;
