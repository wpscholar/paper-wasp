// @flow
import filter from 'lodash.filter';
import find from 'lodash.find';
import includes from 'lodash.includes';
import indexOf from 'lodash.indexof';
import map from 'lodash.map';
import max from 'lodash.max';
import without from 'lodash.without';

import type {Component, ComponentCollection} from './types';
import {addComponent as generateAddComponentAction} from './action-creators';
import {getComponents, getChildComponents} from './selectors';

/**
 * Component reducer helper function
 * Adds a component
 *
 * @param state {ComponentCollection} An array of component objects
 * @param componentType {string} (from action)
 * @param type {string} (from action)
 * @param action {Object} Dispatched action for the ADD_COMPONENT action (see action creators)
 * @returns {ComponentCollection}
 */
export function addComponent(
    state: ComponentCollection,
    {componentType, type, ...action}: { componentType: string, parent: number, type: string }
): ComponentCollection {
    const defaults = {
        data: {},
        index: getNextIndex(state, action.parent),
        parent: 0,
        type: componentType,
        uid: Date.now()
    };
    return [...state, Object.assign(defaults, action)];
}

/**
 * Component reducer helper function
 * Deletes a (single) component
 *
 * @param state {ComponentCollection} An array of component objects
 * @param uid {int} The ID of the component to be deleted.
 * @returns {ComponentCollection}
 */
export function deleteComponent(state: ComponentCollection, uid: number): ComponentCollection {
    return without(state, find(state, {uid}));
}

/**
 * Component reducer helper function
 * Deletes a component and all descendants
 *
 * @param state {ComponentCollection} An array of component objects
 * @param uids {int|int[]} An ID or array of IDs from which to start deleting
 */
export function deleteComponentBranch(
    state: ComponentCollection,
    uids: number | Array<number>
): Array<number> {
    let newState = state;
    Array.prototype.concat(uids).forEach((uid) => {
        newState = deleteComponent(newState, uid);
        const children = filter(newState, {parent: uid});
        if (children) {
            newState = deleteComponentBranch(newState, map(children, 'uid'));
        }
    });
    return newState;
}

/**
 * Find top-level component IDs in a collection of components.
 *
 * @param components {ComponentCollection} A collection of component objects
 * @returns {int[]} A collection of component IDs
 */
export function findTopLevelComponentIds(components: ComponentCollection): Array<number> {
    const uids = components.map(({uid}) => uid);
    return map(filter(components, component => !includes(uids, component.parent)), 'uid');
}

/**
 * Get a component branch including a component and all of its descendants.
 *
 * @param state {Object} The entire store state
 * @param componentId {int} The ID of the component whose branch is to be fetched
 * @returns {ComponentCollection} An array of component objects
 */
export function getComponentBranch(state: Object, componentId: number = 0): ComponentCollection {

    const branch = [];

    getChildren([componentId]);

    function getChildren(uids) {
        uids.forEach((uid) => {
            const component = getComponentById({components: state}, uid);
            if (component) {
                branch.push(component);
            }
            const children = getChildComponents(state, {uid});
            if (children.length) {
                getChildren(map(children, 'uid'));
            }
        });
    }

    return branch;
}

/**
 * Look up a component by ID
 *
 * @param state {Object} The entire store state
 * @param uid {int} The ID of the component to fetch
 * @returns {Component} A component object
 */
export function getComponentById(state: Object, uid: number): Component {
    return find(getComponents(state), {uid});
}

/**
 * Component reducer helper function
 * Get the next index for a child, given the parent ID
 *
 * @param state {ComponentCollection} An array of component objects
 * @param parent {int} The ID of the parent component
 * @returns {int} The index to be used for the next component insertion for the parent
 */
export function getNextIndex(state: ComponentCollection, parent: number): number {
    const siblings = filter(state, {parent});
    return siblings && siblings.length ? max(map(siblings, 'index')) + 1 : 0;
}

/**
 * Get parent component for a specific component by ID
 *
 * @param state {Object} The entire store state
 * @param uid {int} The ID of the component whose parent is to be fetched
 * @returns {Component} A component object
 */
export function getParentComponent(state: Object, uid: number): Component {
    return find(getComponents(state), {uid: getComponentById(state, uid).parent});
}

/**
 * Component reducer helper function
 * Insert one or more components at once
 *
 * @param state {ComponentCollection} An array of component objects
 * @param components {ComponentCollection} (from action - see INSERT_COMPONENT action creator)
 * @returns {ComponentCollection} An array of component objects
 */
export function insertComponents(
    state: ComponentCollection,
    {components}: { components: ComponentCollection }
): ComponentCollection {
    let uniqueId = Date.now();
    let stateFragment = [];
    const add = (uids, parent = 0) => {
        uids.forEach(
            (uid) => {
                const component = getComponentById({components}, uid);
                if (component) {
                    uniqueId += 1;
                    const action = Object.assign({}, component, {
                        parent: parent || component.parent || 0,
                        uid: uniqueId
                    });
                    if (parent === 0) {
                        action.index = getNextIndex(state, component.parent);
                    }
                    stateFragment = addComponent(stateFragment, generateAddComponentAction(action));
                    const children = getChildComponents({components}, {uid});
                    if (children.length) {
                        add(map(children, 'uid'), uniqueId);
                    }
                }
            }
        );
    };
    add(findTopLevelComponentIds(components));
    return state.concat(stateFragment);
}

/**
 * Component reducer helper function
 * Moves a component from one parent to another
 *
 * @param state {ComponentCollection} An array of component objects
 * @param uid {int} (from action - see MOVE_COMPONENT action creator)
 * @param parent {int} (from action - see MOVE_COMPONENT action creator)
 * @returns {ComponentCollection} An array of component objects
 */
export function moveComponent(
    state: ComponentCollection,
    {uid, parent}: { uid: number, parent: number }
): ComponentCollection {
    const index = indexOf(state, find(state, {uid}));
    return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {parent}),
        ...state.slice(index + 1)
    ];
}

/**
 * Component reducer helper function
 * Reorders the components within a parent
 *
 * @param state {ComponentCollection} An array of component objects
 * @param orderedIds {int[]} (from action - see REORDER_COMPONENTS action creator)
 * @returns {ComponentCollection} An array of component objects
 */
export function reorderComponents(
    state: ComponentCollection,
    {orderedIds}: { orderedIds: Array<number> }
): ComponentCollection {
    orderedIds.forEach(
        (uid, newIndex) => {
            const index = indexOf(state, find(state, {uid}));
            // eslint-disable-next-line no-param-reassign
            state = [
                ...state.slice(0, index),
                Object.assign({}, state[index], {index: newIndex}),
                ...state.slice(index + 1)
            ];
        }
    );
    return state;
}

/**
 * Component reducer helper function
 * Updates a component's top-level properties
 *
 * @param state {ComponentCollection} An array of component objects
 * @param componentType {string}
 * @param type {string}
 * @param action {Object} Dispatched action for the UPDATE_COMPONENT action (see action creators)
 * @returns {ComponentCollection} An array of component objects
 */
export function updateComponent(
    state: ComponentCollection,
    {componentType, type, ...action}: { componentType: string, type: string }
): ComponentCollection {
    const component = find(state, {uid: action.uid});
    const index = indexOf(state, component);
    return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action, {type: componentType || component.type}),
        ...state.slice(index + 1)
    ];
}

/**
 * Component reducer helper function
 * Updates a component's data property, which is an object
 *
 * @param state {ComponentCollection} An array of component objects
 * @param data {Object} (from action - see UPDATE_COMPONENT_DATA action creator)
 * @param uid {int} (from action - see UPDATE_COMPONENT_DATA action creator)
 * @returns {ComponentCollection} An array of component objects
 */
export function updateComponentData(
    state: ComponentCollection,
    {data, uid}: { data: Object, uid: number }
): ComponentCollection {
    const index = indexOf(state, find(state, {uid}));
    return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {data: Object.assign({}, state[index].data || {}, data)}),
        ...state.slice(index + 1)
    ];
}
