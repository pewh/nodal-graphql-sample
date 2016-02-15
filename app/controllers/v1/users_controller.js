module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  const whitelistProps = [
    'id',
    'phoneNumber',
    'name',
    'gcmToken',
    'subscribeNotification',
    'created_at',
  ];

  class V1UsersController extends Nodal.Controller {

    index() {

      User.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, whitelistProps);

        });

    }

    show() {

      User.find(this.params.route.id, (err, model) => {

        this.respond(err || model, whitelistProps);

      });

    }

    create() {

      User.create(this.params.body, (err, model) => {

        this.respond(err || model, whitelistProps);

      });

    }

    update() {

      User.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model, whitelistProps);

      });

    }

    destroy() {

      User.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model, whitelistProps);

      });

    }

  }

  return V1UsersController;

})();
