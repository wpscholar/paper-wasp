// @flow
import type {Context} from 'paper-wasp/types';

import {SET_EDIT_CONTEXT, SET_VIEW_CONTEXT} from '../action-creators';

/**
 * Context reducer function
 *
 * @param state {Context}
 * @param action {Object}
 * @returns {Context}
 */
function context(state: Context = 'view', action: { type: string }) {
    switch (action.type) {

        case SET_EDIT_CONTEXT:
            return 'edit';

        case SET_VIEW_CONTEXT:
            return 'view';

        default:
            return state;
    }
}

export {context};
