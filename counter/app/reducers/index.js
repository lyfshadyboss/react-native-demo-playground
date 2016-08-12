/**
 * Created by yifengliu on 16/8/12.
 */

import {combineReducers} from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;