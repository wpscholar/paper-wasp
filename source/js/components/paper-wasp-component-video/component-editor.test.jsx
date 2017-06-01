import React from 'react';
import {shallow} from 'enzyme';

import {VideoEditor} from './component-editor';

describe('<VideoEditor />', () => {

    it('should shallow render an VideoEditor component', () => {
        shallow(<VideoEditor data={{}} />);
    });

});
