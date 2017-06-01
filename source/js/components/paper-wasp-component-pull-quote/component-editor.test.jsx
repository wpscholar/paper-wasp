import React from 'react';
import {shallow} from 'enzyme';

import {PullQuoteEditor} from './component-editor';

describe('<PullQuoteEditor />', () => {

    it('should shallow render an PullQuoteEditor component', () => {
        shallow(<PullQuoteEditor data={{}} />);
    });

});
