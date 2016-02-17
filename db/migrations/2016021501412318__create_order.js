module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateOrder extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021501412318;
    }

    up() {

      return [
        this.createTable("orders", [{
          "name": "user_id",
          "type": "int"
        }, {
          "name": "total_price",
          "type": "currency"
        }, {
          "name": "status",
          "type": "string"
        }])
      ];

    }

    down() {

      return [
        this.dropTable("orders")
      ];

    }

  }

  return CreateOrder;

})();
