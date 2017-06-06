// @flow
import filter from 'lodash.filter';
import {connect} from 'react-redux';
import {addComponent} from 'paper-wasp/action-creators';
import {getLastAddedComponentId} from 'paper-wasp/selectors';
import {getActiveComponentId} from 'paper-wasp-editor/selectors';
import {editComponent} from 'paper-wasp-editor/functions';

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
            dispatch(addComponent({parent, type}));
            editComponent(dispatch, getLastAddedComponentId(store.getState()));
        }
    })
)(ComponentSelector);

export {PaperWaspComponentSelector};
