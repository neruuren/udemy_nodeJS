const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();

const products = [];

router.get('/add-product',(req, res, next) => {   
    res.render('add-product', {
        pageTitle: 'product add',
        path: '/admin/add-product',
        error: false,
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
