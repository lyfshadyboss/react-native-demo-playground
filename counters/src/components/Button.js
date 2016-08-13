/**
 * Created by liuyifeng on 16/8/13.
 */

import React, {PropTypes} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
    const {children, onClick} = props;

    return (
        <TouchableOpacity onPress={onClick} style={styles.button}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

Button.PropTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Button;

