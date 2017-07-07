import React from 'react';
import {mount, shallow} from 'enzyme';

import Grid from './component';

describe('<Grid />', () => {

    it('should shallow render a Grid component', () => {
        shallow(<Grid data={{}} />);
    });

    it('should render a default class', () => {
        const wrapper = shallow(<Grid data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-grid')).toBe(true);
    });

    it('should render a custom class', () => {
        const wrapper = shallow(<Grid className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Grid data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

    it('should not render a type attribute', () => {
        const wrapper = shallow(<Grid data={{}} type="grid" />);
        expect(wrapper.node.props.type).not.toBe('grid');
    });

    it('should not log any errors', () => {
        const errors = [];
        const errorHandler = console.error;
        console.error = (...args) => {
            errors.push({args, method: 'error'});
            return errorHandler.apply(console, args);
        };
        mount(<Grid data={{}} index={0} parent={0} uid={12345} />);
        expect(errors).toHaveLength(0);
    });

});
