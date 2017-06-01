// @flow

type Props = {
    data: {
        align: string,
        color: string,
        text: string
    },
    onChange: Function
};

function TextEditor({data: {align, color = '', text = ''}, onChange}: Props) {
    return (
        <div>
            <label className="paper-wasp-field">
                <span>Text</span>
                <textarea onChange={e => onChange({text: e.target.value})} value={text} />
            </label>

            <div className="paper-wasp-field" style={{display: 'flex', justifyContent: 'space-between'}}>
                <label className="paper-wasp-field" style={{flexBasis: '50%', marginRight: '10px'}}>
                    <span>Color</span>
                    <input onChange={e => onChange({color: e.target.value})} type="text" value={color} />
                </label>
                <label className="paper-wasp-field" style={{flexBasis: '50%'}}>
                    <span>Text Alignment</span>
                    <select onChange={e => onChange({align: e.target.value})} value={align || 'left'}>
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export {TextEditor};
