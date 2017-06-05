import React from 'react';
import {shallow} from 'enzyme';

import {ImageTileEditor} from './component-editor';

describe('<ImageTileEditor />', () => {

    it('should shallow render an ImageTileEditor component', () => {
        shallow(<ImageTileEditor data={{}} />);
    });

});
