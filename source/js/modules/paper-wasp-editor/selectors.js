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
 * Checks if a specific component can have components appended to it.
 *
 * @param state {State}
 * @param canAppend {boolean}
 */
export const getCanAppendComponent = (state: State, {canAppend = true}: Component) => canAppend;

/**
 * Checks if a user can append to a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanAppendComponentType = createSelector(
    [getComponentTypeObject],
    ({canAppend = true}) => canAppend
);

/**
 * Checks if a user can append to a specific component.
 *
 * @param canAppendType {boolean}
 * @param canAppendComponent {boolean}
 * @returns {boolean}
 */
export const getCanAppend = createSelector(
    [getCanAppendComponentType, getCanAppendComponent],
    (canAppendType, canAppendComponent) => canAppendType && canAppendComponent
);

/**
 * Checks if a specific component can be deleted.
 *
 * @param state {State}
 * @param canDelete {boolean}
 */
export const getCanDeleteComponent = (state: State, {canDelete = true}: Component) => canDelete;

/**
 * Checks if a user can delete a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanDeleteComponentType = createSelector(
    [getComponentTypeObject],
    ({canDelete = true}) => canDelete
);

/**
 * Checks if a user can delete a specific component.
 *
 * @param canDeleteType {boolean}
 * @param canDeleteComponent {boolean}
 * @returns {boolean}
 */
export const getCanDelete = createSelector(
    [getCanDeleteComponentType, getCanDeleteComponent],
    (canDeleteType, canDeleteComponent) => canDeleteType && canDeleteComponent
);

/**
 * Checks if a specific component can be dragged.
 *
 * @param state {State}
 * @param canDrag {boolean}
 */
export const getCanDragComponent = (state: State, {canDrag = true}: Component) => canDrag;

/**
 * Checks if a user can drag a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanDragComponentType = createSelector(
    [getComponentTypeObject],
    ({canDrag = true}) => canDrag
);

/**
 * Checks if a user can drag a specific component.
 *
 * @param canDragType {boolean}
 * @param canDragComponent {boolean}
 * @returns {boolean}
 */
export const getCanDrag = createSelector(
    [getCanDragComponentType, getCanDragComponent],
    (canDragType, canDragComponent) => canDragType && canDragComponent
);

/**
 * Checks if a specific component can be dropped.
 *
 * @param state {State}
 * @param canDrop {boolean}
 */
export const getCanDropComponent = (state: State, {canDrop = true}: Component) => canDrop;

/**
 * Checks if a user can drop a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanDropComponentType = createSelector(
    [getComponentTypeObject],
    ({canDrop = true}) => canDrop
);

/**
 * Checks if a user can drop a specific component.
 *
 * @param canDropType {boolean}
 * @param canDropComponent {boolean}
 * @returns {boolean}
 */
export const getCanDrop = createSelector(
    [getCanDropComponentType, getCanDropComponent],
    (canDropType, canDropComponent) => canDropType && canDropComponent
);

/**
 * Checks if a specific component can be edited.
 *
 * @param state {State}
 * @param canEdit {Boolean}
 */
export const getCanEditComponent = (state: State, {canEdit = true}: Component) => canEdit;

/**
 * Checks if a user can edit a specific type of component.
 *
 * @param componentTypeObject {Object}
 * @returns {boolean}
 */
export const getCanEditComponentType = createSelector(
    [getComponentTypeObject],
    ({canEdit = true}) => canEdit
);

/**
 * Checks if a user can edit a specific component.
 *
 * @param canEditType {boolean}
 * @param canEditComponent {boolean}
 * @returns {boolean}
 */
export const getCanEdit = createSelector(
    [getCanEditComponentType, getCanEditComponent],
    (canEditType, canEditComponent) => canEditType && canEditComponent
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
