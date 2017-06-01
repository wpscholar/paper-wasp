import React from 'react';
import {mount, shallow} from 'enzyme';

import Row from './component';

describe('<Row />', () => {

    it('should shallow render an Row component', () => {
        shallow(<Row />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Row />);
        expect(wrapper.node.props.className.includes('paper-wasp-row')).toBe(true);
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<Row className="my-class" />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Row id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

    it('should not render a type attribute', () => {
        const wrapper = shallow(<Row data={{}} type="pull-quote" />);
        expect(wrapper.node.props.type).not.toBe('pull-quote');
    });

    it('should not log any errors', () => {
        const errors = [];
        const errorHandler = console.error;
        console.error = (...args) => {
            errors.push({args, method: 'error'});
            return errorHandler.apply(console, args);
        };
        mount(<Row data={{}} index={0} parent={0} uid={12345} />);
        expect(errors).toHaveLength(0);
        console.error = errorHandler;
    });

});
