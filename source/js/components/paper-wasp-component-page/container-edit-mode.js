// @flow

import {connect} from 'react-redux';
import {onDragOver, onDrop} from 'paper-wasp-editor/functions';
import {ComponentDecorator} from 'paper-wasp-component/decorator';

import Component from './component-edit-mode';

const PageEditMode = connect(
    null,
    dispatch => ({
        onDragOver,
        onDrop: e => onDrop(e, dispatch)
    })
)(ComponentDecorator(Component));

export {PageEditMode};
