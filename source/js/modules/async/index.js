// @flow

// Fork of https://github.com/capaj/react-promise to support passing props

import React from 'react';

class Async extends React.Component {

    state = {
        started: false
    };

    componentWillReceiveProps (nP) {
        if (nP.promise !== this.props.promise) {
            this.state = {}
            this.forceUpdate();
            this.handlePromise(nP.promise);
        }
    }

    handlePromise  = (prom)  => {
        this.setState({
            started: true
        })
        prom.then((res) => {
            this.setState({
                resolved: res,
                finished: true
            })
        }, (err) => {
            this.setState({
                rejected: err,
                finished: true
            })
        })
    };

    componentWillMount () {
        if (this.props.promise) {
            this.handlePromise(this.props.promise);
        }
    }

    render () {
        const {
            handlePromise,
            props: {
                before,
                catch: catchError,
                pendingRender,
                then,
                ...props
            },
            state: {
                finished,
                rejected,
                resolved,
                started
            }
        } = this;

        if (started) {
            if (!finished) {
                if (pendingRender) {
                    return pendingRender;  // custom component to indicate load in progress
                }
                return null;
            }
            if (then && resolved !== undefined) {
                return then(resolved, props || {});
            }
            if (catchError && rejected !== undefined) {
                return catchError(rejected);
            }
        } else {
            return before(handlePromise);
        }
    }

}

// Async.propTypes = {
//     before: PropTypes.func, // renders it's return value before promise is handled
//     then: PropTypes.func, // renders it's return value when promise is resolved
//     catch: PropTypes.func, // renders it's return value when promise is rejected
//     pendingRender: PropTypes.node, // renders it's value when promise is pending
//     promise: PropTypes.object // promise itself
// }

export default Async;
