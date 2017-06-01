// @flow

import {HTML} from 'html';

type Props = {
    className: string,
    data: {
        text: string
    },
    id: string
};

function RichText({className, data: {text = ''}, id}: Props) {
    return (
        <HTML
            className={['paper-wasp-rich-text', className].join(' ').trim()}
            html={text}
            id={id} />
    );
}

export {RichText};
