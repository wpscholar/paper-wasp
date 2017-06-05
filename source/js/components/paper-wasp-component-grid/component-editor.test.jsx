import React from 'react';
import {shallow} from 'enzyme';

import {GridEditor} from './component-editor';

describe('<GridEditor />', () => {

    it('should shallow render an GridEditor component', () => {
        shallow(<GridEditor data={{}} />);
    });

});
