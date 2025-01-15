const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// / => GET
router.get('/', shopController.getIndex);

// /products => GET
router.get('/products', shopController.getProducts);

// /products detail => GET
router.get('/products/:productId', shopController.getProduct);

// /cart => GET
router.get('/cart', isAuth, shopController.getCart);

// /cart => POST
router.post('/cart', isAuth, shopController.postCart);

// /orders => GET
router.get('/orders', isAuth, shopController.getOrders);

// /cart-delete-item => POST
router.post('/cart-delete-item', isAuth, shopController.postCartDeleteItem);

// /create-order => POST
router.post('/create-order', isAuth, shopController.postOrder);


module.exports = router;
