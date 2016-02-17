module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Product = Nodal.require('app/models/product.js');

  class Category extends Nodal.Model {}

  Category.setDatabase(Nodal.require('db/main.js'));
  Category.setSchema(Nodal.my.Schema.models.Category);

  Category.joinsTo(Product, { multiple: true });

  return Category;

})();
