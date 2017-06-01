// @flow
import {connect} from 'react-redux';
import {onDragOver, onDrop} from 'paper-wasp-editor/functions';
import {ComponentDecorator} from 'paper-wasp-component/decorator';

import PaperWaspPage from './component';
import EditMode from './component-edit-mode';

const Page = ComponentDecorator(PaperWaspPage);

const PageEditMode = connect(
    null,
    dispatch => ({
        onDragOver,
        onDrop: e => onDrop(e, dispatch)
    })
)(ComponentDecorator(EditMode));

export {Page, PageEditMode};
