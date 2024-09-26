const Sequilize = require('sequelize');

const sequilize = require('../helpers/database');

const Order = sequilize.define('order', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
});

module.exports = Order;
