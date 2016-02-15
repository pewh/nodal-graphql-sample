module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const OrderDetail = Nodal.require('app/models/order_detail.js');

  class V1OrderDetailsController extends Nodal.Controller {

    index() {

      OrderDetail.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      OrderDetail.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      OrderDetail.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      OrderDetail.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      OrderDetail.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1OrderDetailsController;

})();
