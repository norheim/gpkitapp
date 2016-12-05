_ = require('lodash');
$ = require('jquery');
require('bootstrap-loader');

var value = 'export value';

module.exports = {
    test_value : value,
    $ : $
};

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function() {
        //clearInterval(timer);
    });
}