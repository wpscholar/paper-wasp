import {updateComponentData} from 'paper-wasp/action-creators';

import Component from './component';

// Custom prop type function so we don't have to import the whole 'prop-types' library
function isObject(props, propName, componentName = 'ANONYMOUS', location, propFullName) {
  if (props[propName]) {
    const propValue = props[propName];
    const preciseType = typeof propValue;
    const expectedType = 'object';
    if (preciseType !== expectedType) {
        const msg = `Invalid ${location} '${propFullName}' of type '${preciseType}' supplied to '${componentName}', expected '${expectedType}'.`;
        return new Error(msg);
    }
  }

  // assume all ok
  return null;
}

function getEmbedShortcode(url, width, height) {
    // Default width and height to WordPress defaults for video shortcode
    // See wp_video_shortcode() defaults in wp-includes/media.php
    return `[embed width="${width || 640}" height="${height || 360}"]${url}[/embed]`;
}

function VideoConnect(props, {store: {dispatch, getState}}) {
    const state = getState();
    const {container: {ajaxUrl, postId}, context} = state;
    return (
        <Component
            context={context}
            updateEmbed={(...embedParams) => {
                const {uid} = props;
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
            }}
            {...props}
        />
    );
}

VideoConnect.contextTypes = {
    store: isObject
}

export {VideoConnect as Video};
