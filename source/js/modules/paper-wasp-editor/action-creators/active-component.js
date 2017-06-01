// @flow
/* eslint-disable sorting/sort-object-props */

export const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
export const CLEAR_ACTIVE_COMPONENT = 'CLEAR_ACTIVE_COMPONENT';

/**
 * Action creator
 * Sets the active component ID
 *
 * @param uid {int}
 * @returns {{type: string, uid: number}}
 */
export function setActiveComponent(uid: number) {
    return {type: SET_ACTIVE_COMPONENT, uid};
}

/**
 * Action creator
 * Clears the active component ID
 *
 * @param uid {int}
 * @returns {{type: string, uid: number}}
 */
export function clearActiveComponent(uid: number) {
    return {type: CLEAR_ACTIVE_COMPONENT, uid};
}
