// @flow
import type {ReactChildren} from 'react-flow-types';

export function openModal() {
    return {type: 'MODAL_OPEN'};
}

export function closeModal() {
    return {type: 'MODAL_CLOSE'};
}

export function setModalContent(content: ReactChildren) {
    return {content, type: 'MODAL_SET_CONTENT'};
}
