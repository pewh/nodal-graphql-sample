module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Category extends Nodal.Model {}

  Category.setDatabase(Nodal.require('db/main.js'));
  Category.setSchema(Nodal.my.Schema.models.Category);

  return Category;

})();
