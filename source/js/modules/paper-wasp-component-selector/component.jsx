// @flow

import {PropTypes} from 'prop-types';
import {Component} from 'react';
import sortBy from 'lodash.sortby';

type ComponentType = {
    label: string,
    thumbnailUrl: string,
    type: string
}

const {paperWaspPath} = window.paperWasp;

class ComponentSelector extends Component {

    // eslint-disable-next-line react/sort-comp
    props: {
        addComponent: Function,
        componentTypes: Array<Object>,
        parent: number
    };

    state: {
        componentIndex: number
    };

    context: {
        store: Object
    };

    componentTypes: Object;

    // eslint-disable-next-line react/sort-comp
    constructor(props: Object) {
        super(props);
        this.state = {componentIndex: -1};
        this.componentTypes = sortBy(props.componentTypes, 'label');
    }

    onAddComponent = () => {
        const {addComponent, parent} = this.props;
        const {componentIndex} = this.state;
        addComponent(parent, this.componentTypes[componentIndex].type, this.context.store);
    };

    onComponentTypeChange = (e: Object) => {
        this.setState({componentIndex: parseInt(e.target.value, 10)});
    };

    render() {

        const {componentTypes, onAddComponent, onComponentTypeChange} = this;
        const {componentIndex: index} = this.state;

        return (
            <div className="paper-wasp-component-selector">

                <div className="paper-wasp-modal__title">Add Component</div>

                <div className="paper-wasp-component-selector__selector">

                    <label className="paper-wasp-field">
                        <select onChange={onComponentTypeChange} value={index}>
                            <option value={-1}>Select a Component Type</option>
                            {componentTypes.map(
                                ({label, type}: ComponentType, i) => {
                                    return <option key={type} value={i}>{label}</option>;
                                })
                            }
                        </select>
                    </label>

                    <button className="paper-wasp-button-primary" onClick={onAddComponent}>Add</button>

                </div>

                <div className="paper-wasp-component-selector__preview">
                    {componentTypes[index] && componentTypes[index].thumbnailUrl ? (
                        <img
                            alt={componentTypes[index].type}
                            src={`${paperWaspPath}${componentTypes[index].thumbnailUrl}`} />
                    ) : null}
                </div>

            </div>
        );
    }

}

ComponentSelector.contextTypes = {
    store: PropTypes.object
};

export default ComponentSelector;
