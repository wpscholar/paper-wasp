// @flow

import {createElement} from 'react';

const {sanitizeHtml} = window;

type Props = {
    className: string,
    data: {
        align: string,
        color: string,
        tag: string,
        text: string
    },
    id: string
};

function Heading({className, data: {align = 'left', color, tag = 'h1', text = ''}, id}: Props) {
    return createElement(
        tag,
        {
            className: ['paper-wasp-heading', `paper-wasp-heading--${align}`, className].join(' ').trim(),
            dangerouslySetInnerHTML: {
                __html: sanitizeHtml(text, {
                    allowedAttributes: {'*': ['class', 'id']},
                    allowedTags: ['b', 'br', 'em', 'i', 'strong', 'span']
                })
            },
            id,
            style: color ? {color} : {}
        }
    );
}

export {Heading};
