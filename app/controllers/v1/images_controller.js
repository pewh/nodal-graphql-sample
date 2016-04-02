module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const stream = require('stream');
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

      // 1. get form-data buffer
      let formData
      const bufferStream = new stream.PassThrough();
      bufferStream.end(this.params.buffer);
      bufferStream.pipe(formData); // { name, file }
      console.log(formData);

      // 2. save as /static/images with yyyymmdd-hhmmss.png
      // 3. get file path
      // const body = Object.assign({}, this.params.body, {
      //  url: filepath
      // } 

      // Image.create(body, (err, model) => {
      //   this.respond(err || model);
      // });

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
