module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Order extends Nodal.Model {}

  Order.setDatabase(Nodal.require('db/main.js'));
  Order.setSchema(Nodal.my.Schema.models.Order);

  return Order;

})();
