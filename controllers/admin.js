const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {   
    res.render('admin/add-product', {
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
        res.render('admin/products', {
            prods: products,
            pageTitle: 'admin products',
            path: '/admin/products',
        });
    });
};
