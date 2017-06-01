import React from 'react';
import {shallow} from 'enzyme';

import {RichTextEditor} from './component-editor';

describe('<RichTextEditor />', () => {
    it('should shallow render an RichTextEditor component', () => {
        shallow(<RichTextEditor data={{}} />);
    });
});
