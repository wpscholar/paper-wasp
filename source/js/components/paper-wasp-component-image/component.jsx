// @flow

type Props = {
    align: string,
    alt: string,
    caption: string,
    className: string,
    fit: string,
    id: string,
    link: string,
    newTab: boolean,
    showCaption: boolean,
    src: string,
    title: string,
};

function Image(
    {
        align = 'left',
        alt = '',
        caption,
        className = '',
        fit = 'natural',
        id,
        link,
        newTab = false,
        showCaption,
        src,
        title,
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

    let newTabProps = {};

    if( newTab ) {
        newTabProps = {
            rel: 'noopener noreferrer',
            target: '_blank'
        }
    }

    return (
        <figure className={classes} id={id}>
            {link ? <a href={link} {...newTabProps}>{img}</a> : img}
            {hasCaption && showCaption ? <figcaption>{caption}</figcaption> : null}
        </figure>
    );
}

export default Image;
