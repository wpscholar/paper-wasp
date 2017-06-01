// @flow
import {connect} from 'react-redux';

import Component from './component';

const HTML = connect(
    state => ({
        allowedAttributes: state.container.allowedAttributes || {},
        allowedTags: state.container.allowedTags || [],
    })
)(Component);

export {HTML};
