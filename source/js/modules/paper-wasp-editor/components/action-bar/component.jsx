// @flow

import {PropTypes} from 'prop-types';

type Props = {
    onSave: Function,
};

type Context = {
    store: Object
};

ActionBar.contextTypes = {
    store: PropTypes.object
};

function ActionBar({onSave}: Props, {store}: Context) {
    return (
        <div className="paper-wasp-action-bar">

            <a
                className="paper-wasp-button-secondary"
                href={`${window.location.origin}${window.location.pathname}`}
                rel="noopener noreferrer" target="_blank">View</a>

            <button className="paper-wasp-button-primary" onClick={() => onSave(store)} type="button">Save</button>

        </div>
    );
}

export default ActionBar;
