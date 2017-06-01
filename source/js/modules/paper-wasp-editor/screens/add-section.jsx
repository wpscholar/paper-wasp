// @flow
/* eslint-disable sorting/sort-object-props */
import {connect} from 'react-redux';
import {insertComponents} from 'paper-wasp/action-creators';
import {getPageId} from 'paper-wasp/selectors';

import {closeModal} from '../action-creators';

type Props = {
    addOne: Function,
    addTwo: Function,
    addThree: Function,
    addFour: Function,
    addFive: Function,
    addSix: Function
};

function AddSectionScreen({addOne, addTwo, addThree, addFour, addFive, addSix}: Props) {
    return (
        <div className="paper-wasp-editor__screen_add_section">

            <div className="paper-wasp-modal__title">Add Section</div>

            <div className="paper-wasp-editor__section-list">

                <button className="paper-wasp-editor__section" onClick={addOne}>
                    <span className="paper-wasp-editor__section-row">
                        <span className="paper-wasp-editor__section-column" />
                    </span>
                    <span className="paper-wasp-editor__section-title">1 Column</span>
                </button>

                <button className="paper-wasp-editor__section" onClick={addTwo}>
                    <span className="paper-wasp-editor__section-row">
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                    </span>
                    <span className="paper-wasp-editor__section-title">2 Columns</span>
                </button>

                <button className="paper-wasp-editor__section" onClick={addThree}>
                    <span className="paper-wasp-editor__section-row">
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                    </span>
                    <span className="paper-wasp-editor__section-title">3 Columns</span>
                </button>

                <button className="paper-wasp-editor__section" onClick={addFour}>
                    <span className="paper-wasp-editor__section-row">
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                    </span>
                    <span className="paper-wasp-editor__section-title">4 Columns</span>
                </button>

                <button className="paper-wasp-editor__section" onClick={addFive}>
                    <span className="paper-wasp-editor__section-row">
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                    </span>
                    <span className="paper-wasp-editor__section-title">5 Columns</span>
                </button>

                <button className="paper-wasp-editor__section" onClick={addSix}>
                    <span className="paper-wasp-editor__section-row">
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                        <span className="paper-wasp-editor__section-column" />
                    </span>
                    <span className="paper-wasp-editor__section-title">6 Columns</span>
                </button>

            </div>

        </div>
    );
}

export default connect(
    null,
    (dispatch, {uid}) => ({
        addOne: () => {
            dispatch(insertComponents([
                {uid: 1, parent: uid, type: 'row'},
                {uid: 2, parent: 1, type: 'column'}
            ]));
            dispatch(closeModal());
        },
        addTwo: () => {
            dispatch(insertComponents([
                {uid: 1, parent: uid, type: 'row'},
                {uid: 2, parent: 1, type: 'column'},
                {uid: 3, parent: 1, type: 'column'}
            ]));
            dispatch(closeModal());
        },
        addThree: () => {
            dispatch(insertComponents([
                {uid: 1, parent: uid, type: 'row'},
                {uid: 2, parent: 1, type: 'column'},
                {uid: 3, parent: 1, type: 'column'},
                {uid: 4, parent: 1, type: 'column'}
            ]));
            dispatch(closeModal());
        },
        addFour: () => {
            dispatch(insertComponents([
                {uid: 1, parent: uid, type: 'row'},
                {uid: 2, parent: 1, type: 'column'},
                {uid: 3, parent: 1, type: 'column'},
                {uid: 4, parent: 1, type: 'column'},
                {uid: 5, parent: 1, type: 'column'}
            ]));
            dispatch(closeModal());
        },
        addFive: () => {
            dispatch(insertComponents([
                {uid: 1, parent: uid, type: 'row'},
                {uid: 2, parent: 1, type: 'column'},
                {uid: 3, parent: 1, type: 'column'},
                {uid: 4, parent: 1, type: 'column'},
                {uid: 5, parent: 1, type: 'column'},
                {uid: 6, parent: 1, type: 'column'}
            ]));
            dispatch(closeModal());
        },
        addSix: () => {
            dispatch(insertComponents([
                {uid: 1, parent: uid, type: 'row'},
                {uid: 2, parent: 1, type: 'column'},
                {uid: 3, parent: 1, type: 'column'},
                {uid: 4, parent: 1, type: 'column'},
                {uid: 5, parent: 1, type: 'column'},
                {uid: 6, parent: 1, type: 'column'},
                {uid: 7, parent: 1, type: 'column'}
            ]));
            dispatch(closeModal());
        },
    })
)(AddSectionScreen);
