import React from 'react';
import {shallow} from 'enzyme';

import RowEditMode from './component-edit-mode';

describe('<RowEditMode />', () => {

    it('should shallow render an Row component', () => {
        shallow(<RowEditMode />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<RowEditMode />);
        expect(wrapper.first().node.props.className.includes('paper-wasp-row-wrap')).toBe(true);
    });

});
