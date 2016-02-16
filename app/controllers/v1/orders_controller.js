module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const GraphQuery = Nodal.GraphQuery;
  const Order = Nodal.require('app/models/order.js');

  class V1OrdersController extends Nodal.Controller {

    index() {
      // Order.query()
      //   .join('details')
      //   .where(this.params.query)
      //   .end((err, models) => {

      //     this.respond(err || models, ['id', 'status', 'details']);

      //   });
      const query = `
        order {
          id,
          totalPrice,
          status,
          userId,
          details {
            id,
            purchasingPrice,
            sellingPrice,
            quantity,
            category {
              name
            },
            product {
              name,
              description,
              image {
                name,
                url
              }
            }
          }
        }
      `;

      GraphQuery.query(query, 5, (err, models, format) => {
        this.respond(err || models, format)
      });
    }

    show() {

      const query = `
        order(id: ${this.params.route.id}) {
          id,
          totalPrice,
          status,
          details {
            id,
            purchasingPrice,
            sellingPrice,
            quantity,
            category {
              name
            },
            product {
              name,
              description,
              image {
                name,
                url
              }
            }
          }
        }
      `;

      GraphQuery.query(query, 4, (err, model, format) => {
        this.respond(err || model, format)
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
