// @flow
import 'whatwg-fetch';
import ReactDomServer from 'react-dom/server';
import {Provider, connect} from 'react-redux';
import {PaperWasp} from 'paper-wasp';
import {setEditContext, setViewContext} from 'paper-wasp/action-creators';

import {
    actionBarHideModal,
    actionBarSaveStart,
    actionBarSaveSuccess,
    actionBarSaveFailure
} from '../../action-creators';
import ActionBar from './component';

const PaperWaspActionBar = connect(
    state => ({
        isSaving: state.actionBar.isSaving,
        isSuccess: state.actionBar.isSuccess,
        shouldSave: state.actionBar.shouldSave,
        showModal: state.actionBar.showModal
    }),
    dispatch => ({
        onSave: (store) => {

            // Switch to view context for rendering to string
            dispatch(setViewContext());

            const state = store.getState();
            const {components, container: {postId, restBase, restNonce}} = state;

            const content = ReactDomServer.renderToString(
                <Provider store={store}>
                    <PaperWasp />
                </Provider>
            );

            // Return to edit context for normal edit mode rendering
            dispatch(setEditContext());

            dispatch(actionBarSaveStart());

            fetch(`${restBase}paper-wasp/v1/posts/${postId}`, {
                body: JSON.stringify({
                    content,
                    paper_wasp_components: components,
                }),
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': restNonce,
                },
                method: 'POST',
            }).then((response) => {
                if (response.ok) {
                    dispatch(actionBarSaveSuccess());

                    setTimeout(() => { dispatch(actionBarHideModal()); }, 2000);
                } else {
                    dispatch(actionBarSaveFailure());
                }
            });
        }
    })
)(ActionBar);

export default PaperWaspActionBar;
