// @flow

import {createFactory} from 'react';

import {Column} from './container';
import {ColumnEditMode} from './container-edit-mode';
import {ColumnEditor} from './component-editor';

const registerColumn = {
    canAdd: false,
    canDelete: true,
    canEdit: true,
    class: Column,
    classEditor: ColumnEditor,
    decorator: (props: Object) => {
        return createFactory(ColumnEditMode)(props);
    },
    group: 'component',
    isDynamic: false,
    label: 'Column',
    type: 'column'
};

export {Column, ColumnEditor, ColumnEditMode, registerColumn};
