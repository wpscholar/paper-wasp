// @flow

import type {Component} from 'paper-wasp/types';
import type {Container} from 'paper-wasp-editor/types';

import {createSelector} from 'reselect';
import {getContainer} from 'paper-wasp/selectors';
import {getActiveComponent} from 'paper-wasp-editor/selectors';

/**
 * Get component editor children
 *
 * @param componentRegistry {Object}
 * @param data {Component}
 * @returns {Component|null}
 */
export const getComponentEditorChildren = createSelector(
    [getContainer, getActiveComponent],
    ({componentRegistry}: Container, data: Component) => {
        const {type} = data;
        if (componentRegistry.has(type)) {
            const props = Object.assign({}, data, {key: data.uid});
            return componentRegistry.renderComponentEditor(type, props);
        }
        return null;
    }
);
