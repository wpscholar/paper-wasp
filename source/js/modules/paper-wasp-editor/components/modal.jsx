// @flow
import {connect} from 'react-redux';
import Modal from 'modal';
import {closeModal} from 'modal/action-creators';

const PaperWaspModal = connect(
    state => ({
        children: state.modal.content,
        isOpen: state.modal.isOpen,
    }),
    dispatch => ({
        close: () => dispatch(closeModal())
    })
)(Modal);

export default PaperWaspModal;
