// @flow

import {connect} from 'react-redux';
import {updateComponent} from 'paper-wasp/action-creators';
import {getChildComponents} from 'paper-wasp/selectors';
import {ComponentDecorator} from 'paper-wasp-component/decorator';

import Component from './component-editor';

const RowEditor = connect(
    (state, props) => ({
        components: getChildComponents(state, props)
    }),
    dispatch => ({
        updateComponent: (uid, data) => dispatch(updateComponent(uid, data))
    })
)(ComponentDecorator(Component));

export {RowEditor};
