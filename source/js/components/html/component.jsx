// @flow
import sanitizeHtml from 'sanitize-html';

type Props = {
    allowedAttributes: Object,
    allowedTags: Array<*>,
    dispatch: Function,
    html: string
};

function HTML({dispatch, html, allowedTags, allowedAttributes, ...props}: Props) {
    const cleanHtml = sanitizeHtml(html, {allowedAttributes, allowedTags});
    // eslint-disable-next-line react/no-danger
    return <div {...props} dangerouslySetInnerHTML={{__html: cleanHtml}} />;
}

export default HTML;
