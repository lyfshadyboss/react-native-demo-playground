/**
 * Created by yifengliu on 16/8/12.
 */
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {count, increment, decrement} = this.props;

        return (
            <View style={styles.container}>
                <Text>{count}</Text>
                <TouchableOpacity onPress={increment} style={styles.button}>
                    <Text>UP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decrement} style={styles.button}>
                    <Text>DOWN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});

export default Counter;