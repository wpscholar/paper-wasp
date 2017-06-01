// @flow
/* eslint-disable react/no-danger, no-return-assign */

import sanitizeHtml from 'sanitize-html';

type Props = {
    className: string,
    data: {
        align: string,
        backgroundColor: string,
        borderColor: string,
        borderRadius: number,
        borderThickness: number,
        hoverColor: string,
        link: string,
        newTab: bool,
        textColor: string,
        text: string
    },
    id: string
};

function Button(
    {
        className = '',
        data: {
            align = 'left',
            backgroundColor = '',
            borderColor = '',
            borderRadius = 0,
            borderThickness = 0,
            hoverColor = '',
            link = '',
            newTab = false,
            textColor = '',
            text = ''
        },
        id
    }: Props
) {

    let button = {};

    const style = {
        backgroundColor,
        border: (borderThickness && borderColor ? `${borderThickness}px solid ${borderColor}` : ''),
        borderRadius: (borderRadius ? `${borderRadius}px` : ''),
        color: textColor
    };

    return (
        <div className={`paper-wasp-text-${align}`}>
            <a
                className={['paper-wasp-button', className].join(' ').trim()}
                dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(text, {
                        allowedAttributes: {'*': ['class', 'id']},
                        allowedTags: ['b', 'br', 'em', 'i', 'strong', 'span']
                    })
                }}
                href={link}
                id={id}
                onMouseOut={() => button.style.backgroundColor = backgroundColor}
                onMouseOver={() => button.style.backgroundColor = hoverColor}
                ref={el => button = el}
                rel="noopener noreferrer"
                style={style}
                target={newTab ? '_blank' : null} />
        </div>
    );
}

export {Button};
