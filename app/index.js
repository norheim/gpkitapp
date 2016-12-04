_ = require('lodash');
require('bootstrap-loader');

module.exports = {};

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    //clearInterval(timer);
  });
}