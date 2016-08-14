/**
 * Created by liuyifeng on 16/8/14.
 */
import {handleActions} from 'redux-actions';
import {SELECT_SUBJECT, SELECT_MODEL, FETCH_EXERCISE, FETCH_EXAM, GO_EXERCISE, GO_EXAM} from './constants';

const initialState = {
    subject: 'S1',
    model: 'A1',
    loading: false,
    loadingMsg: "",
    questions: []
};

export default handleActions({
    [SELECT_SUBJECT]: (state, action)=> {
        return {
            ...state,
            subject: action.payload.subject
        }
    },

    [SELECT_MODEL]: (state, action)=> {
        return {
            ...state,
            model: action.payload.model
        }
    },

    [FETCH_EXERCISE]: (state, action) => {
        return {
            ...state,
            loading: true,
            loadingMsg: "正在加载练习题目"
        }
    },

    [FETCH_EXAM]: (state, action) => {
        return {
            ...state,
            loading: true,
            loadingMsg: "正在加载考试题目"
        }
    },

    [GO_EXERCISE]: (state, action) => {
        return {
            ...state,
            loading: false,
            loadingMsg: "",
            questions: action.payload.questions
        }
    },

    [GO_EXAM]: (state, action) => {
        return {
            ...state,
            loading: false,
            loadingMsg: "",
            questions: action.payload.questions
        }
    }
}, initialState);