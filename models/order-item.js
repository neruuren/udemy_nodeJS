const Sequilize = require('sequelize');

const sequilize = require('../helpers/database');

const OrderItem = sequilize.define('orderItem', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quantity: Sequilize.INTEGER,
});

module.exports = OrderItem;
