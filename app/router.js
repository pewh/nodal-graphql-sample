module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const router = new Nodal.Router();

  /* Middleware */
  /* executed *before* Controller-specific middleware */

  const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
  // const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
  // const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

  router.middleware.use(CORSMiddleware);
  // router.middleware.use(ForceWWWMiddleware);
  // router.middleware.use(ForceHTTPSMiddleware);

  /* Renderware */
  /* executed *after* Controller-specific renderware */

  const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

  router.renderware.use(GzipRenderware);

  /* Routes */

  const IndexController = Nodal.require('app/controllers/index_controller.js');
  const StaticController = Nodal.require('app/controllers/static_controller.js');
  const Error404Controller = Nodal.require('app/controllers/error/404_controller.js');

  /* generator: begin imports */

  const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');
  const V1CategoriesController = Nodal.require('app/controllers/v1/categories_controller.js');
  const V1ImagesController = Nodal.require('app/controllers/v1/images_controller.js');
  const V1ProductsController = Nodal.require('app/controllers/v1/products_controller.js');
  const V1OrderDetailsController = Nodal.require('app/controllers/v1/order_details_controller.js');
  const V1OrdersController = Nodal.require('app/controllers/v1/orders_controller.js');
  const V1AccessTokensController = Nodal.require('app/controllers/v1/access_tokens_controller.js');

  /* generator: end imports */

  router.route('/').use(IndexController);
  router.route('/static/*').use(StaticController);

  /* generator: begin routes */

  router.route('/v1/users/{id}').use(V1UsersController);
  router.route('/v1/categories/{id}').use(V1CategoriesController);
  router.route('/v1/images/{id}').use(V1ImagesController);
  router.route('/v1/products/{id}').use(V1ProductsController);
  router.route('/v1/order_details/{id}').use(V1OrderDetailsController);
  router.route('/v1/orders/{id}').use(V1OrdersController);
  router.route('/v1/access_tokens/{id}').use(V1AccessTokensController);

  /* generator: end routes */

  router.route('/*').use(Error404Controller);

  return router;

})();
