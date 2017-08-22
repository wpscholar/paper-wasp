import {
    ACTION_BAR_SAVE_START,
    ACTION_BAR_SHOW_MODAL,
    ACTION_BAR_HIDE_MODAL,
    ACTION_BAR_SAVE_SUCCESS,
    ACTION_BAR_SAVE_FAILURE
} from '../action-creators';

import {
    ADD_COMPONENT,
    DELETE_COMPONENT,
    INSERT_COMPONENTS,
    MOVE_COMPONENT,
    REORDER_COMPONENTS,
    UPDATE_COMPONENT,
    UPDATE_COMPONENT_DATA,
} from 'paper-wasp/action-creators';

type Action = { type: string };
type State = {
    isSaving: bool,
    isSuccess: bool,
    shouldSave: bool,
    showModal: bool,
};

const initialState = {
    isSaving: false,
    isSuccess: false,
    shouldSave: false,
    showModal: false,
};

/**
 * Component selector reducer function
 *
 * @param state {State}
 * @param action {Action}
 * @returns {Object}
 */
export function actionBar(state: State = initialState, action: Action): Object {

    switch (action.type) {

        case ACTION_BAR_SAVE_START:
            return Object.assign({}, state, {
                isSaving: true,
                showModal: true
            });

        case ACTION_BAR_SHOW_MODAL:
            return Object.assign({}, state, {
                showModal: true
            });

        case ACTION_BAR_HIDE_MODAL:
            return Object.assign({}, state, {
                showModal: false
            });

        case ACTION_BAR_SAVE_SUCCESS:
            return Object.assign({}, state, {
                isSaving: false,
                isSuccess: true,
                shouldSave: false,
                showModal: true
            });

        case ACTION_BAR_SAVE_FAILURE:
            return Object.assign({}, state, {
                isSaving: false,
                isSuccess: false,
                showModal: true
            });

        case ADD_COMPONENT:
        case DELETE_COMPONENT:
        case INSERT_COMPONENTS:
        case MOVE_COMPONENT:
        case REORDER_COMPONENTS:
        case UPDATE_COMPONENT:
        case UPDATE_COMPONENT_DATA:
            return Object.assign({}, state, {
                shouldSave: true
            });
            break;

        default:
            return state;
    }
}
