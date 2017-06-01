// @flow
import {SET_ACTIVE_COMPONENT, CLEAR_ACTIVE_COMPONENT} from '../action-creators';

/**
 * Active component reducer function
 *
 * @param state {int}
 * @param action {Object}
 * @returns {int}
 */
function activeComponent(state: number = 0, action: { type: string, uid: number }) {
    switch (action.type) {

        case SET_ACTIVE_COMPONENT:
            return action.uid;

        case CLEAR_ACTIVE_COMPONENT:
            return 0;

        default:
            return state;
    }
}

export {activeComponent};
