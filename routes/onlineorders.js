// routes/onlineorders.js
const express = require('express');
const router = express.Router();
const onlineOrdersController = require('../controllers/onlineorderscontroller');

// Route to get customer details by product_id
// Example: GET /api/online-orders/customer-by-product/3
router.get('/customer-by-product/:product_id', onlineOrdersController.getCustomerDetailsByProductId);

// Route to get customer details by product_id and order_id
// Example: GET /api/online-orders/customer-by-product-order/3/1
router.get('/customer-by-product-order/:product_id/:order_id', onlineOrdersController.getCustomerDetailsByProductAndOrder);

// Route to get all online orders with customer details
// Example: GET /api/online-orders/all
router.get('/all', onlineOrdersController.getAllOnlineOrdersWithCustomerDetails);

module.exports = router;