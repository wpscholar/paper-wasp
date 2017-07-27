export const ACTION_BAR_SAVE_START = 'ACTION_BAR_SAVE_START';
export const ACTION_BAR_SHOW_MODAL = 'ACTION_BAR_SHOW_MODAL';
export const ACTION_BAR_HIDE_MODAL = 'ACTION_BAR_HIDE_MODAL';
export const ACTION_BAR_SAVE_SUCCESS = 'ACTION_BAR_SAVE_SUCCESS';
export const ACTION_BAR_SAVE_FAILURE = 'ACTION_BAR_SAVE_FAILURE';

/**
 * Action creator
 * Sets the isSaving to true.
 *
 * @returns {{type: string}}
 */
export function actionBarSaveStart() {
    return {type: ACTION_BAR_SAVE_START};
}

/**
 * Action creator
 * Sets the showModal to true.
 *
 * @returns {{type: string}}
 */
export function actionBarShowModal() {
    return {type: ACTION_BAR_SHOW_MODAL};
}

/**
 * Action creator
 * Sets the showModal to false.
 *
 * @returns {{type: string}}
 */
export function actionBarHideModal() {
    return {type: ACTION_BAR_HIDE_MODAL};
}

/**
 * Action creator
 * Sets the isSuccess to true.
 *
 * @returns {{type: string}}
 */

export function actionBarSaveSuccess() {
    return {type: ACTION_BAR_SAVE_SUCCESS};
}
/**
 * Action creator
 * Sets the isSuccess to false.
 *
 * @returns {{type: string}}
 */
export function actionBarSaveFailure() {
    return {type: ACTION_BAR_SAVE_FAILURE};
}
