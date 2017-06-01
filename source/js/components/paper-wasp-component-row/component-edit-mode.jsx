// @flow
import type {ReactChildren} from 'react-flow-types';
import {Children, Component} from 'react';

import Row from './component';

class RowEditMode extends Component {

    // eslint-disable-next-line react/sort-comp
    props: {
        children: ReactChildren,
        className: string,
        id: string,
        uid: number,
        onDelete: Function,
        onDragOver: Function,
        onDragStart: Function,
        onDrop: Function,
        onMenuClick: Function,
    };

    componentDidUpdate(prevProps: Object) {
        const {children} = this.props;
        if (prevProps.children !== children && !Children.count(children)) {
            this.props.onDelete(this.props.uid);
        }
    }

    render() {

        const {
            children,
            className,
            id,
            uid,
            onDragOver,
            onDragStart,
            onDrop,
            onMenuClick,
        } = this.props;

        return (
            <div
                className="paper-wasp-row-wrap"
                data-pw-component-type="row"
                data-pw-uid={uid}
                draggable
                onDragStart={onDragStart}>
                <Row
                    children={children} // eslint-disable-line react/no-children-prop
                    className={className}
                    data-pw-drop-zone="column"
                    data-pw-uid={uid}
                    id={id}
                    onDragOver={onDragOver}
                    onDrop={onDrop} />
                <button
                    className="paper-wasp-row__action-menu"
                    data-pw-drag-handle="row"
                    onClick={onMenuClick}
                    title="Click to edit row, drag to move"
                    type="button">
                    &#x2630;
                </button>
            </div>
        );
    }

}

export default RowEditMode;
