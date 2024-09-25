const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '192.168.50.32',
    user: 'TUF',
    database: 'node-complete',
    password: 'Titan%2015',
});

module.exports = pool.promise();
