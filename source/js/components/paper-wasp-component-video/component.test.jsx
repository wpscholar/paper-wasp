import React from 'react';
import {shallow} from 'enzyme';

import Video from './component';

describe('<Video />', () => {

    it('should shallow render a Video component', () => {
        shallow(<Video data={{}} />);
    });

    it('should render a default class name', () => {
        const wrapper = shallow(<Video data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-video')).toBe(true);
    });

    it('should render a responsive class name', () => {
        const wrapper = shallow(<Video data={{isResponsive: true}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-video--responsive')).toBe(true);
    });

    it('should render a left alignment class name', () => {
        const wrapper = shallow(<Video data={{isResponsive: false}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-video--left')).toBe(true);
    });

    it('should render a center alignment class name', () => {
        const wrapper = shallow(<Video data={{align: 'center', isResponsive: false}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-video--center')).toBe(true);
    });

    it('should render a right alignment class name', () => {
        const wrapper = shallow(<Video data={{align: 'right', isResponsive: false}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-video--right')).toBe(true);
    });

    it('should render a custom class name', () => {
        const wrapper = shallow(<Video className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<Video data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

});
