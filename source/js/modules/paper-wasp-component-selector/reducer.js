// @flow
import {SHOW_COMPONENT_SELECTOR, HIDE_COMPONENT_SELECTOR} from './action-creators';

type Action = { type: string };
type State = { isVisible: boolean };

const initialState = {
    isVisible: false
};

/**
 * Component selector reducer function
 *
 * @param state {State}
 * @param action {Action}
 * @returns {Object}
 */
export function componentSelector(state: State = initialState, action: Action): Object {
    switch (action.type) {
        case SHOW_COMPONENT_SELECTOR:
            return {isVisible: true};
        case HIDE_COMPONENT_SELECTOR:
            return {isVisible: false};
        default:
            return state;
    }
}
