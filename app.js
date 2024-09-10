const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "add Product" page</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>greetings from Express</h1>');
});

app.listen(3000);
