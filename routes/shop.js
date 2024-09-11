const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    const products = adminData.products;
    console.log('shop.js', products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
    //pug
    res.render('shop', {prods: products, pageTitle: 'My Book Shop', path: '/'})
});

module.exports = router;
