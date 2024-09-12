const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {   
    res.render('add-product', {
        pageTitle: 'product add',
        path: '/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'My Book Shop',
            path: '/',
        });
    });
};
