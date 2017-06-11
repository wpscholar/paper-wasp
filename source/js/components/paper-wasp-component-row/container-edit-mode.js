// @flow

import {connect} from 'react-redux';
import {deleteComponent} from 'paper-wasp/action-creators';
import {getCanDrag, getCanDrop} from 'paper-wasp-editor/selectors';
import {ComponentDecorator} from 'paper-wasp-component/decorator';
import {editComponent, onDragOver, onDragStart, onDrop} from 'paper-wasp-editor/functions';

import Component from './component-edit-mode';

const RowEditMode = connect(
    (state, props) => ({
        canDrag: getCanDrag(state, props),
        canDrop: getCanDrop(state, props)
    }),
    (dispatch, {uid}) => ({
        onDelete: () => dispatch(deleteComponent(uid)),
        onDragOver,
        onDragStart,
        onDrop: e => onDrop(e, dispatch),
        onMenuClick: () => editComponent(dispatch, uid)
    })
)(ComponentDecorator(Component));

export {RowEditMode};
