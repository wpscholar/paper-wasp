// @flow
import {connect} from 'react-redux';
import {getPage} from 'paper-wasp/selectors';
import {getContext} from 'paper-wasp-editor/selectors';
import {Page, PageEditMode} from 'paper-wasp-component-page';

import {openModal, setModalContent} from './action-creators';
import {onDrag, onDragEnd} from './functions';

import AddSection from './screens/add-section';
import AddTemplate from './screens/add-template';

type Props = {
    addSection: Function,
    addTemplate: Function,
    context: string,
    dispatch: Function,
    drag: Function,
    dragEnd: Function,
    uid: number
};

function PaperWaspEditor(
    {addSection, addTemplate, context, dispatch, drag, dragEnd, ...props}: Props
) {
    return (
        <div className="paper-wasp-editor" onDrag={drag} onDragEnd={dragEnd}>
            {context === 'view' ? <Page {...props} /> : <PageEditMode {...props} />}
            <div className="paper-wasp-editor__add">
                <button className="paper-wasp-button-primary" onClick={() => addSection(props.uid)}>Add Section</button>
                {/*<button className="paper-wasp-button-secondary" onClick={() => addTemplate(props.uid)}>Add Template</button>*/}
            </div>
        </div>
    );
}

const PaperWaspEditorConnect = connect(
    (state) => {
        return {
            ...getPage(state),
            context: getContext(state)
        };
    },
    dispatch => ({
        addSection: (uid) => {
            dispatch(setModalContent(<AddSection uid={uid} />));
            dispatch(openModal());
        },
        addTemplate: (uid) => {
            dispatch(setModalContent(<AddTemplate uid={uid} />));
            dispatch(openModal());
        },
        drag: onDrag,
        dragEnd: onDragEnd
    })
)(PaperWaspEditor);


export default PaperWaspEditorConnect;
