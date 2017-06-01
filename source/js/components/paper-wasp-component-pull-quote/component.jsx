// @flow

type Props = {
    className: string,
    data: {
        quote: string
    },
    id: string
};

function PullQuote({className, data: {quote = ''}, id}: Props) {
    return (
        <aside className={['paper-wasp-pull-quote', className].join(' ').trim()} id={id}>
            {quote}
        </aside>
    );
}

export {PullQuote};
