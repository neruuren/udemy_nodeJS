const Sequilize = require('sequelize');

const sequilize = require('../helpers/database');

const CartItem = sequilize.define('cartItem', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quantity: Sequilize.INTEGER,
});

module.exports = CartItem;
