import React from 'react';
import {shallow} from 'enzyme';

import {Text} from './component';

describe('<Text />', () => {

    it('should shallow render a Text component', () => {
        shallow(<Text data={{}} />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Text data={{}} />);
        expect(wrapper.node.props.className).toBe('paper-wasp-text paper-wasp-text--left');
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<Text className="my-class" data={{}} />);
        expect(wrapper.node.props.className).toBe('paper-wasp-text paper-wasp-text--left my-class');
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Text data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

    it('should render a custom color style', () => {
        const wrapper = shallow(<Text data={{color: '#333'}} />);
        expect(wrapper.node.props.style).toEqual({color: '#333'});
    });

    it('should NOT render a default color style', () => {
        const wrapper = shallow(<Text data={{}} />);
        expect(wrapper.node.props.style).toEqual({});
    });

});
