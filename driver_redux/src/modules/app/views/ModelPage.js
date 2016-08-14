/**
 * Created by liuyifeng on 16/8/14.
 */
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const ModelPage = (props)=> {
    const {model, selectModel} = props;

    const renderModelItem = (m)=> {
        return (
            <TouchableOpacity style={styles.item} onPress={()=>(selectModel(m))}>
                <Text style={model == m ? styles.textSelected : styles.text}>{m}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1}}>
            <View style={styles.row}>
                {renderModelItem('A1')}
                {renderModelItem('A2')}
            </View>
            <View style={styles.row}>
                {renderModelItem('B1')}
                {renderModelItem('B2')}
            </View>
            <View style={styles.row}>
                {renderModelItem('C1')}
                {renderModelItem('C2')}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
    },
    text: {
        color: '#333333',
        fontSize: 16
    },
    textSelected: {
        color: '#009fde',
        fontSize: 16,
    }
});

export default ModelPage;