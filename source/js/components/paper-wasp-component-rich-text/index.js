// @flow

import {RichText} from './component';
import {RichTextEditor} from './component-editor';

const registerRichText = {
    canAdd: true,
    canDelete: true,
    canEdit: true,
    class: RichText,
    classEditor: RichTextEditor,
    group: 'component',
    isDynamic: false,
    label: 'Rich Text',
    thumbnailUrl: '/assets/img/rich-text.png',
    type: 'rich-text',
};

export {RichText, RichTextEditor, registerRichText};
