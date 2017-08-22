// @flow
import {Component} from 'react';

class BeforeUnload extends Component {

    componentDidMount() {
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    }

    handleBeforeUnload = e => {
        const {onBeforeUnload = e => ''} = this.props;
        const value = onBeforeUnload(e);
        e.returnValue = value;
        return value;
    };

    render() {
        const {children = null} = this.props;
        return children;
    }

}

export default BeforeUnload;
