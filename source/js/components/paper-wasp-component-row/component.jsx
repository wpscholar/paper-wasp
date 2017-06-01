// @flow

import type {ReactChildren} from 'react-flow-types';

type Props = {
    children: ReactChildren,
    className: string,
    data: Object,
    dispatch: Function,
    id: string,
    uid: number,
    index: number,
    parent: number,
    type: string
}

function Row({children, className, data, dispatch, uid, index, parent, type, ...props}: Props) {
    return (
        <div {...props} className={['paper-wasp-row', className].join(' ').trim()}>
            {children}
        </div>
    );
}

export default Row;
