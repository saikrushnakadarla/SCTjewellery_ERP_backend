// controllers/onlineorders.js
const onlineOrdersModel = require('../models/Onlineordersmodel');

// Controller to fetch customer details by product_id
const getCustomerDetailsByProductId = (req, res) => {
  const { product_id } = req.params;

  if (!product_id) {
    return res.status(400).json({ 
      message: 'Product ID is required' 
    });
  }

  onlineOrdersModel.getCustomerDetailsByProductId(product_id, (err, results) => {
    if (err) {
      console.error('Error fetching customer details:', err.message);
      return res.status(500).json({ 
        message: 'Failed to fetch customer details', 
        error: err.message 
      });
    }

    if (results.length === 0) {
      return res.status(404).json({ 
        message: 'No customer details found for the given product ID' 
      });
    }

    // Process results to include full image URLs
    const processedResults = results.map(item => {
      if (item.images) {
        const imageArray = item.images.split(',');
        item.images = imageArray.map(img => ({
          filename: img,
          url: `${req.protocol}://${req.get('host')}/uploads/${img}`
        }));
      }
      return item;
    });

    res.status(200).json({
      message: 'Customer details fetched successfully',
      data: processedResults
    });
  });
};

// Controller to fetch customer details by product_id and order_id
const getCustomerDetailsByProductAndOrder = (req, res) => {
  const { product_id, order_id } = req.params;

  if (!product_id || !order_id) {
    return res.status(400).json({ 
      message: 'Both product ID and order ID are required' 
    });
  }

  onlineOrdersModel.getCustomerDetailsByProductAndOrder(product_id, order_id, (err, results) => {
    if (err) {
      console.error('Error fetching customer details:', err.message);
      return res.status(500).json({ 
        message: 'Failed to fetch customer details', 
        error: err.message 
      });
    }

    if (results.length === 0) {
      return res.status(404).json({ 
        message: 'No customer details found for the given product ID and order ID' 
      });
    }

    // Process results to include full image URLs
    const processedResults = results.map(item => {
      if (item.images) {
        const imageArray = item.images.split(',');
        item.images = imageArray.map(img => ({
          filename: img,
          url: `${req.protocol}://${req.get('host')}/uploads/${img}`
        }));
      }
      return item;
    });

    res.status(200).json({
      message: 'Customer details fetched successfully',
      data: processedResults
    });
  });
};

// Controller to fetch all online orders with customer details
const getAllOnlineOrdersWithCustomerDetails = (req, res) => {
  onlineOrdersModel.getAllOnlineOrdersWithCustomerDetails((err, results) => {
    if (err) {
      console.error('Error fetching online orders:', err.message);
      return res.status(500).json({ 
        message: 'Failed to fetch online orders', 
        error: err.message 
      });
    }

    if (results.length === 0) {
      return res.status(404).json({ 
        message: 'No online orders found' 
      });
    }

    // Process results to include full image URLs for customers
    const processedResults = results.map(item => {
      if (item.customer_images) {
        const imageArray = item.customer_images.split(',');
        item.customer_images = imageArray.map(img => ({
          filename: img,
          url: `${req.protocol}://${req.get('host')}/uploads/${img}`
        }));
      }
      return item;
    });

    res.status(200).json({
      message: 'Online orders fetched successfully',
      data: processedResults
    });
  });
};

module.exports = {
  getCustomerDetailsByProductId,
  getCustomerDetailsByProductAndOrder,
  getAllOnlineOrdersWithCustomerDetails
};