import * as _ from 'lodash';
import $ from 'jquery';
import 'bootstrap-loader';
import './style.css';
import './component.jsx';

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