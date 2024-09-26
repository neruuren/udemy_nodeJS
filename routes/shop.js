const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// / => GET
router.get('/', shopController.getIndex);

// /products => GET
router.get('/products', shopController.getProducts);

// /products detail => GET
router.get('/products/:productId', shopController.getProduct);

// /cart => GET
router.get('/cart', shopController.getCart);

// /cart => POST
router.post('/cart', shopController.postCart);

// /orders => GET
router.get('/orders', shopController.getOrders);

// /checkout => GET
router.get('/checkout', shopController.getCheckout);

// /cart-delete-item => POST
router.post('/cart-delete-item', shopController.postCartDeleteItem);

// /create-order => POST
router.post('/create-order', shopController.postOrder)


module.exports = router;
