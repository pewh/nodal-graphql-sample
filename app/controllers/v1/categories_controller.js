module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Category = Nodal.require('app/models/category.js');

  class V1CategoriesController extends Nodal.Controller {

    index() {

      Category.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Category.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Category.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Category.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Category.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1CategoriesController;

})();
