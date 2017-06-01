// @flow

type Props = {
    data: {
        align: string,
        height: number,
        isResponsive: boolean,
        width: number,
        url: string
    },
    onChange: Function
};

function VideoEditor({data: {align = 'left', height = 0, isResponsive = true, width = 0, url = ''}, onChange}: Props) {
    return (
        <div>

            <label className="paper-wasp-field">
                <span>Video URL</span>
                <input
                    onChange={e => onChange({url: e.target.value})}
                    type="text"
                    value={url} />
            </label>

            <label className="paper-wasp-field">
                <input
                    checked={isResponsive}
                    onChange={e => onChange({isResponsive: e.target.checked})}
                    type="checkbox" />
                <span>Make video responsive</span>
            </label>

            {!isResponsive ? (
                <div>

                    <label className="paper-wasp-field">
                        <span>Alignment</span>
                        <select onChange={e => onChange({align: e.target.value})} value={align}>
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                    </label>

                    <label className="paper-wasp-field">
                        <span>Width</span>
                        <input
                            min="0"
                            onChange={e => onChange({width: parseInt(e.target.value, 10) || 0})}
                            step="1"
                            type="number"
                            value={width} />
                    </label>

                    <label className="paper-wasp-field">
                        <span>Height</span>
                        <input
                            min="0"
                            onChange={e => onChange({height: parseInt(e.target.value, 10) || 0})}
                            step="1"
                            type="number"
                            value={height} />
                    </label>

                </div>
            ) : null}

        </div>
    );
}

export {VideoEditor};
