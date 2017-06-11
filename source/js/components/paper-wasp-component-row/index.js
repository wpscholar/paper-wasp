// @flow

import {createFactory} from 'react';

import {Row} from './container';
import {RowEditMode} from './container-edit-mode';
import {RowEditor} from './container-editor';

const registerRow = {
    canAdd: false,
    canDelete: true,
    canEdit: true,
    class: Row,
    classEditor: RowEditor,
    decorator: (props: Object) => {
        return createFactory(RowEditMode)(props);
    },
    group: 'component',
    isDynamic: false,
    label: 'Row',
    type: 'row'
};

export {Row, RowEditor, RowEditMode, registerRow};
