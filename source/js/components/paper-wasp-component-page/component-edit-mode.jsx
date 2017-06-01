// @flow

import type {ReactChildren} from 'react-flow-types';

type Props = {
    children: ReactChildren,
    uid: number,
    onDragOver: Function,
    onDrop: Function
};

function Page({children, uid, onDragOver, onDrop}: Props) {
    return (
        <div
            className="paper-wasp-page"
            data-pw-drop-zone="row"
            data-pw-uid={uid}
            onDragOver={onDragOver}
            onDrop={onDrop}>
            {children}
        </div>
    );
}

export default Page;
