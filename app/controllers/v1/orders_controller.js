module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const GraphQuery = Nodal.GraphQuery;
  const Order = Nodal.require('app/models/order.js');

  class V1OrdersController extends Nodal.Controller {

    index() {
      const query = `
        order {
          id,
          total_price,
          status,
          user_id,
          order_details {
            id,
            purchasing_price,
            selling_price,
            quantity,
            category,
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

      GraphQuery.query(query, 6, (err, models, format) => {
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
