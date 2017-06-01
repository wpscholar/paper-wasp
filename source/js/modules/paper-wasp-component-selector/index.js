// @flow
import {connect} from 'react-redux';
import {addComponent} from 'paper-wasp/action-creators';
import {getLastAddedComponentId} from 'paper-wasp/selectors';
import {getActiveComponentId, getComponentOptions} from 'paper-wasp-editor/selectors';
import {editComponent} from 'paper-wasp-editor/functions';

import ComponentSelector from './component';

const PaperWaspComponentSelector = connect(
    state => ({
        componentTypes: getComponentOptions(state),
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
