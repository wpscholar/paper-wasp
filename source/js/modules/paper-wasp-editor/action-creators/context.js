// @flow
/* eslint-disable sorting/sort-object-props */

export const SET_EDIT_CONTEXT = 'SET_EDIT_CONTEXT';
export const SET_VIEW_CONTEXT = 'SET_VIEW_CONTEXT';

/**
 * Action creator
 * Sets the context to edit mode.
 *
 * @returns {{type: string}}
 */
export function setEditContext() {
    return {type: SET_EDIT_CONTEXT};
}

/**
 * Action creator
 * Sets the context to view mode.
 *
 * @returns {{type: string}}
 */
export function setViewContext() {
    return {type: SET_VIEW_CONTEXT};
}
