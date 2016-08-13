/**
 * Created by liuyifeng on 16/8/13.
 */

import React, {PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './Button';

const Counter = (props) => {
    const {children, decrementFn, incrementFn, incrementWithDelayFn} = props;

    return (
        <View style={styles.container}>
            <Button onClick={decrementFn}>-</Button>
            <Text style={styles.label}>{children}</Text>
            <Button onClick={incrementFn}>+</Button>
            <Button onClick={incrementWithDelayFn}>+ with delay</Button>
        </View>
    )
};

Counter.propTypes = {
    decrementFn: PropTypes.func.isRequired,
    children: PropTypes.number.isRequired,
    incrementFn: PropTypes.func.isRequired,
    incrementWithDelayFn: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        width: 40,
        textAlign: 'center'
    }
});

export default Counter;