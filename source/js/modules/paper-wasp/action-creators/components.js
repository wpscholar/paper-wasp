// @flow
import type {Component, ComponentCollection} from '../types';

export const ADD_COMPONENT = 'ADD_COMPONENT';
export const DELETE_COMPONENT = 'DELETE_COMPONENT';
export const INSERT_COMPONENTS = 'INSERT_COMPONENTS';
export const MOVE_COMPONENT = 'MOVE_COMPONENT';
export const REORDER_COMPONENTS = 'REORDER_COMPONENTS';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const UPDATE_COMPONENT_DATA = 'UPDATE_COMPONENT_DATA';

/**
 * Action creator function
 * Add a new component
 *
 * @param component {Component}
 * @returns {Object}
 */
export function addComponent(component: Component) {
    return Object.assign({}, component, {componentType: component.type, type: ADD_COMPONENT});
}

/**
 * Action creator function
 * Delete a component
 *
 * @param uid {int}
 * @returns {{uid: number, type: string}}
 */
export function deleteComponent(uid: number) {
    return {type: DELETE_COMPONENT, uid};
}

/**
 * Action creator function
 * Insert multiple components
 *
 * @param components {ComponentCollection}
 * @returns {{components: ComponentCollection, type: string}}
 */
export function insertComponents(components: ComponentCollection) {
    return {components, type: INSERT_COMPONENTS};
}

/**
 * Action creator function
 * Move a component from one parent to another.
 *
 * @param uid {int}
 * @param parent {int}
 * @returns {{uid: number, parent: number, type: string}}
 */
export function moveComponent(uid: number, parent: number) {
    return {parent, type: MOVE_COMPONENT, uid};
}

/**
 * Action creator function
 * Reorder components
 *
 * @param orderedIds {int[]}
 * @returns {{orderedIds: Array.<number>, type: string}}
 */
export function reorderComponents(orderedIds: Array<number>) {
    return {orderedIds, type: REORDER_COMPONENTS};
}

/**
 * Action creator function
 * Update a component's top-level properties
 *
 * @param uid {int}
 * @param component {Component}
 * @returns {Object}
 */
export function updateComponent(uid: number, component: Component) {
    const action = Object.assign({}, component, {type: UPDATE_COMPONENT, uid});
    if (component.type) {
        action.componentType = component.type;
    }
    return action;
}

/**
 * Action creator function
 * Update a component's data object
 *
 * @param uid {int}
 * @param data {Object}
 * @returns {{data: Object, uid: number, type: string}}
 */
export function updateComponentData(uid: number, data: Object) {
    return {data, type: UPDATE_COMPONENT_DATA, uid};
}
