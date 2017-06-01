// @flow

type Props = {
    data: {
        align: string,
        color: string,
        tag: string,
        text: string
    },
    onChange: Function
};

function HeadingEditor({data: {align, color, tag = 'h1', text = ''}, onChange}: Props) {
    return (
        <div>
            <label className="paper-wasp-field">
                <span>Heading Text</span>
                <input onChange={e => onChange({text: e.target.value})} type="text" value={text} />
            </label>

            <div className="paper-wasp-field" style={{display: 'flex', justifyContent: 'space-between'}}>
                <label style={{flexBasis: '50%', marginRight: '10px'}}>
                    <span>Heading Type</span>
                    <select onChange={e => onChange({tag: e.target.value})} value={tag}>
                        <option value="h1">Heading 1</option>
                        <option value="h2">Heading 2</option>
                        <option value="h3">Heading 3</option>
                        <option value="h4">Heading 4</option>
                        <option value="h5">Heading 5</option>
                    </select>
                </label>
                <label style={{flexBasis: '50%'}}>
                    <span>Text Alignment</span>
                    <select onChange={e => onChange({align: e.target.value})} value={align || 'left'}>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </label>
            </div>

            <label className="paper-wasp-field">
                <span>Color</span>
                <input onChange={e => onChange({color: e.target.value})} type="text" value={color || ''} />
            </label>
        </div>
    );
}

export {HeadingEditor};
