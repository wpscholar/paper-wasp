import React from 'react';
import {shallow} from 'enzyme';

import {TextEditor} from './component-editor';

describe('<TextEditor />', () => {
    it('should shallow render an TextEditor component', () => {
        shallow(<TextEditor data={{}} />);
    });
});
