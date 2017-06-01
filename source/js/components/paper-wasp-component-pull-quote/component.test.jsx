import React from 'react';
import {mount, shallow} from 'enzyme';

import {PullQuote} from './component';

describe('<PullQuote />', () => {

    it('should shallow render a PullQuote component', () => {
        shallow(<PullQuote data={{}} />);
    });

    it('should render a default class', () => {
        const wrapper = shallow(<PullQuote data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-pull-quote')).toBe(true);
    });

    it('should render a custom class', () => {
        const wrapper = shallow(<PullQuote className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<PullQuote data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

    it('should not render a type attribute', () => {
        const wrapper = shallow(<PullQuote data={{}} type="pull-quote" />);
        expect(wrapper.node.props.type).not.toBe('pull-quote');
    });

    it('should not log any errors', () => {
        const errors = [];
        const errorHandler = console.error;
        console.error = (...args) => {
            errors.push({args, method: 'error'});
            return errorHandler.apply(console, args);
        };
        mount(<PullQuote data={{}} index={0} parent={0} uid={12345} />);
        expect(errors).toHaveLength(0);
        console.error = errorHandler;
    });

});
