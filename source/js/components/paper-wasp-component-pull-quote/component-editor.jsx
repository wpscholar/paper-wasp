// @flow

type Props = {
    data: {
        quote: string
    },
    onChange: Function
};

function PullQuoteEditor({data: {quote = ''}, onChange}: Props) {
    return (
        <label className="paper-wasp-field">
            <span>Pull Quote</span>
            <textarea onChange={e => onChange({quote: e.target.value})} value={quote} />
        </label>
    );
}

export {PullQuoteEditor};
