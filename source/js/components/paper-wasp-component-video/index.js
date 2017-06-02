import {connect} from 'react-redux';
import {updateComponentData} from 'paper-wasp/action-creators';
import {getContext} from 'paper-wasp-editor/selectors';

import Component from './component';

function getEmbedShortcode(url, width, height) {
    // Default width and height to WordPress defaults for video shortcode
    // See wp_video_shortcode() defaults in wp-includes/media.php
    return `[embed width="${width || 640}" height="${height || 360}"]${url}[/embed]`;
}

const Video = connect(
    state => ({
        ajaxUrl: state.container.ajaxUrl,
        context: getContext(state),
        postId: state.container.postId
    }),
    (dispatch, {uid}) => ({
        updateEmbed: (ajaxUrl, postId, ...embedParams) => {

            const formData = new window.FormData();
            formData.append('action', 'parse-embed');
            formData.append('post_ID', postId);
            formData.append('shortcode', getEmbedShortcode(...embedParams));
            formData.append('type', 'embed');

            fetch(ajaxUrl, {
                body: formData,
                credentials: 'same-origin',
                method: 'POST'
            }).then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        if (json.success && json.data && json.data.body) {
                            dispatch(updateComponentData(uid, {embed: json.data.body}));
                        } else {
                            dispatch(updateComponentData(uid, {embed: '<p style="color: red;">ERROR: Video Not Embeddable - Double Click to Edit</p>'}));
                        }
                    });
                }
            });
        }
    })
)(Component);

export * from './component-editor';
export {Video};
