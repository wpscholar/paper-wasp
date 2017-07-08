// @flow
import type {ComponentCollection} from '../types';

import {
    addComponent,
    deleteComponentBranch,
    insertComponents,
    moveComponent,
    reorderComponents,
    updateComponent,
    updateComponentData
} from '../functions';

import {
    ADD_COMPONENT,
    DELETE_COMPONENT,
    INSERT_COMPONENTS,
    MOVE_COMPONENT,
    REORDER_COMPONENTS,
    UPDATE_COMPONENT,
    UPDATE_COMPONENT_DATA,
} from '../action-creators';

type Action = {
    uid: string,
    components: ComponentCollection,
    componentType: string,
    data: Object,
    orderedIds: Array<number>,
    parent: string,
    type: string
};

/**
 * Component reducer function
 *
 * @param state {ComponentCollection} An array of component objects
 * @param action {Object}
 * @returns {*}
 */
export function components(state: ComponentCollection = [], action: Action) {

    switch (action.type) {

        case ADD_COMPONENT:
            return addComponent(state, action);

        case DELETE_COMPONENT:
            return deleteComponentBranch(state, action.uid);

        case MOVE_COMPONENT:
            return moveComponent(state, action);

        case UPDATE_COMPONENT:
            return updateComponent(state, action);

        case UPDATE_COMPONENT_DATA:
            return updateComponentData(state, action);

        case REORDER_COMPONENTS:
            return reorderComponents(state, action);

        default:
            return state;
    }

}
