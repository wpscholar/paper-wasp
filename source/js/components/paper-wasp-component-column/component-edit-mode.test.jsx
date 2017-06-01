import React from 'react';
import {shallow} from 'enzyme';

import Column from './component-edit-mode';

describe('<Column />', () => {

    it('should shallow render an Column component', () => {
        shallow(<Column />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Column />);
        expect(wrapper.node.props.className).toBe('paper-wasp-column paper-wasp-column--empty');
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<Column className="my-class" />);
        expect(wrapper.node.props.className).toBe('paper-wasp-column paper-wasp-column--empty my-class');
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Column id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

});
