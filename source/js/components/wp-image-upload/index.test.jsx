import React from 'react';
import {shallow} from 'enzyme';

import WordPressImageUpload from './index';

describe('<WordPressImageUpload />', () => {

    const baseProps = {
        alt: '',
        onChange: () => {
        },
        src: ''
    };
    const imgSrc = 'https://www.narwhal.digital/wp-content/uploads/2016/03/logo-coca-cola-215x120@2x.png';

    const initialState = <WordPressImageUpload {...baseProps} />;
    const selectedState = <WordPressImageUpload {...baseProps} src={imgSrc} />;

    it('should render WordPressImageUpload component', () => {
        shallow(initialState);
    });

    // Initial State

    it('should have an empty src prop', () => {
        const wrapper = shallow(initialState);
        expect(wrapper.instance().props.src).toEqual('');
    });

    it("should render an 'Add Image' button", () => {
        const wrapper = shallow(initialState);
        expect(wrapper.find('button').text()).toEqual('Add Image');
    });

    // Selected State

    it('should render a thumbnail with a valid src attribute', () => {
        const wrapper = shallow(selectedState);
        expect(wrapper.find('img').node.props.src).toBe(imgSrc);
    });

    it('should render a thumbnail with alt text', () => {
        const wrapper = shallow(selectedState);
        expect(wrapper.find('img').node.props.alt).toBe('');
    });

    it("should render a 'Delete Image' button", () => {
        const wrapper = shallow(selectedState);
        expect(wrapper.find('button').text()).toEqual('Delete Image');
    });

    it('should add an image on button click');
    it('should delete/unset an image');
});
