module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Product extends Nodal.Model {}

  Product.setDatabase(Nodal.require('db/main.js'));
  Product.setSchema(Nodal.my.Schema.models.Product);

  return Product;

})();
