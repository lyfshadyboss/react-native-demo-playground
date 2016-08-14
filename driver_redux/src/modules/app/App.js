/**
 * Created by liuyifeng on 16/8/14.
 */
import React, {PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

import {Splash} from './../../components';
import * as actions from './actions';
import CommonStyles from '../../styles/common';

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.defaultContainer
    }
});

const App = (props) => {
    return (
        <View style={styles.container}>
            <Splash logo={require("../../../image/logo.png")} description="轻松过驾考"/>
        </View>
    )
}

App.displayName = 'App';
App.propTypes = {};

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(App);