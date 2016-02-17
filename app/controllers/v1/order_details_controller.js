module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const GraphQuery = Nodal.GraphQuery;
  const OrderDetail = Nodal.require('app/models/order_detail.js');

  class V1OrderDetailsController extends Nodal.Controller {

    index() {
      const query = `
        order_detail {
          id,
          purchasing_price,
          selling_price,
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
      `;

      GraphQuery.query(query, 3, (err, models, format) => {
        this.respond(err || models, format)
      });
    }

    show() {

      const query = `
        order_detail(id: ${this.params.route.id}) {
          id,
          purchasing_price,
          selling_price,
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
          },
          order {
            id,
            totalPrice,
            status
          }
        }
      `;

      GraphQuery.query(query, 3, (err, model, format) => {
        this.respond(err || model, format)
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
