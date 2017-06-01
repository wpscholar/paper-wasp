// @flow
import ImageUploader from 'wp-image-upload';

type Props = {
    data: {
        alt: string,
        align: string,
        attachmentId: number,
        caption: string,
        fit: string,
        link: string,
        showCaption: boolean,
        src: string,
        title: string
    },
    onChange: Function
};

/**
 * Handler to set props based on data passed by WordPress after uploading an image.
 *
 * @param img {Object}
 * @returns {Object}
 */
function onImageUpdate(img) {

    // Update props with data from WordPress image object
    if (img) {
        return {
            alt: img.alt || '',
            attachmentId: parseInt(img.id, 10) || 0,
            caption: img.caption || '',
            src: img.url || '',
            title: img.title || ''
        };
    }

    // Reset props if image was deleted
    return {
        alt: '',
        attachmentId: 0,
        caption: '',
        showCaption: false,
        src: '',
        title: ''
    };
}

/**
 * Handler to set props after image src is updated.
 *
 * @param src {string}
 * @returns {Object}
 */
function onSrcChange(src) {
    if (!src) {
        return {
            alt: '',
            caption: '',
            showCaption: false,
            src,
            title: ''
        };
    }
    return {src};
}

function ImageEditor(
    {data: {alt, align, attachmentId, caption, fit, link, showCaption, src, title}, onChange}: Props
) {

    const hasImage = src && src.length > 0;
    const hasCaption = caption && caption.length > 0;
    const isUpload = attachmentId && attachmentId > 0;

    return (
        <div>

            {!hasImage || (hasImage && isUpload) ?
                <ImageUploader
                    alt={alt}
                    className="paper-wasp-field"
                    onChange={data => onChange(onImageUpdate(data))}
                    src={src} />
                : null
            }

            {!isUpload ?
                <label className="paper-wasp-field">
                    <span>Image URL</span>
                    <input
                        onChange={e => onChange(onSrcChange(e.target.value))}
                        type="text"
                        value={src || ''}
                    />
                </label>
                : null
            }

            {hasImage && !isUpload ?
                <label className="paper-wasp-field">
                    <span>Alt Text</span>
                    <input
                        onChange={e => onChange({alt: e.target.value})}
                        type="text"
                        value={alt || ''} />
                </label>
                : null
            }

            {hasImage ?
                <div className="paper-wasp-field" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <label style={{flexBasis: '50%', marginRight: '10px'}}>
                        <span>Image Alignment</span>
                        <select onChange={e => onChange({align: e.target.value})} value={align || 'left'}>
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                    </label>
                    <label style={{flexBasis: '50%'}}>
                        <span>Image Fit</span>
                        <select onChange={e => onChange({fit: e.target.value})} value={fit || 'natural'}>
                            <option value="natural">Natural</option>
                            <option value="cover">Cover</option>
                        </select>
                    </label>
                </div>
                : null
            }

            {hasImage ?
                <label className="paper-wasp-field">
                    <span>Link URL</span>
                    <input
                        onChange={e => onChange({link: e.target.value})}
                        type="text"
                        value={link || ''}
                    />
                </label>
                : null
            }

            {hasImage && !isUpload ?
                <label className="paper-wasp-field">
                    <span>Caption</span>
                    <input
                        onChange={e => onChange({caption: e.target.value})}
                        type="text"
                        value={caption || ''} />
                </label>
                : null
            }

            {hasCaption ?
                <label className="paper-wasp-field">
                    <input
                        checked={showCaption || false}
                        onChange={e => onChange({showCaption: Boolean(e.target.checked)})}
                        type="checkbox"
                        value={1} />
                    <span>Show Caption?</span>
                </label>
                : null
            }

            {hasImage && !isUpload ?
                <label className="paper-wasp-field">
                    <span>Title</span>
                    <input
                        onChange={e => onChange({title: e.target.value})}
                        type="text"
                        value={title || ''} />
                </label>
                : null
            }

        </div>
    );
}

export {ImageEditor};
