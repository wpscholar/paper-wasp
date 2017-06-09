// @flow
import filter from 'lodash.filter';
import {connect} from 'react-redux';
import {addComponent} from 'paper-wasp/action-creators';
import {getActiveComponentId, getCanEditComponentType} from 'paper-wasp-editor/selectors';
import {editComponent} from 'paper-wasp-editor/functions';
import {closeModal} from 'paper-wasp-editor/action-creators';

import ComponentSelector from './component';

const PaperWaspComponentSelector = connect(
    (state, {group}) => ({
        componentTypes: (() => {
            const componentRegistry = state.container.componentRegistry;
            const componentMap = ({label, thumbnailUrl, type}) => ({label, thumbnailUrl, type});
            return filter(componentRegistry.filter('canAdd'), {group}).map(componentMap);
        })(),
        parent: getActiveComponentId(state)
    }),
    dispatch => ({
        addComponent: (parent, type, store) => {
            // Explicitly set the uid, so we know what it is
            const uid = Date.now();
            // Add the component
            dispatch(addComponent({parent, type, uid}));
            // Determine if the component we are adding is editable
            if (getCanEditComponentType(store.getState(), {type})) {
                // If so, load the editor
                editComponent(dispatch, uid);
            } else {
                // If not, just close the modal
                dispatch(closeModal());
            }
        }
    })
)(ComponentSelector);

export {PaperWaspComponentSelector};
