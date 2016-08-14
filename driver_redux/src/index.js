/**
 * Created by liuyifeng on 16/8/14.
 */
import React from 'react';
import {Provider} from 'react-redux';
import {app} from './modules';
import createStore from './createStore';

const Main = () => {
    return (
        <Provider store={createStore()}>
            <app.App />
        </Provider>
    )
};

export default Main;