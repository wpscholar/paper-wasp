// @flow
import {connect} from 'react-redux';
import {editComponent, onDragOver, onDragStart, onDrop, renderComponentSelector} from 'paper-wasp-editor/functions';
import {ComponentDecorator} from 'paper-wasp-component/decorator';

import Component from './component';
import ColumnEditor from './component-editor';
import EditMode from './component-edit-mode';

const Column = ComponentDecorator(Component);

const ColumnEditMode = connect(
    null,
    (dispatch, {uid}) => ({
        onAdd: () => renderComponentSelector(dispatch, uid),
        onDragOver,
        onDragStart,
        onDrop: e => onDrop(e, dispatch),
        onMenuClick: () => editComponent(dispatch, uid)
    })
)(ComponentDecorator(EditMode));

export {Column, ColumnEditor, ColumnEditMode};
