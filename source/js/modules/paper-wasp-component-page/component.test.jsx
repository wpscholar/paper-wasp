import React from 'react';
import {shallow} from 'enzyme';

import Page from './component';

describe('<Page />', () => {

    it('should shallow render an Page component', () => {
        shallow(<Page />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Page />);
        expect(wrapper.node.props.className.includes('paper-wasp-page')).toBe(true);
    });

});
