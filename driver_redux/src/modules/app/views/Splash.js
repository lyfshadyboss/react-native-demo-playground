/**
 * Created by liuyifeng on 16/8/14.
 */

import React from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';

const angle = new Animated.Value(0);
const Splash = (props)=> {
    const {logo, description} = props;

    Animated.timing(angle, {
        toValue: 1,
        duration: 2000,
    }).start(Actions.home);

    return (
        <View style={styles.container}>
            <Animated.Image
                style={
                    [styles.logo, {
                        transform: [{
                            rotateZ: angle.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg']
                            })
                        }]
                    }]
                }
                source={logo}/>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {},

    description: {
        fontSize: 20,
        color: '#333333'
    }
});

export default Splash;