const Sequilize = require('sequelize');

const sequilize = new Sequilize('node-complete', 'TUF', 'Titan%2015', {
    dialect: 'mysql', 
    host: '192.168.50.32',
});

module.exports = sequilize;
