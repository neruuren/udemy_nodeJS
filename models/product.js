const Sequilize = require('sequelize');

const sequilize = require('../helpers/database');

const Product = sequilize.define('product', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: Sequilize.STRING,
    price: {
        type: Sequilize.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    description :{
        type: Sequilize.TEXT,
        allowNull: false,
    }
});

module.exports = Product;
