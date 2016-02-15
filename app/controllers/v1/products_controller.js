module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Product = Nodal.require('app/models/product.js');

  const revealChildrenProps = [
    'id',
    'name',
    'description',
    'purchasingPrice',
    'sellingPrice',
    'updated_at',
    { image: ['name', 'url'] },
    { categories: ['id', 'name', 'stock', 'infiniteStock'] },
  ];

  class V1ProductsController extends Nodal.Controller {

    index() {

      Product.query()
        .join('image')
        .join('categories')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, revealChildrenProps);

        });

    }

    show() {
      const id = this.params.route.id

      Product.query()
        .join('image')
        .join('categories')
        .where({ id })
        .end((err, models) => {
          if (!err && !models.length) {
            let err = new Error(`Could not find Product with id "${id}".`);
            err.notFound = true;
            this.respond(err);
          }

          this.respond(err || models[0], revealChildrenProps);

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
