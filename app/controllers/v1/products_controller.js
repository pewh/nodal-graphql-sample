module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Product = Nodal.require('app/models/product.js');

  class V1ProductsController extends Nodal.Controller {

    index() {

      Product.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Product.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Product.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Product.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Product.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ProductsController;

})();
