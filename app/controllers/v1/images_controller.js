module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Image = Nodal.require('app/models/image.js');

  class V1ImagesController extends Nodal.Controller {

    index() {

      Image.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Image.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Image.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Image.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Image.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ImagesController;

})();
