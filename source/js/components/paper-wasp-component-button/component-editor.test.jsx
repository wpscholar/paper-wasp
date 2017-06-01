import React from 'react';
import {shallow} from 'enzyme';

import {ButtonEditor} from './component-editor';

describe('<ButtonEditor />', () => {
    it('should shallow render an ButtonEditor component', () => {
        shallow(<ButtonEditor data={{}} />);
    });
});
