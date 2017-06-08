// @flow

import type {ReactChildren} from 'react-flow-types';

type Props = {
    children: ReactChildren,
    className: string,
    id: string
}

function Row({children, className, id}: Props) {
    return (
        <div className={['paper-wasp-row', className].join(' ').trim()} id={id}>
            {children}
        </div>
    );
}

export default Row;
