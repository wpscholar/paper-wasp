import React from 'react';
import {shallow} from 'enzyme';

import Modal from './component';

describe('<Modal />', () => {

    it('should shallow render a Button component', () => {
        shallow(<Modal />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Modal isOpen />);
        expect(wrapper.node.props.className).toBe('paper-wasp-modal paper-wasp-modal--open');
    });

});

