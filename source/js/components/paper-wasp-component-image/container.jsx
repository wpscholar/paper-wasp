// @flow

import {connect} from 'react-redux';

import Component from './component';

const Image = connect(
    (state, {data}) => ({...data})
)(Component);

export {Image};
