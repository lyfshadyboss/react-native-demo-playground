/**
 * Created by liuyifeng on 16/8/13.
 */
import {INCREMENT, DECREMENT, ADD_NEW_COUNTER} from './constants'

export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: {
            id
        }
    }
};

export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: {
            id
        }
    }
};

export const newCounter = () => {
    return {
        type: ADD_NEW_COUNTER
    }
};

export const incrementWithDelay = (id) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({
                type: INCREMENT,
                payload: {
                    id
                }
            })
        }, 1000)
    }
};