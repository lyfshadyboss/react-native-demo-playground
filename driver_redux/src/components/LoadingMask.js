/**
 * Created by liuyifeng on 16/8/14.
 */

import React from 'react';
import {Modal, StyleSheet, View, Text, Animated, Easing} from 'react-native';

const angle = new Animated.Value(0);
const LoadingMask = (props)=> {
    const {loading, msg} = props;

    const startAnimation = ()=> {
        angle.setValue(0);
        Animated.timing(angle, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
        }).start(startAnimation);
    };

    startAnimation();

    return (
        <Modal animationType={"none"} transparent={true} visible={loading} onRequestClose={()=> {
        }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Animated.Image
                        source={require("../../image/logo.png")}
                        style={[styles.logo, {
                            transform: [{
                                rotateZ: angle.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "360deg"],
                                }),
                            }]
                        }]}/>
                    <Text style={styles.msg}>{msg}</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 40,
        height: 40
    },
    msg: {
        marginLeft: 20,
        color: '#333333',
        fontSize: 16,
    }
});

export default LoadingMask;