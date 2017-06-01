// @flow

import RichText from 'rich-text';

type Props = {
    data: {
        text: string
    },
    onChange: Function
};

function RichTextEditor({data: {text}, onChange}: Props) {
    return (
        <RichText height={300} onChange={onChange} text={text} />
    );
}

export {RichTextEditor};
