import React from 'react';
import {shallow} from 'enzyme';

import {HeadingEditor} from './component-editor';

describe('<HeadingEditor />', () => {
    it('should shallow render an HeadingEditor component', () => {
        shallow(<HeadingEditor data={{}} />);
    });
});
