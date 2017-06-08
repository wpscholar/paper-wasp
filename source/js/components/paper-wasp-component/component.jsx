// @flow

import type {ReactChildren} from 'react-flow-types';

type Props = {
    canDelete: boolean,
    canDrag: boolean,
    canEdit: boolean,
    childComponents: Array<*>,
    children: ReactChildren,
    uid: number,
    data: Object,
    label: string,
    onDragStart: Function,
    onEdit: Function
};

function PaperWaspComponent(
    {
        canDelete,
        canDrag,
        canEdit,
        childComponents = [],
        children,
        data,
        uid,
        label,
        onDragStart,
        onEdit
    }: Props
) {

    const hasChildComponents = childComponents.length > 0;
    const hasData = Object.keys(data).length > 0;
    const isComponentEmpty = !hasChildComponents && !hasData;

    const classes = ['paper-wasp-component'];

    if (isComponentEmpty) {
        classes.push('paper-wasp-component--empty');
    }

    const group = 'component'; // TODO: Dynamically set component type from component registry (isComponent / isTile)

    return (
        <div
            className={classes.join(' ')}
            data-pw-component-type={group}
            data-pw-uid={uid}
            draggable={canDrag}
            onDoubleClick={canEdit ? onEdit : null}
            onDragStart={onDragStart}>
            <button
                className="paper-wasp-component__title"
                onClick={canEdit || canDelete ? onEdit : null}
                title="Click to edit, drag to move"
                type="button">
                {canDrag ? <span data-pw-drag-handle={group}>&#x2630;</span> : null} {label}
            </button>
            <div
                className="paper-wasp-component__children"
                draggable="false"
                onClick={canEdit && isComponentEmpty ? onEdit : null}>
                {isComponentEmpty ? <div>Click to Edit</div> : children}
            </div>
        </div>
    );
}

export default PaperWaspComponent;
