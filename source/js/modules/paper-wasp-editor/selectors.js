// @flow
import type {Component, ComponentCollection} from 'paper-wasp/types';
import {createSelector} from 'reselect';
import find from 'lodash.find';
import {getComponents, getContainer, getCurrentComponent} from 'paper-wasp/selectors';

import type {Container, State} from './types';

/**
 * Get the active component ID
 *
 * @param state {State}
 * @returns {int}
 */
export const getActiveComponentId = (state: State) => state.activeComponent;

/**
 * Get the active component object
 *
 * @param components {ComponentCollection}
 * @param activeComponentId {int}
 * @returns {Component}
 */
export const getActiveComponent = createSelector(
    [getComponents, getActiveComponentId],
    (
        components: ComponentCollection,
        activeComponentId: number
    ): Component => find(components, {uid: activeComponentId})
);

/**
 * Get the active component's label
 *
 * @param container {Object}
 * @param activeComponent {Component}
 * @returns {string}
 */
export const getActiveComponentLabel = createSelector(
    [getContainer, getActiveComponent],
    ({componentRegistry}: Container, {type}: Component) => componentRegistry.getProperty(type, 'label')
);

/**
 * Get component options for the component selector
 *
 * @param container {Object}
 * @returns {Array}
 */
export const getComponentOptions = createSelector(
    [getContainer],
    ({componentRegistry}: Container) => {
        return componentRegistry.filter('canAdd').map(({label, thumbnailUrl, type}) => ({label, thumbnailUrl, type}));
    }
);

/**
 * Get the component type object
 *
 * @param container {Container}
 * @param type {string}
 * @returns {string}
 */
export const getComponentTypeObject = (
    {container}: State,
    {type}: Component
) => container.componentRegistry.get(type);

/**
 * Checks if a user can delete a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanAdd = createSelector(
    [getComponentTypeObject],
    ({canAdd}) => canAdd
);

/**
 * Checks if a user can delete a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanDelete = createSelector(
    [getComponentTypeObject],
    ({canDelete}) => canDelete
);

/**
 * Checks if a user can edit a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanEdit = createSelector(
    [getComponentTypeObject],
    ({canEdit}) => canEdit
);

/**
 * Get the render context
 *
 * @param context {string}
 * @returns {string}
 */
export const getContext = ({context}: State) => context;


/**
 * Get the active component's label
 *
 * @param container {Object}
 * @param activeComponent {Component}
 * @returns {string}
 */
export const getCurrentComponentLabel = createSelector(
    [getContainer, getCurrentComponent],
    ({componentRegistry}: Container, {type}: Component) => componentRegistry.getProperty(type, 'label')
);
