// @flow

import type {ReactChildren} from 'react-flow-types';

import {Component} from 'react';

import AdvancedScreen from './screens/advanced';
import EditScreen from './screens/edit';
import Menu from './screens/menu';

class ComponentEditor extends Component {

    // eslint-disable-next-line react/sort-comp
    props: {
        canDelete: boolean,
        canEdit: boolean,
        children: ReactChildren,
        data: Object,
        label: string,
        onCancel: Function,
        onDelete: Function,
        onSave: Function,
        showMenu: boolean,
        uid: string
    };

    // eslint-disable-next-line react/sort-comp
    state: {
        className: string,
        data: Object,
        id: string,
        screen: 'edit' | 'advanced'
    };

    constructor(props: Object) {
        super(props);
        this.state = {
            className: props.className || '',
            data: props.data,
            id: props.id || '',
            screen: 'edit'
        };
    }

    onChange = (data: Object) => this.setState(data);

    onDataChange = (data: Object) =>
    this.setState({data: Object.assign({}, this.state.data, data)});

    onScreenChange = (screen: 'edit' | 'advanced') => this.setState({screen});

    onSave = () => {
        const {onCancel, onSave} = this.props;
        const {className, data, id} = this.state;
        onSave({className, data, id});
        onCancel(); // Closes modal
    };

    onDelete = () => {
        const {onCancel, onDelete, uid} = this.props;
        onDelete(uid);
        onCancel(); // Closes modal
    };

    render() {

        const {onChange, onDataChange, onDelete, onSave, onScreenChange, props, state} = this;
        const {canDelete, canEdit, children, label, onCancel, showMenu = true} = props;
        const {className, data, id, screen} = state;

        return (
            <div className="paper-wasp-component-editor">

                <div className="paper-wasp-modal__title">{label}</div>

                {canEdit && showMenu ? <Menu onClick={onScreenChange} screen={screen} /> : null }

                {canEdit && screen === 'advanced' ? (
                    <AdvancedScreen
                        className={className}
                        id={id}
                        onChange={onChange}
                    />
                ) : null}

                {canEdit && screen === 'edit' ? (
                    <EditScreen
                        children={children} // eslint-disable-line react/no-children-prop
                        data={data}
                        onChange={onDataChange}
                    />
                ) : null}

                {canEdit ? (
                    <div className="paper-wasp-component-editor__actions">
                        <button
                            className="paper-wasp-component-editor__action-cancel paper-wasp-button-secondary"
                            onClick={onCancel}
                            type="button">
                            Cancel
                        </button>
                        <button
                            className="paper-wasp-component-editor__action-save paper-wasp-button-primary"
                            onClick={onSave}
                            type="button">
                            Save Changes
                        </button>
                    </div>
                ) : null}

                {canDelete ? (
                    <div>
                        <button
                            className="paper-wasp-component-editor__action-delete paper-wasp-link-danger"
                            onClick={onDelete}
                            type="button">
                            &#x2718; Delete
                        </button>
                    </div>
                ) : null}

            </div>
        );
    }

}

export default ComponentEditor;
