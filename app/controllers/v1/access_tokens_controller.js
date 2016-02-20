module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const AccessToken = Nodal.require('app/models/access_token.js');
  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1AccessTokensController extends AuthController {

    create() {
      AccessToken.login(this.params, (err, accessToken) => {
        this.respond(err || accessToken);
      });
    }

    destroy() {
      // FIXME: not work. Need post to github issue
      AccessToken.logout(this.params, (err, accessToken) => {
        this.respond(err || accessToken);
      });
    }
  }

  return V1AccessTokensController;

})();
