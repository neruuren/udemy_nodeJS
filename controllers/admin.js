const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {   
    res.render('admin/edit-product', {
        pageTitle: 'product add',
        path: '/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) => { 
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/');
    }
    res.render('admin/edit-product', {
        pageTitle: 'edit product',
        path: '/admin/edit-product',
        editing: editMode,
    });
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
