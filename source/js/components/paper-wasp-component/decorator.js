// @flow

import {connect} from 'react-redux';
import {getChildren} from 'paper-wasp/selectors';

const ComponentDecorator = connect(
    (state, props) => ({children: getChildren(state, props)})
);

export {ComponentDecorator};
