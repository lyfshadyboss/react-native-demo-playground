/**
 * Created by liuyifeng on 16/8/13.
 */

import {Platform} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import devTools from 'remote-redux-devtools';
import reducers from './reducers';

const enhancer = compose(
    applyMiddleware(),
    devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678
    })
);

export default (data = {}) => {
    return createStore(reducers, data, enhancer);
}
