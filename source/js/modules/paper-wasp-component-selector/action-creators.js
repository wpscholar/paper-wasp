// @flow

export const SHOW_COMPONENT_SELECTOR = 'SHOW_COMPONENT_SELECTOR';
export const HIDE_COMPONENT_SELECTOR = 'HIDE_COMPONENT_SELECTOR';

/**
 * Action creator function
 * Show the component selector
 *
 * @returns {{type: string}}
 */
export function showComponentSelector() {
    return {type: SHOW_COMPONENT_SELECTOR};
}

/**
 * Action creator function
 * Hide the component selector
 *
 * @returns {{type: string}}
 */
export function hideComponentSelector() {
    return {type: HIDE_COMPONENT_SELECTOR};
}
