// @flow

import PaperWasp from 'paper-wasp/app';

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

const App = new PaperWasp(initialState);

App.render();
