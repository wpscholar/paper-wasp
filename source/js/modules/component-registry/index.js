// @flow
import type {ReactChildren} from 'react-flow-types';
import Registry from 'registry';
import {createFactory} from 'react';
import filter from 'lodash.filter';
import find from 'lodash.find';

class ComponentRegistry extends Registry {

    /**
     * Helper function to easily find all results from the registry that matche the predicate.
     *
     * @param {Function|Object|Array|string} predicate
     * @returns {*}
     */
    filter(predicate: Function | Object | Array<*> | string) {
        return filter(this.registry, predicate);
    }

    /**
     * Helper function to easily find the first result from the registry that matches the predicate.
     *
     * @param {Function|Object|Array|string} predicate
     * @returns {*}
     */
    find(predicate: Function | Object | Array<*> | string) {
        return find(this.registry, predicate);
    }


    /**
     * Helper function to check if a property exists for a specific component type
     *
     * @param {string} name
     * @param {string} property
     * @returns {boolean}
     */
    hasProperty(name: string, property: string) {
        let propertyExists = false;
        if (this.has(name)) {
            const object = this.get(name);
            if (Object.prototype.hasOwnProperty.call(object, property)) {
                propertyExists = true;
            }
        }
        return propertyExists;
    }

    /**
     * Helper function to easily fetch a property value for a specific component type
     *
     * @param {string} name
     * @param {string} property
     * @param {*} fallbackValue
     * @returns {*}
     */
    getProperty(name: string, property: string, fallbackValue: any = null) {
        let value = fallbackValue;
        if (this.has(name)) {
            const object = this.get(name);
            if (Object.prototype.hasOwnProperty.call(object, property)) {
                value = object[property];
            }
        }
        return value;
    }

    /**
     * Helper function to easily set a property value for a specific component type
     *
     * @param {string} name
     * @param {string} property
     * @param {*} value
     */
    setProperty(name: string, property: string, value: any) {
        if (this.has(name)) {
            const object = this.get(name);
            if (Object.prototype.hasOwnProperty.call(object, property)) {
                object[property] = value;
            }
        }
    }

    /**
     * Render a component from the registry by type
     *
     * @param {string} type
     * @param {Object} props
     * @param {Object, Array, string, number, void} children
     * @returns {Object|null}
     */
    renderComponent(type: string, props: Object, children?: ReactChildren) {
        return this.has(type) ? createFactory(this.getProperty(type, 'class'))(props, children) : null;
    }

    /**
     * Render a component editor from the registry by type
     *
     * @param {string} type
     * @param {Object} props
     * @param {Object, Array, string, number, void} children
     * @returns {Object|null}
     */
    renderComponentEditor(type: string, props: Object, children?: ReactChildren) {
        return this.has(type) ? createFactory(this.getProperty(type, 'classEditor'))(props, children) : null;
    }

}

export default new ComponentRegistry();
