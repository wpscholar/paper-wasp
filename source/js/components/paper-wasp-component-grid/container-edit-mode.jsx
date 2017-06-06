// @flow

import {ComponentDecorator} from 'paper-wasp-component/decorator';
import {connect} from 'react-redux';
import {editComponent, onDragOver, onDragStart, onDrop, renderComponentSelector} from 'paper-wasp-editor/functions';

import Component from './component-edit-mode';

const GridEditMode = connect(
    null,
    (dispatch, {uid}) => ({
        onAdd: () => renderComponentSelector(dispatch, uid, 'tile'),
        onDragOver,
        onDragStart,
        onDrop: e => onDrop(e, dispatch),
        onMenuClick: () => editComponent(dispatch, uid)
    })
)(ComponentDecorator(Component));

export {GridEditMode};
