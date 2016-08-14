/**
 * Created by liuyifeng on 16/8/14.
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import CommonStyles from '../styles/common';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(this.state.angle, {
            toValue: 1,
            duration: 2000,
        }).start();
    }

    render() {
        const {logo, description} = this.props;

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={
                        [styles.logo, {
                            transform: [{
                                rotateZ: this.state.angle.interpolate({
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
    }
}

Splash.PropTypes = {
    logo: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.defaultContainer
    },

    logo: {},

    description: {
        fontSize: 20,
        color: '#333333'
    }
});

export default Splash;