// @flow

import type {ReactChildren} from 'react-flow-types';

type Props = {
    children: ReactChildren,
    className: string,
    id: string,
    style: Object
};

function Column({children, className, id, style}: Props) {
    return (
        <div className={['paper-wasp-column', className].join(' ').trim()} id={id} style={style}>
            {children}
        </div>
    );
}

export default Column;
