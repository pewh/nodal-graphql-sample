module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const OrderDetail = Nodal.require('app/models/order_detail.js');

  class Order extends Nodal.Model {}

  Order.setDatabase(Nodal.require('db/main.js'));
  Order.setSchema(Nodal.my.Schema.models.Order);

  Order.joinedBy(OrderDetail, { multiple: true });

  return Order;

})();
