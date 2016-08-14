/**
 * Created by liuyifeng on 16/8/14.
 */

import {connect} from 'react-redux';
import PageTwo from '../components/PageTwo';

export default connect(({routes})=>({routes}))(PageTwo);