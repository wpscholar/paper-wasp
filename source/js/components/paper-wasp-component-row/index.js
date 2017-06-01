// @flow

import {connect} from 'react-redux';
import {deleteComponent, updateComponent} from 'paper-wasp/action-creators';
import {getChildComponents} from 'paper-wasp/selectors';
import {ComponentDecorator} from 'paper-wasp-component/decorator';
import {editComponent, onDragOver, onDragStart, onDrop} from 'paper-wasp-editor/functions';

import Component from './component';
import Editor from './component-editor';
import EditMode from './component-edit-mode';

const Row = ComponentDecorator(Component);

const RowEditor = connect(
        (state, props) => ({
            components: getChildComponents(state, props)
        }),
        dispatch => ({
            updateComponent: (uid, data) => dispatch(updateComponent(uid, data))
        })
)(ComponentDecorator(Editor));

const RowEditMode = connect(
    null,
    (dispatch, {uid}) => ({
        onDelete: () => dispatch(deleteComponent(uid)),
        onDragOver,
        onDragStart,
        onDrop: e => onDrop(e, dispatch),
        onMenuClick: () => editComponent(dispatch, uid)
    })
)(ComponentDecorator(EditMode));

export {Row, RowEditor, RowEditMode};
