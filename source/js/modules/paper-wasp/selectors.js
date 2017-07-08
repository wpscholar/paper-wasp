// @flow
import {createSelector} from 'reselect';
import filter from 'lodash.filter';
import find from 'lodash.find';
import map from 'lodash.map';
import max from 'lodash.max';
import sortBy from 'lodash.sortby';
import type {Component, ComponentCollection, Context} from 'paper-wasp/types';

/**
 * Get child components for a specific component
 *
 * @param components {ComponentCollection} (from state)
 * @param uid {int} (from props)
 * @returns {ComponentCollection}
 */
export const getChildComponents = (
    {components}: { components: ComponentCollection },
    {uid}: { uid: number }
): ComponentCollection => sortBy(filter(components, {parent: uid}), 'index');

/**
 * Get all components
 *
 * @param components {ComponentCollection} (from state)
 * @returns {ComponentCollection}
 */
export const getComponents = (
    {components}: { components: ComponentCollection }
): ComponentCollection => components;

/**
 * Get dependency injection container
 *
 * @param container {Object} (from state)
 * @returns {Object}
 */
export const getContainer = ({container}: { container: Object }): Object => container;

/**
 * Get render context
 *
 * @param context {Context} (from state)
 * @returns {Context}
 */
export const getContext = ({context}: { context: Context }): Context => context || 'view';

/**
 * Get current component
 *
 * @param components {ComponentCollection} (from state)
 * @param uid {int} (from props)
 * @returns {Component}
 */
export const getCurrentComponent = (
    {components}: { components: ComponentCollection },
    {uid}: { uid: number }
): Component => find(components, {uid});

/**
 * Get page (should be the only top-level item)
 *
 * @param components {ComponentCollection} (from state)
 * @returns {Component}
 */
export const getPage = (
    {components}: { components: ComponentCollection }
): Component => find(components, {parent: '0', type: 'page'});

/**
 * Get the page ID
 *
 * @param page {Component}
 * @returns {int}
 */
export const getPageId = createSelector([getPage], (page: Component): number => page.uid);

/**
 * Get children for a specific component
 *
 * @param context {string}
 * @param container {Object}
 * @param childComponents {ComponentCollection}
 * @returns {ComponentCollection}
 */
export const getChildren = createSelector(
    [getContext, getContainer, getChildComponents],
    (context, {componentRegistry, componentRenderMap}, collection): ComponentCollection => {
        return collection
            .map(data => ({key: data.uid, ...data}))
            .map((props) => {
                const {type} = props;
                if (componentRegistry.has(type)) {
                    return componentRegistry.renderComponent(type, props);
                }
                /* eslint-disable no-console */
                if (console && console.warn) {
                    console.warn('Unable to render component type: ', type, props);
                }
                /* eslint-enable no-console */
                return null;
            })
            .filter(Boolean)
            .map(component => componentRenderMap(context, componentRegistry, component));
    }
);
