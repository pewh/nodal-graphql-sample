module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateImage extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021501385319;
    }

    up() {

      return [
        this.createTable("images", [{
          "name": "name",
          "type": "string"
        }, {
          "name": "url",
          "type": "string"
        }])
      ];

    }

    down() {

      return [
        this.dropTable("images")
      ];

    }

  }

  return CreateImage;

})();
