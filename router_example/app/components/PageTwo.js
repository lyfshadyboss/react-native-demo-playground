/**
 * Created by liuyifeng on 16/8/14.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageTwo extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Text>This is PageTwo!</Text>
                <Text>{this.props.text}</Text>
                <Text> The current scene is titled {this.props.routes.scene.title}.</Text>
            </View>
        )
    }
}