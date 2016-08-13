/**
 * Created by liuyifeng on 16/8/13.
 */

import React, {PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Button from './Button';

const Counters = (props) => {
    const {children, addFn} = props;

    return (
        <View style={styles.container}>
            {children}
            <Button onClick={addFn}>Add New Counter</Button>
        </View>
    )
};

Counters.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
    addFn: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Counters;
