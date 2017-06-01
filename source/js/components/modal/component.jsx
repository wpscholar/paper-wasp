// @flow
/* eslint-disable react/prop-types */
import type {ReactChildren} from 'react-flow-types';
import {Component} from 'react';
import classNames from 'classnames';

class Modal extends Component {

    // eslint-disable-next-line react/sort-comp
    props: {
        children: ReactChildren,
        close: Function,
        isOpen: boolean
    };

    /**
     * Closes modal when the escape key is pressed
     *
     * @param keyCode {int}
     */
    onEsc = ({keyCode}: { keyCode: number }) => {
        const {close, isOpen} = this.props;
        if (keyCode === 27 && isOpen) {
            close();
        }
    };

    componentWillMount() {
        window.document.addEventListener('keydown', this.onEsc);
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            // Prevent background scroll when modal is open
            window.document.body.style.overflow = 'hidden';
        } else {
            // Allow normal scrolling after modal is closed
            window.document.body.style.overflow = 'visible';
        }
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.onEsc);
    }

    render() {

        const {children, close, isOpen} = this.props;

        if (!isOpen) {
            return null;
        }

        const classes = classNames({
            'paper-wasp-modal': true,
            'paper-wasp-modal--open': isOpen
        });

        return (
            <div className={classes} onClick={close}>
                <div className="paper-wasp-modal__content" onClick={e => e.stopPropagation()}>
                    <button className="paper-wasp-modal__close" onClick={close} />
                    <div className="paper-wasp-modal__scroll">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

}

export default Modal;
