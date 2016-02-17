module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Image = Nodal.require('app/models/image.js');
  const Category = Nodal.require('app/models/category.js');

  class Product extends Nodal.Model {}

  Product.setDatabase(Nodal.require('db/main.js'));
  Product.setSchema(Nodal.my.Schema.models.Product);

  Product.joinsTo(Image);
  Product.joinedBy(Category, { multiple: true });

  return Product;

})();
