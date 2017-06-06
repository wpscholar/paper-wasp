// @flow

import type {ReactChildren} from 'react-flow-types';

import {Grid} from './container';

type Props = {
    children: ReactChildren,
    className: string,
    data: {
        columns: number
    },
    id: string,
    onAdd: Function
};

function GridEditMode({onAdd, ...props}: Props) {
    return (
        <div className="paper-wasp-grid-edit-mode">
            <Grid {...props} />
            <button
                className="paper-wasp-button-secondary paper-wasp-grid-edit-mode__action-add"
                onClick={onAdd}
                title="Click to add a new tile"
                type="button">&#x002B;</button>
        </div>
    );
}

export default GridEditMode;

