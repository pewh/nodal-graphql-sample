module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Order = Nodal.require('app/models/order.js');

  class V1OrdersController extends Nodal.Controller {

    index() {

      Order.query()
        .join('orderDetails')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Order.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Order.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Order.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Order.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1OrdersController;

})();
