// @flow

import {PropTypes} from 'prop-types';
import Modal from 'modal';
import BeforeUnload from 'before-unload';
import Spinner from '../spinner';
import Checkmark from '../checkmark';

type Props = {
    isSaving: bool,
    isSuccess: bool,
    onSave: Function,
    shouldSave: bool,
    showModal: bool
};

type Context = {
    store: Object
};

ActionBar.contextTypes = {
    store: PropTypes.object
};

function ActionBar({isSaving, isSuccess, onSave, shouldSave, showModal}: Props, {store}: Context) {

    return (
        <div className="paper-wasp-action-bar">

            <a
                className="paper-wasp-button-secondary"
                href={`${window.location.origin}${window.location.pathname}`}
                rel="noopener noreferrer" target="_blank">
                View
            </a>

            <button className="paper-wasp-button-primary" onClick={() => onSave(store)} type="button">Save</button>

            <Modal isOpen={showModal} showClose={!isSuccess && !isSaving}>
                {isSaving ? (<Spinner />) : (null)}
                {isSuccess && !isSaving ? (<Checkmark />) : (null)}
                {!isSuccess && !isSaving ? (
                    <p>
                        Sorry, it looks like something went wrong.
                        We weren&apos;t able to save your data.
                        Please try again.
                    </p>
                ) : (null)}
            </Modal>

            {shouldSave ? <BeforeUnload onBeforeUnload={e => 'Please save your changes.'} /> : null}

        </div>
    );
}

export default ActionBar;
