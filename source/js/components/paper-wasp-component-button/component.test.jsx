import React from 'react';
import {shallow} from 'enzyme';

import {Button} from './component';

describe('<Button />', () => {

    it('should shallow render a Button component', () => {
        shallow(<Button data={{}} />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Button data={{}} />);
        expect(wrapper.childAt(0).node.props.className.includes('paper-wasp-button')).toBe(true);
    });

    it('should render a default text alignment class name', () => {
        const wrapper = shallow(<Button data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-text-left')).toBe(true);
    });

    it('should render a center text alignment class name', () => {
        const wrapper = shallow(<Button data={{align: 'center'}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-text-center')).toBe(true);
    });

    it('should render a right text alignment class name', () => {
        const wrapper = shallow(<Button data={{align: 'right'}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-text-right')).toBe(true);
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<Button className={'my-class'} data={{}} />);
        expect(wrapper.childAt(0).node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Button data={{}} id="my-id" />);
        expect(wrapper.childAt(0).node.props.id).toBe('my-id');
    });

});
