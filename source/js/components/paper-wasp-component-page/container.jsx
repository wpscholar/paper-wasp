// @flow
import {ComponentDecorator} from 'paper-wasp-component/decorator';
import {onDragOver, onDrop} from 'paper-wasp-editor/functions';
import {PropTypes} from 'simple-prop-types';

import Component from './component';

function PageConnect(props, {store: {dispatch}}) {
    return (
        <Component
            onDragOver={onDragOver}
            onDrop={e => onDrop(e, dispatch)}
            {...props}
        />
    )
}

PageConnect.contextTypes = {
    store: PropTypes('object')
};

const Page = ComponentDecorator(PageConnect);

export {Page};
