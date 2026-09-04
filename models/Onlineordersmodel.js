// models/Onlineorders.js
const db = require('../db');

// Function to get customer details by product_id
const getCustomerDetailsByProductId = (product_id, callback) => {
  const sql = `
    SELECT 
      oi.order_item_id,
      oi.barcode,
      oi.huid_number,
      oi.product_name,
      oi.category,
      oi.metal_type,
      oi.purity,
      oi.gross_weight,
      oi.net_weight,
      oi.stone_weight,
      oi.making_charge,
      oi.wastage,
      oi.unit_price,
      oi.quantity,
      oi.discount AS item_discount,
      oi.gst_percentage,
      oi.gst_amount,
      oi.total_price AS item_total_price,
      o.order_id,
      o.order_number,
      o.invoice_number,
      o.invoice_date,
      o.subtotal AS order_subtotal,
      o.discount AS order_discount,
      o.shipping_charge,
      o.tax_amount AS order_tax_amount,
      o.grand_total,
      o.payment_method,
      o.payment_status,
      o.order_status,
      o.placed_at,
      o.expected_delivery,
      o.delivered_at,
      o.cancelled_at,
      c.account_id AS customer_id,
      c.account_name AS customer_name,
      c.print_name,
      c.account_group,
      c.op_bal,
      c.metal_balance,
      c.dr_cr,
      c.address1 AS customer_address1,
      c.address2 AS customer_address2,
      c.city AS customer_city,
      c.pincode AS customer_pincode,
      c.state AS customer_state,
      c.state_code,
      c.phone AS customer_phone,
      c.mobile AS customer_mobile,
      c.contact_person,
      c.email AS customer_email,
      c.birthday,
      c.anniversary,
      c.bank_account_no,
      c.bank_name,
      c.ifsc_code,
      c.branch,
      c.gst_in,
      c.aadhar_card,
      c.pan_card,
      c.images AS customer_images,
      c.religion,
      c.kyc_status,
      c.verified_by,
      c.rejection_reason,
      c.referred_person_name,
      c.referred_person_id,
      c.referred_person_referral_code,
      c.customer_referral_code,
      c.nominee_name,
      c.nominee_email,
      c.nominee_phone_number,
      c.relationship,
      c.nominee_aadhaar_number,
      c.nominee_pan_number,
      c.remarks AS customer_remarks
    FROM 
      order_items oi
      INNER JOIN orders o ON oi.order_id = o.order_id
      INNER JOIN account_details c ON o.customer_id = c.account_id
    WHERE 
      oi.product_id = ?
    ORDER BY 
      o.placed_at DESC
  `;

  db.query(sql, [product_id], callback);
};

// Function to get customer details by product_id and order_id
const getCustomerDetailsByProductAndOrder = (product_id, order_id, callback) => {
  const sql = `
    SELECT 
      oi.order_item_id,
      oi.barcode,
      oi.huid_number,
      oi.product_name,
      oi.category,
      oi.metal_type,
      oi.purity,
      oi.gross_weight,
      oi.net_weight,
      oi.stone_weight,
      oi.making_charge,
      oi.wastage,
      oi.unit_price,
      oi.quantity,
      oi.discount AS item_discount,
      oi.gst_percentage,
      oi.gst_amount,
      oi.total_price AS item_total_price,
      o.order_id,
      o.order_number,
      o.invoice_number,
      o.invoice_date,
      o.subtotal AS order_subtotal,
      o.discount AS order_discount,
      o.shipping_charge,
      o.tax_amount AS order_tax_amount,
      o.grand_total,
      o.payment_method,
      o.payment_status,
      o.order_status,
      o.placed_at,
      o.expected_delivery,
      o.delivered_at,
      o.cancelled_at,
      c.account_id AS customer_id,
      c.account_name AS customer_name,
      c.print_name,
      c.account_group,
      c.op_bal,
      c.metal_balance,
      c.dr_cr,
      c.address1 AS customer_address1,
      c.address2 AS customer_address2,
      c.city AS customer_city,
      c.pincode AS customer_pincode,
      c.state AS customer_state,
      c.state_code,
      c.phone AS customer_phone,
      c.mobile AS customer_mobile,
      c.contact_person,
      c.email AS customer_email,
      c.birthday,
      c.anniversary,
      c.bank_account_no,
      c.bank_name,
      c.ifsc_code,
      c.branch,
      c.gst_in,
      c.aadhar_card,
      c.pan_card,
      c.images AS customer_images,
      c.religion,
      c.kyc_status,
      c.verified_by,
      c.rejection_reason,
      c.referred_person_name,
      c.referred_person_id,
      c.referred_person_referral_code,
      c.customer_referral_code,
      c.nominee_name,
      c.nominee_email,
      c.nominee_phone_number,
      c.relationship,
      c.nominee_aadhaar_number,
      c.nominee_pan_number,
      c.remarks AS customer_remarks
    FROM 
      order_items oi
      INNER JOIN orders o ON oi.order_id = o.order_id
      INNER JOIN account_details c ON o.customer_id = c.account_id
    WHERE 
      oi.product_id = ?
      AND oi.order_id = ?
    ORDER BY 
      o.placed_at DESC
  `;

  db.query(sql, [product_id, order_id], callback);
};

// Function to get all online orders with customer details
const getAllOnlineOrdersWithCustomerDetails = (callback) => {
  const sql = `
    SELECT 
      oi.order_item_id,
      oi.barcode,
      oi.huid_number,
      oi.product_name,
      oi.category,
      oi.metal_type,
      oi.purity,
      oi.gross_weight,
      oi.net_weight,
      oi.stone_weight,
      oi.making_charge,
      oi.wastage,
      oi.unit_price,
      oi.quantity,
      oi.discount AS item_discount,
      oi.gst_percentage,
      oi.gst_amount,
      oi.total_price AS item_total_price,
      o.order_id,
      o.order_number,
      o.invoice_number,
      o.invoice_date,
      o.subtotal AS order_subtotal,
      o.discount AS order_discount,
      o.shipping_charge,
      o.tax_amount AS order_tax_amount,
      o.grand_total,
      o.payment_method,
      o.payment_status,
      o.order_status,
      o.placed_at,
      o.expected_delivery,
      o.delivered_at,
      o.cancelled_at,
      c.account_id AS customer_id,
      c.account_name AS customer_name,
      c.print_name,
      c.account_group,
      c.op_bal,
      c.metal_balance,
      c.dr_cr,
      c.address1 AS customer_address1,
      c.address2 AS customer_address2,
      c.city AS customer_city,
      c.pincode AS customer_pincode,
      c.state AS customer_state,
      c.state_code,
      c.phone AS customer_phone,
      c.mobile AS customer_mobile,
      c.contact_person,
      c.email AS customer_email,
      c.birthday,
      c.anniversary,
      c.bank_account_no,
      c.bank_name,
      c.ifsc_code,
      c.branch,
      c.gst_in,
      c.aadhar_card,
      c.pan_card,
      c.images AS customer_images,
      c.religion,
      c.kyc_status,
      c.verified_by,
      c.rejection_reason,
      c.referred_person_name,
      c.referred_person_id,
      c.referred_person_referral_code,
      c.customer_referral_code,
      c.nominee_name,
      c.nominee_email,
      c.nominee_phone_number,
      c.relationship,
      c.nominee_aadhaar_number,
      c.nominee_pan_number,
      c.remarks AS customer_remarks
    FROM 
      order_items oi
      INNER JOIN orders o ON oi.order_id = o.order_id
      INNER JOIN account_details c ON o.customer_id = c.account_id
    WHERE 
      o.order_status IN ('placed', 'processing', 'shipped', 'delivered')
    ORDER BY 
      o.placed_at DESC
  `;

  db.query(sql, callback);
};

module.exports = {
  getCustomerDetailsByProductId,
  getCustomerDetailsByProductAndOrder,
  getAllOnlineOrdersWithCustomerDetails
};