import React from 'react';
import {shallow} from 'enzyme';

import {RichText} from './component';

describe('<RichText />', () => {

    it('should shallow render an RichText component', () => {
        shallow(<RichText data={{}} />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<RichText data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-rich-text')).toBe(true);
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<RichText className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<RichText data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

});
