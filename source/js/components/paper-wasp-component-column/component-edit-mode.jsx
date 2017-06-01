// @flow
import type {ReactChildren} from 'react-flow-types';

import {Children} from 'react';

type Props = {
    children: ReactChildren,
    className: string,
    id: string,
    uid: number,
    onAdd: Function,
    onDragOver: Function,
    onDragStart: Function,
    onDrop: Function,
    onMenuClick: Function,
    style: Object
};

function Column(
    {children, className, id, uid, onAdd, onDragOver, onDragStart, onDrop, onMenuClick, style}: Props
) {

    const empty: Boolean = !Children.count(children);

    const classes = [
        'paper-wasp-column',
        (empty ? 'paper-wasp-column--empty' : ''),
        className
    ];

    return (
        <div
            className={classes.join(' ').trim()}
            data-pw-component-type="column"
            data-pw-uid={uid}
            draggable
            id={id}
            onDragStart={onDragStart}
            style={style}>

            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                className="paper-wasp-column__content"
                data-pw-drop-zone="component"
                data-pw-uid={uid}
                onClick={empty ? onAdd : null}
                onDragOver={onDragOver}
                onDrop={onDrop}>
                {children}
            </div>

            <button
                className="paper-wasp-column__action-add"
                onClick={onAdd}
                title="Click to add a new component"
                type="button">&#x002B;
            </button>

            <button
                className="paper-wasp-column__action-menu"
                data-pw-drag-handle="column"
                onClick={onMenuClick}
                title="Click to edit column, drag to move"
                type="button">&#x2630;
            </button>

        </div>
    );
}

export default Column;
