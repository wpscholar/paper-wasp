// @flow

type Props = {
    data: {
        author: string,
        quote: string
    },
    onChange: Function
};

function QuoteEditor({data: {author = '', quote = ''}, onChange}: Props) {
    return (
        <div>
            <label className="paper-wasp-field">
                <span>Quote</span>
                <textarea onChange={e => onChange({quote: e.target.value})} value={quote} />
            </label>
            <label className="paper-wasp-field">
                <span>Author</span>
                <textarea onChange={e => onChange({author: e.target.value})} value={author} />
            </label>
        </div>
    );
}

export {QuoteEditor};
