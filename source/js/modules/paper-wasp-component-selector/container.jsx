// @flow

import filter from 'lodash.filter';
import sortBy from 'lodash.sortby';
import {connect} from 'react-redux';
import {addComponent} from 'paper-wasp/action-creators';
import {generateUniqueId} from 'paper-wasp/functions';
import {getActiveComponentId, getCanEditComponentType} from 'paper-wasp-editor/selectors';
import {editComponent} from 'paper-wasp-editor/functions';
import {closeModal} from 'paper-wasp-editor/action-creators';

import ComponentSelector from './component';

const PaperWaspComponentSelector = connect(
    (state, {group}) => ({
        componentTypes: (() => {
            const componentRegistry = state.container.componentRegistry;
            const componentMap = ({label, thumbnailUrl, type}) => ({label, thumbnailUrl, type});
            return sortBy(filter(componentRegistry.filter('canAdd'), {group}).map(componentMap), 'label');
        })(),
        parent: getActiveComponentId(state)
    }),
    dispatch => ({
        addComponent: (parent, type, store) => {
            // Explicitly set the uid, so we know what it is
            const uid = generateUniqueId();
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
