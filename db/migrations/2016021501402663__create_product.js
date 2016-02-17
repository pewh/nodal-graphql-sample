module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateProduct extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021501402663;
    }

    up() {

      return [
        this.createTable("products", [{
          "name": "name",
          "type": "string"
        }, {
          "name": "description",
          "type": "string"
        }, {
          "name": "image_id",
          "type": "int"
        }, {
          "name": "purchasing_price",
          "type": "currency"
        }, {
          "name": "selling_price",
          "type": "currency"
        }])
      ];

    }

    down() {

      return [
        this.dropTable("products")
      ];

    }

  }

  return CreateProduct;

})();
