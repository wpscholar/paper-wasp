import {INSERT_COMPONENTS, addComponent} from 'paper-wasp/action-creators';
import {prepareInsert} from 'paper-wasp/functions';

export default function () {

    return store => next => (action) => {

        const dispatched = next(action);

        if (action.type === INSERT_COMPONENTS) {
            const {components: state} = store.getState();
            const {components} = action;
            const toInsert = prepareInsert(state, {components});
            toInsert.forEach(component => store.dispatch(addComponent(component)));
        }

        return dispatched;

    };

}
