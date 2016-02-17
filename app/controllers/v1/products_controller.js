module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const GraphQuery = Nodal.GraphQuery;
  const Product = Nodal.require('app/models/product.js');

  class V1ProductsController extends Nodal.Controller {

    index() {

      const query = `
        product {
          id,
          name,
          description,
          purchasing_price,
          selling_price,
          updated_at,
          image { name, url },
          categories { id, name, stock, infinite_stock },
        }
      `;

      GraphQuery.query(query, 2, (err, models, format) => {
        this.respond(err || models, format)
      });

    }

    show() {

      const id = this.params.route.id

      const query = `
        product(id:${id}) {
          id,
          name,
          description,
          purchasing_price,
          selling_price,
          updated_at,
          image { name, url },
          categories { id, name, stock, infinite_stock },
        }
      `;

      GraphQuery.query(query, 2, (err, models, format) => {
        if (!err && !models.length) {
          let err = new Error(`Could not find Product with id "${id}".`);
          err.notFound = true;
          this.respond(err);
        }

        this.respond(err || models[0], format)
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
