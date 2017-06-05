import React from 'react';
import {mount, shallow} from 'enzyme';

import {ImageTile} from './component';

describe('<ImageTile />', () => {

    it('should shallow render a ImageTile component', () => {
        shallow(<ImageTile data={{}} />);
    });

    it('should render a default class', () => {
        const wrapper = shallow(<ImageTile data={{}} />);
        expect(wrapper.node.props.className.includes('paper-wasp-image-tile')).toBe(true);
    });

    it('should render a custom class', () => {
        const wrapper = shallow(<ImageTile className="my-class" data={{}} />);
        expect(wrapper.node.props.className.includes('my-class')).toBe(true);
    });

    it('should render a custom id attribute', () => {
        const wrapper = shallow(<ImageTile data={{}} id="my-id" />);
        expect(wrapper.node.props.id).toBe('my-id');
    });

    it('should not render a type attribute', () => {
        const wrapper = shallow(<ImageTile data={{}} type="image-tile" />);
        expect(wrapper.node.props.type).not.toBe('image-tile');
    });

    it('should not log any errors', () => {
        const errors = [];
        const errorHandler = console.error;
        console.error = (...args) => {
            errors.push({args, method: 'error'});
            return errorHandler.apply(console, args);
        };
        mount(<ImageTile data={{}} index={0} parent={0} uid={12345} />);
        expect(errors).toHaveLength(0);
    });

});
