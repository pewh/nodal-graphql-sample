module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateUser extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016021501380261;
    }

    up() {

      return [
        this.createTable("users", [{
          "name": "phoneNumber",
          "type": "string",
          "properties": {
            "unique": true
          }
        }, {
          "name": "name",
          "type": "string"
        }, {
          "name": "password",
          "type": "string"
        }, {
          "name": "gcmToken",
          "type": "string"
        }, {
          "name": "subscribeNotification",
          "type": "boolean"
        }])
      ];

    }

    down() {

      return [
        this.dropTable("users")
      ];

    }

  }

  return CreateUser;

})();
