/**
 * Created by liuyifeng on 16/8/14.
 */
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const RoundButton = (props)=> {
    const {text, backgroundColor, onClick} = props;

    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor: backgroundColor}]}
            onPress={onClick}
            activeOpacity={0.5}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15
    }
});

export default RoundButton;