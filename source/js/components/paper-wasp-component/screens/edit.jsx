// @flow
import type {ReactChildren} from 'react-flow-types';
import {Children, cloneElement} from 'react';

type Props = {
    children: ReactChildren,
    data: Object,
    onChange: Function,
};

function EditScreen({children, data, onChange}: Props) {
    return (
        <div>
            {Children.map(children, child => cloneElement(child, {data, onChange}))}
        </div>
    );
}

export default EditScreen;
