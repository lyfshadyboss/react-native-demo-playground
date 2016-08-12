/**
 * Created by yifengliu on 16/8/12.
 */

import React, {
    Component
} from 'react';

import {
    bindActionCreators
} from 'redux';

import {
    connect
} from 'react-redux';

import * as counterActions from '../actions/counter';
import Counter from '../components/counter';

class CounterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {count, actions} = this.props;

        return (
            <Counter
                count={count}
                {...actions} />
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.count
});

const mapActionToProps = (dispatch)=> ({
    actions: bindActionCreators(counterActions, dispatch)
});

export default connect(mapStateToProps, mapActionToProps)(CounterApp);