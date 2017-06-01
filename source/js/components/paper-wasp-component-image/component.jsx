// @flow

type Props = {
    className: string,
    data: {
        align: string,
        alt: string,
        caption: string,
        fit: string,
        link: string,
        showCaption: boolean,
        src: string,
        title: string
    },
    id: string
};

function Image(
    {
        className = '',
        data: {align = 'left', alt, caption, fit = 'natural', link, showCaption, src, title},
        id
    }: Props
) {

    // eslint-disable-next-line jsx-a11y/img-has-alt
    const img = <img {...{alt, src, title}} />;

    const classes = [
        'paper-wasp-image',
        `paper-wasp-image--${align}`,
        `paper-wasp-image--${fit}`,
        className
    ].join(' ').trim();

    const hasCaption = caption && caption.length > 0;

    return (
        <figure className={classes} id={id}>
            {link ? <a href={link} rel="noopener noreferrer" target="_blank">{img}</a> : img}
            {hasCaption && showCaption ? <figcaption>{caption}</figcaption> : null}
        </figure>
    );
}

export {Image};
