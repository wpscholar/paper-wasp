import {ADD_COMPONENT, insertComponents} from 'paper-wasp/action-creators';
import {getLastGeneratedId} from 'paper-wasp/functions';

export default function (componentRegistry) {

    return store => next => (action) => {

        const dispatched = next(action);

        if (action.type === ADD_COMPONENT) {

            const lastAddedId = action.uid || getLastGeneratedId();

            const defaultChildren = componentRegistry.getProperty(action.componentType, 'defaultChildren', action.defaultChildren || []);

            if (defaultChildren && defaultChildren.length) {

                const children = [];

                defaultChildren.forEach((defaultChild) => {

                    const child = Object.assign({parent: 0}, defaultChild);

                    if (child.parent === 0) {
                        child.parent = lastAddedId;
                    }

                    children.push(child);

                });

                store.dispatch(insertComponents(children));
            }

        }

        return dispatched;

    };

}
