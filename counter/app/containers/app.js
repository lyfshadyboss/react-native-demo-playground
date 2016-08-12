/**
 * Created by yifengliu on 16/8/12.
 */

import React, {
    Component
} from 'react';

import {
    Provider
} from 'react-redux';

import CounterApp from './counter';
import configureStore from '../store/configureStore';

class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <CounterApp/>
            </Provider>
        )
    }
}

export default App;