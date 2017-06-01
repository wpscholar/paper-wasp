import React from 'react';
import {shallow} from 'enzyme';

import {ImageEditor} from './component-editor';

describe('<ImageEditor />', () => {
    it('should shallow render an ImageEditor component', () => {
        shallow(<ImageEditor data={{}} />);
    });
});
