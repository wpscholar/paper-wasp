import React from 'react';
import {shallow} from 'enzyme';

import PaperWaspComponent from './component';

describe('<PaperWaspComponent />', () => {

    it('should shallow render an PaperWaspComponent component', () => {
        shallow(<PaperWaspComponent data={{}} />);
    });

    it('should be considered empty when component has no data and no children', () => {
        const wrapper = shallow(<PaperWaspComponent data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-component--empty')).toBe(true);
    });

    it('should not be considered empty when component has data', () => {
        const wrapper = shallow(<PaperWaspComponent data={{a: 1}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-component--empty')).toBe(false);
    });

    it('should not be considered empty when component has children', () => {
        const wrapper = shallow(<PaperWaspComponent childComponents={[{}]} data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-component--empty')).toBe(false);
    });

    it('should not be considered empty when component has data and children', () => {
        const wrapper = shallow(<PaperWaspComponent childComponents={[{}]} data={{a: 1}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-component--empty')).toBe(false);
    });

});
