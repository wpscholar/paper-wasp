// @flow
import {PaperWaspEditor} from 'paper-wasp-editor';

import componentRegistry from './component-registry';

const {
    paperWasp: {
        allowedTags,
        allowedAttributes,
        components,
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
