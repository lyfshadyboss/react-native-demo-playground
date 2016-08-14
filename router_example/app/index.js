/**
 * Created by liuyifeng on 16/8/14.
 */
import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';

import PageOne from './components/PageOne';
import PageTwoContainer from './containers/PageTwoContainer';
import createStore from './createStore';

const RouterWithRedux = connect()(Router);

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="pageOne" component={PageOne} title="PageOne" initial={true}/>
                        <Scene key="pageTwo" component={PageTwoContainer} title="PageTwo"/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}