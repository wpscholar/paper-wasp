import React from 'react';
import {shallow} from 'enzyme';

import {Image} from './component';

describe('<Image />', () => {

    it('should shallow render a Image component', () => {
        shallow(<Image data={{}} />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Image data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-image')).toBe(true);
    });

    it('should render a default left alignment class name', () => {
        const wrapper = shallow(<Image data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-image--left')).toBe(true);
    });

    it('should render a center alignment class name', () => {
        const wrapper = shallow(<Image data={{align: 'center'}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-image--center')).toBe(true);
    });

    it('should render a right alignment class name', () => {
        const wrapper = shallow(<Image data={{align: 'right'}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-image--right')).toBe(true);
    });

    it('should render a default fit class name', () => {
        const wrapper = shallow(<Image data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-image--natural')).toBe(true);
    });

    it('should render a cover fit class name', () => {
        const wrapper = shallow(<Image data={{fit: 'cover'}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-image--cover')).toBe(true);
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<Image className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Image data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

});
