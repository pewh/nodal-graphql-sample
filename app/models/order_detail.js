module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class OrderDetail extends Nodal.Model {}

  OrderDetail.setDatabase(Nodal.require('db/main.js'));
  OrderDetail.setSchema(Nodal.my.Schema.models.OrderDetail);

  return OrderDetail;

})();
