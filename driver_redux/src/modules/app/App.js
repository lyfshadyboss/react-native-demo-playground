/**
 * Created by liuyifeng on 16/8/14.
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Router, Scene, ActionConst,} from 'react-native-router-flux';

import {Splash, Home} from './views';

const RouterWithRedux = connect()(Router);

const App = (props) => {
    return (
        <RouterWithRedux>
            <Scene key="root">
                <Scene key="splash" component={Splash} initial={true} hideNavBar={true}
                       logo={require("../../../image/logo.png")}
                       description="轻松过驾考"/>
                <Scene key="home" component={Home} title="驾考题库" hideNavBar={false} type={ActionConst.REPLACE}/>
            </Scene>
        </RouterWithRedux>
    )
};

export default App;