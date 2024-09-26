const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {   
    res.render('admin/edit-product', {
        pageTitle: 'product add',
        path: '/admin/add-product',
        editing: false,
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    Product
        .create({
            title: title,
            price: price,
            imageUrl: imageUrl,
            description: description,
        })
        .then(result => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditProduct = (req, res, next) => { 
    const editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/');
    }
    const productId = req.params.productId
    Product.findByPk(productId)
        .then(product => {
            res.render('admin/edit-product', {
                pageTitle: 'edit product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product,
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postEditProduct = (req, res, next) => {
    const productId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price;
    Product.findByPk(productId)
        .then(product => {
            product.title = updatedTitle;
            product.imageUrl = updatedImageUrl;
            product.description = updatedDescription;
            product.price = updatedPrice;
            return product.save();
        })
        .then(result => {
            console.log('UPDATED PRODUCT')
        })
        .catch(err => {
            console.log(err);
        });
    res.redirect('/admin/products');
};

exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'admin products',
            path: '/admin/products',
        })
    })
    .catch(err => {
        console.log(err);
    });
};
