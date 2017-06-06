// @flow

import {Component} from 'react';
import ReactDOM from 'react-dom';
import TinyMCEInput from 'react-tinymce-input';
import ImageUploader from 'wp-image-upload';


const document = window.document;

class RichText extends Component {

    // eslint-disable-next-line react/sort-comp
    props: {
        height: number,
        onChange: Function,
        text: string
    };

    componentDidMount() {
        document.querySelector('.mce-i-image').parentNode.onclick = () => this.manipulateImageModal();
    }

    componentDidUpdate(prevProps: Object) {
        const {src: prevSrc} = prevProps;
        const {onChange, src} = this.props;

        if (src && src !== prevSrc) {
            onChange({src: ''});

            document.querySelector(
                '.mce-container.mce-abs-layout-item.mce-first.mce-formitem > div > div > input'
            ).value = src;
        }
    }

    manipulateImageModal = () => {

        const {onImageChange} = this;

        let newElem = document.createElement('div');
        newElem.className = 'tiny-image-editor';

        setTimeout(
            () => document
                .querySelector('.mce-container-body.mce-abs-layout:not(.mce-window-body)')
                .insertBefore(
                    newElem,
                    document.querySelector('.mce-container.mce-abs-layout-item.mce-first.mce-formitem')
                ),
            100
        );

        ReactDOM.render(<ImageUploader addImageText="" alt="" onChange={onImageChange} src="" />, newElem);
    };

    onImageChange = (e: Object) => {
        console.log(e);
    };

    onTextChange = (content: string) => {
        this.props.onChange({text: content});
    };

    render() {

        const {onTextChange, props: {height = 300, text = ''}} = this;

        const TINYMCE_CONFIG = {
            document_base_url: process.env.PUBLIC_URL,
            height,
            inline: false,
            language: 'en',
            menubar: false,
            plugins: 'link lists paste code wordcount textcolor colorpicker image',
            remove_script_host: true,
            resize: true,
            statusbar: true,
            theme: 'modern',
            theme_modern_toolbar_align: 'left',
            theme_modern_toolbar_location: 'top',
            toolbar: 'formatselect image forecolor bold italic strikethrough bullist numlist blockquote alignleft aligncenter alignright link unlink code'
        };

        return (
            <div>
                <label className="paper-wasp-field">
                    <TinyMCEInput
                        onChange={onTextChange}
                        tinymceConfig={TINYMCE_CONFIG}
                        value={text}
                    />
                </label>
            </div>
        );
    }

}

export default RichText;
