_ = require('lodash');
$ = require('jquery');
require('bootstrap-loader');

module.exports = {
    test_value : 'exported value',
    $ : $
};

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function() {
        //clearInterval(timer);
    });
}