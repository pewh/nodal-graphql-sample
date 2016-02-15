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
          "name": "orderId",
          "type": "int"
        }, {
          "name": "productId",
          "type": "int"
        }, {
          "name": "categoryId",
          "type": "int"
        }, {
          "name": "purchasingPrice",
          "type": "currency"
        }, {
          "name": "sellingPrice",
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
