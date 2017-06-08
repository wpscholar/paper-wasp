// @flow

class Registry {

    registry = {};

    constructor() {
        this.registry = {};
    }

    /**
     * Check if an item is in the registry.
     *
     * @param {string} name
     * @returns {boolean}
     */
    has(name: string) {
        return typeof this.registry[name] !== 'undefined';
    }

    /**
     * Get an item from the registry.
     *
     * @param {string} name
     * @returns {*}
     */
    get(name: string) {
        return this.registry[name];
    }

    /**
     * Add an item in the registry (or overwrite if an item with the same name already exists).
     *
     * @param {string} name
     * @param {*} value
     */
    set(name: string, value: any) {
        this.registry[name] = value;
    }

    /**
     * Remove an item from the registry.
     *
     * @param name
     */
    remove(name: string) {
        if (this.has(name)) {
            delete this.registry[name];
        }
    }

}

export default Registry;
