module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateOrderDetail extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021501410000;
    }

    up() {

      return [
        this.createTable("order_details", [{
          "name": "order_id",
          "type": "int"
        }, {
          "name": "product_id",
          "type": "int"
        }, {
          "name": "category_id",
          "type": "int"
        }, {
          "name": "purchasing_price",
          "type": "currency"
        }, {
          "name": "selling_price",
          "type": "currency"
        }, {
          "name": "quantity",
          "type": "int"
        }])
      ];

    }

    down() {

      return [
        this.dropTable("order_details")
      ];

    }

  }

  return CreateOrderDetail;

})();
