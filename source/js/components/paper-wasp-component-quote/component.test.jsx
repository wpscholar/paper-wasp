import React from 'react';
import {mount, shallow} from 'enzyme';

import {Quote} from './component';

describe('<Quote />', () => {

    it('should shallow render a Quote component', () => {
        shallow(<Quote data={{}} />);
    });

    it('should render a default class', () => {
        const wrapper = shallow(<Quote data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-quote')).toBe(true);
    });

    it('should render a custom class', () => {
        const wrapper = shallow(<Quote className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Quote data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

    it('should not render a type attribute', () => {
        const wrapper = shallow(<Quote data={{}} type="quote" />);
        expect(wrapper.node.props.type).not.toBe('quote');
    });

    it('should not log any errors', () => {
        const errors = [];
        const errorHandler = console.error;
        console.error = (...args) => {
            errors.push({args, method: 'error'});
            return errorHandler.apply(console, args);
        };
        mount(<Quote data={{}} index={0} parent={0} uid={12345} />);
        expect(errors).toHaveLength(0);
        console.error = errorHandler;
    });

});
