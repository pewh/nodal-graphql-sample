module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Order = Nodal.require('app/models/order.js');
  const Product = Nodal.require('app/models/product.js');
  const Category = Nodal.require('app/models/category.js');

  class OrderDetail extends Nodal.Model {}

  OrderDetail.setDatabase(Nodal.require('db/main.js'));
  OrderDetail.setSchema(Nodal.my.Schema.models.OrderDetail);

  OrderDetail.joinsTo(Order, { via: 'orderId', as: 'details', multiple: true });
  OrderDetail.joinsTo(Product, { via: 'productId' });
  OrderDetail.joinsTo(Category, { via: 'categoryId' });

  return OrderDetail;

})();
