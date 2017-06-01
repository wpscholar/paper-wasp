import React from 'react';
import {mount, shallow} from 'enzyme';

import {Heading} from './component';

describe('<Heading />', () => {

    it('should shallow render a Heading component', () => {
        shallow(<Heading data={{}} />);
    });

    it('should render a default class', () => {
        const wrapper = shallow(<Heading data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-heading')).toBe(true);
    });

    it('should render a custom class', () => {
        const wrapper = shallow(<Heading className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a left alignment class', () => {
        const wrapper = shallow(<Heading data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-heading--left')).toBe(true);
    });

    it('should render a center alignment class', () => {
        const wrapper = shallow(<Heading data={{align: 'center'}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-heading--center')).toBe(true);
    });

    it('should render a right alignment class', () => {
        const wrapper = shallow(<Heading data={{align: 'right'}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-heading--right')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Heading data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

    it('should render an H1 element', () => {
        const wrapper = shallow(<Heading data={{}} />);
        expect(wrapper.type()).toBe('h1');
    });

    it('should render an H2 element', () => {
        const wrapper = shallow(<Heading data={{tag: 'h2'}} />);
        expect(wrapper.type()).toBe('h2');
    });

    it('should render an H3 element', () => {
        const wrapper = shallow(<Heading data={{tag: 'h3'}} />);
        expect(wrapper.type()).toBe('h3');
    });

    it('should render an H4 element', () => {
        const wrapper = shallow(<Heading data={{tag: 'h4'}} />);
        expect(wrapper.type()).toBe('h4');
    });

    it('should render an H5 element', () => {
        const wrapper = shallow(<Heading data={{tag: 'h5'}} />);
        expect(wrapper.type()).toBe('h5');
    });

    it('should render an H6 element', () => {
        const wrapper = shallow(<Heading data={{tag: 'h6'}} />);
        expect(wrapper.type()).toBe('h6');
    });

    it('should not render a type attribute', () => {
        const wrapper = shallow(<Heading data={{}} type="heading" />);
        expect(wrapper.node.props.type).not.toBe('heading');
    });

    it('should not log any errors', () => {
        const errors = [];
        const errorHandler = console.error;
        console.error = (...args) => {
            errors.push({args, method: 'error'});
            return errorHandler.apply(console, args);
        };
        mount(<Heading data={{}} index={0} parent={0} uid={12345} />);
        expect(errors).toHaveLength(0);
    });

});
