/**
 * Created by yifengliu on 16/8/12.
 */

import * as types from '../actions/types';

function counter(state = {count: 0}, action = {}) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}

export default counter;