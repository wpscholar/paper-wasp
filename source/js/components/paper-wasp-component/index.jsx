// @flow

import {connect} from 'react-redux';
import {deleteComponent, updateComponent, updateComponentData} from 'paper-wasp/action-creators';
import {getChildComponents} from 'paper-wasp/selectors';
import {editComponent, onDragStart} from 'paper-wasp-editor/functions';
import {closeModal} from 'paper-wasp-editor/action-creators';
import {
    getActiveComponent,
    getActiveComponentLabel,
    getCurrentComponentLabel,
    getCanEdit,
    getCanDelete
} from 'paper-wasp-editor/selectors';

import {getComponentEditorChildren} from './selectors';

import Component from './component';
import ComponentEditor from './component-editor';

const PaperWaspComponent = connect(
    (state, props) => ({
        canDelete: getCanDelete(state, props),
        canEdit: getCanEdit(state, props),
        childComponents: getChildComponents(state, props),
        label: getCurrentComponentLabel(state, props)
    }),
    (dispatch, {uid}) => {
        return {
            onDragStart,
            onEdit: () => editComponent(dispatch, uid),
        };
    }
)(Component);

const PaperWaspComponentEditor = connect(
    (state) => {
        const component = getActiveComponent(state);
        return {
            label: getActiveComponentLabel(state),
            ...component,
            canDelete: getCanDelete(state, component),
            canEdit: getCanEdit(state, component),
            children: getComponentEditorChildren(state),
        };
    },
    (dispatch, {uid}) => ({
        onCancel: () => dispatch(closeModal()),
        onDelete: () => {
            dispatch(deleteComponent(uid));
            dispatch(closeModal());
        },
        onSave: ({className, data, id}) => {
            dispatch(updateComponent(uid, {className, id}));
            dispatch(updateComponentData(uid, data));
            dispatch(closeModal());
        }
    })
)(ComponentEditor);

export {PaperWaspComponent, PaperWaspComponentEditor};
