// @flow

import {PaperWaspEditor} from 'paper-wasp-editor';

const {
    paperWasp: {
        allowedTags,
        allowedAttributes,
        components,
        componentRegistry,
        paperWaspPath,
        postId,
        restBase,
        restNonce,
        userId,
    }
} = window;

const initialState = {
    components,
    container: {
        allowedAttributes,
        allowedTags,
        componentRegistry,
        paperWaspPath,
        postId,
        restBase,
        restNonce,
        userId
    }
};

const App = new PaperWaspEditor(initialState);

App.render(window.document.getElementById('paper-wasp'));
