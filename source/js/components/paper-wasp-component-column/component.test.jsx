import React from 'react';
import {shallow} from 'enzyme';

import Column from './component';

describe('<Column />', () => {

    it('should shallow render an Column component', () => {
        shallow(<Column />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Column />);
        expect(wrapper.node.props.className.includes('paper-wasp-column')).toBe(true);
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<Column className="my-class" />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Column id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

});
