import React from 'react';
import {shallow} from 'enzyme';

import {QuoteEditor} from './component-editor';

describe('<QuoteEditor />', () => {
    it('should shallow render an QuoteEditor component', () => {
        shallow(<QuoteEditor data={{}} />);
    });
});
