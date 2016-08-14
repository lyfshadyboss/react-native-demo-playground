/**
 * Created by liuyifeng on 16/8/14.
 */
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';

import {RoundButton, LoadingMask} from '../../../components';
import ModelPage from './ModelPage';
import * as actions from '../actions';

const Home = (props)=> {
    const {subject, model, loading, loadingMsg, selectSubject, selectModel, fetchExercise, fetchExam} = props;

    const handleFetchExercise = ()=> {
        fetchExercise(subject, model);
    };

    const handleFetchExam = ()=> {
        fetchExam(subject, model);
    };

    const renderTabHeader = () => {
        return (
            <View style={{height: 40, flexDirection: "row"}}>
                <TouchableOpacity style={subject == 'S1' ? styles.tabHeaderSelected : styles.tabHeader}>
                    <Text style={subject == 'S1' ? styles.tabHeaderTextSelected : styles.tabHeaderText}>科目1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={subject == 'S4' ? styles.tabHeaderSelected : styles.tabHeader}>
                    <Text style={subject == 'S4' ? styles.tabHeaderTextSelected : styles.tabHeaderText}>科目4</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <LoadingMask loading={loading} msg={loadingMsg}/>

            <View style={styles.tabs}>
                {renderTabHeader()}

                <Swiper height={360} loop={false} showsPagination={false}
                        onMomentumScrollEnd={(e, state, context)=> {
                            selectSubject(state.index == 0 ? 'S1' : 'S4')
                        }}>
                    <ModelPage model={model} selectModel={selectModel}/>
                    <ModelPage model={model} selectModel={selectModel}/>
                </Swiper>
            </View>

            <View style={styles.bottomBar}>
                <RoundButton onClick={handleFetchExercise} text="顺序练习" backgroundColor="rgb(131, 201, 25)"/>
                <RoundButton onClick={handleFetchExam} text="模拟考试" backgroundColor="rgb(179, 112, 226)"/>
                <RoundButton text="我的收藏" backgroundColor="rgb(245, 188, 35)"/>
                <RoundButton text="我的错题" backgroundColor="rgb(254, 155, 155)"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    tabs: {
        height: 400
    },
    tabHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#c8c8c8',
        borderBottomWidth: 1
    },
    tabHeaderSelected: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#009fde',
        borderBottomWidth: 1
    },
    tabHeaderText: {
        color: '#333333',
        fontSize: 16,
        borderBottomColor: '#c8c8c8',
        borderBottomWidth: 1
    },
    tabHeaderTextSelected: {
        color: '#009fde',
        fontSize: 16
    },
    bottomBar: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default connect((state)=> ({
    ...state.app
}), (dispatch)=>({
    selectSubject: (subject)=> {
        dispatch(actions.selectSubject(subject))
    },
    selectModel: (model)=> {
        dispatch(actions.selectModel(model))
    },
    fetchExercise: (subject, model)=> {
        dispatch(actions.fetchExercise(subject, model))
    },
    fetchExam: (subject, model)=> {
        dispatch(actions.fetchExam(subject, model))
    },
}))(Home);