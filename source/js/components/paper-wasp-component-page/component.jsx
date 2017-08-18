// @flow

import type {ReactChildren} from 'react-flow-types';

import {PropTypes} from 'simple-prop-types';

type Props = {
    children: ReactChildren,
    uid: string,
    onDragOver: Function,
    onDrop: Function
};

type Context = {
    store: {
        getState: Function
    }
}

function Page(
    {children, uid, onDragOver, onDrop}: Props,
    {store: {getState}}: Context
) {

    const {context} = getState();

    let props = {};

    if(context === 'edit') {
        props = {
            ['data-pw-drop-zone']: 'row',
            ['data-pw-uid']: uid,
            onDragOver,
            onDrop
        };
    }

    return (
        <div {...props} className="paper-wasp-page">
            {children}
        </div>
    );
}

Page.contextTypes = {
    store: PropTypes('object')
};

export default Page;
