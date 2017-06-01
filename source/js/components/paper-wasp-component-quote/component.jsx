// @flow

type Props = {
    className: string,
    data: {
        author: string,
        quote: string,
    },
    id: string
};

function Quote({className, data: {author = '', quote = ''}, id}: Props) {
    return (
        <blockquote
            className={['paper-wasp-quote', className].join(' ').trim()}
            id={id}>
            <p>{quote}</p>
            <footer className="quote-author">{author}</footer>
        </blockquote>
    );
}

export {Quote};
