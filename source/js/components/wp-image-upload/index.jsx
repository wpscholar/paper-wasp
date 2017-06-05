// @flow
import {Component} from 'react';

class WordPressImageUpload extends Component {

    // eslint-disable-next-line react/sort-comp
    props: {
        addImageText: string,
        alt: string,
        className: string,
        onChange: Function,
        src: string
    };

    static defaultProps = {
        addImageText: 'Add Image'
    };

    uploader: {
        open: Function,
        state: Function
    };

    componentDidMount() {
        this.uploader = window.wp.media({
            button: {text: 'Use Image'},
            library: {type: 'image'},
            multiple: false,
            title: 'Select an Image'
        });
        this.uploader.on('select', this.setImage.bind(this));
    }

    onAddImage = () => {
        this.uploader.open();
    };

    onDeleteImage = (e: Object) => {
        e.preventDefault();
        this.unsetImage();
    };

    setImage() {
        this.props.onChange(this.uploader.state().get('selection').first().toJSON());
    }

    unsetImage() {
        this.props.onChange(null);
    }

    renderThumbnail() {
        const {onDeleteImage, props: {alt, src}} = this;
        return (
            <div>
                <div className="thumbnail" style={{marginBottom: '1em'}}>
                    <img alt={alt} src={src} />
                </div>

                <button className="paper-wasp-button-secondary" onClick={onDeleteImage}>
                    Delete Image
                </button>
            </div>
        );
    }

    renderButton() {
        const {addImageText} = this.props;
        return (
            <button className="paper-wasp-button-secondary" onClick={this.onAddImage} type="button">
                {addImageText}
            </button>
        );
    }

    render() {
        const {className, src} = this.props;
        return (
            <div className={['paper-wasp-wp-image-upload', className].join(' ').trim()}>
                {src ? this.renderThumbnail() : this.renderButton()}
            </div>
        );
    }

}

export default WordPressImageUpload;
