/**
 * Created by liuyifeng on 16/8/14.
 */
import {SELECT_SUBJECT, SELECT_MODEL, FETCH_EXERCISE, FETCH_EXAM, GO_EXERCISE, GO_EXAM} from './constants';
import getQuestions from './api/questionsAPI';

export const selectSubject = (subject)=> {
    return {
        type: SELECT_SUBJECT,
        payload: {
            subject
        }
    }
};

export const selectModel = (model)=> {
    return {
        type: SELECT_MODEL,
        payload: {
            model
        }
    }
};

export const fetchExercise = (subject, model)=> {
    return (dispatch, getState)=> {
        dispatch({
            type: FETCH_EXERCISE
        });

        getQuestions(subject == 'S1' ? '1' : '4', model, 'order', (questions) => {
            dispatch({
                type: GO_EXERCISE,
                payload: {
                    questions
                }
            });
        })
    }
};

export const fetchExam = (subject, model)=> {
    return (dispatch, getState)=> {
        dispatch({
            type: FETCH_EXAM
        });

        getQuestions(subject == 'S1' ? '1' : '4', model, 'rand', (questions) => {
            dispatch({
                type: GO_EXAM,
                payload: {
                    questions
                }
            });
        })
    }
};