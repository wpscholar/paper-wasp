/* eslint-disable no-unused-vars, no-param-reassign */

import {ADD_COMPONENT} from 'paper-wasp/action-creators';

export default function (componentRegistry) {

    return store => next => (action) => {

        if (action.type === ADD_COMPONENT) {

            const defaultData = componentRegistry.getProperty(action.componentType, 'defaultData');
            if (defaultData) {
                action.data = Object.assign({}, defaultData, action.data || {});
            }
        }

        return next(action);

    };

}
