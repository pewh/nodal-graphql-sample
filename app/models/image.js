module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Image extends Nodal.Model {}

  Image.setDatabase(Nodal.require('db/main.js'));
  Image.setSchema(Nodal.my.Schema.models.Image);

  return Image;

})();
