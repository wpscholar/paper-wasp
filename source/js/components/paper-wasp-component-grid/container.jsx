// @flow

import {connect} from 'react-redux';
import {ComponentDecorator} from 'paper-wasp-component/decorator';

import Component from './component';

const Grid = connect(
    (state, {data: {columns}}) => ({columns})
)(ComponentDecorator(Component));

export {Grid};
