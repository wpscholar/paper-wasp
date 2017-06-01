// @flow

import type {ReactChildren} from 'react-flow-types';

type Action = {
    content: ReactChildren,
    isOpen: boolean,
    type: string
};

type State = {
    content: ReactChildren,
    isOpen: boolean
};

const initialState = {
    content: '',
    isOpen: false
};

export default function (state: State = initialState, action: Action) {
    switch (action.type) {

        case 'MODAL_OPEN':
            return Object.assign({}, state, {isOpen: true});

        case 'MODAL_CLOSE':
            return Object.assign({}, state, {isOpen: false});

        case 'MODAL_SET_CONTENT':
            return Object.assign({}, state, {content: action.content});

        default:
            return state;
    }
}
