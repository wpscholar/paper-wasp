// @flow

import {connect} from 'react-redux';
import {editComponent, onDragOver, onDragStart, onDrop, renderComponentSelector} from 'paper-wasp-editor/functions';
import {getCanAppend, getCanDrag, getCanDrop, getCanEdit} from 'paper-wasp-editor/selectors';
import {ComponentDecorator} from 'paper-wasp-component/decorator';

import Component from './component-edit-mode';

const ColumnEditMode = connect(
    (state, props) => ({
        canAppend: getCanAppend(state, props),
        canDrag: getCanDrag(state, props),
        canDrop: getCanDrop(state, props),
        canEdit: getCanEdit(state, props)
    }),
    (dispatch, {uid}) => ({
        onAdd: () => renderComponentSelector(dispatch, uid),
        onDragOver,
        onDragStart,
        onDrop: e => onDrop(e, dispatch),
        onMenuClick: () => editComponent(dispatch, uid)
    })
)(ComponentDecorator(Component));

export {ColumnEditMode};
