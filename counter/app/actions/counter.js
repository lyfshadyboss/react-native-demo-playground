/**
 * Created by yifengliu on 16/8/12.
 */

import * as types from './types';

function increment() {
    return {
        type: types.INCREMENT
    }
}

function decrement() {
    return {
        type: types.DECREMENT
    }
}

export {
    increment,
    decrement
}