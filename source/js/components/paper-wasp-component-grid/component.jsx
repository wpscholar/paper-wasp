// @flow

import type {ReactChildren} from 'react-flow-types';

type Props = {
    children: ReactChildren,
    className: string,
    data: {
        columns: number
    },
    id: string
};

function Grid({children, className, data: {columns = 4}, id}: Props) {

    const classes = [
        'paper-wasp-grid',
        `paper-wasp-grid__cols-${columns}`,
        className
    ].join(' ').trim();

    return (
        <div className={classes} id={id}>
            {children}
        </div>
    );
}

export default Grid;
