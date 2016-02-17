module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateCategory extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021501391388;
    }

    up() {

      return [
        this.createTable("categories", [{
          "name": "name",
          "type": "string"
        }, {
          "name": "stock",
          "type": "int"
        }, {
          "name": "infinite_stock",
          "type": "boolean",
            "defaultValue": false
        }, {
          "name": "product_id",
          "type": "int"
        }])
      ];

    }

    down() {

      return [
        this.dropTable("categories")
      ];

    }

  }

  return CreateCategory;

})();
