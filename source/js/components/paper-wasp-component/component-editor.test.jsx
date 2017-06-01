import React from 'react';
import {shallow} from 'enzyme';

import ComponentEditor from './component-editor';

describe('<ComponentEditor />', () => {
    it('should shallow render an ComponentEditor component', () => {
        shallow(<ComponentEditor />);
    });
});
