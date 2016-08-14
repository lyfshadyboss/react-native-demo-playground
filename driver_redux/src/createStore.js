/**
 * Created by liuyifeng on 16/8/14.
 */
import {Platform} from 'react-native';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import {app} from './modules';

const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
        name: Platform.OS,
        hostname: '192.168.0.101',
        port: 5678
    })
);

export default (data = {}) => {
    const rootReducer = combineReducers({
        [app.NAME]: app.reducer
    });

    return createStore(rootReducer, data, enhancer);
}
