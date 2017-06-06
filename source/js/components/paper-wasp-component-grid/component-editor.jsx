// @flow

type Props = {
    data: {
        columns: number
    },
    onChange: Function
};

function GridEditor({data: {columns = 4}, onChange}: Props) {
    return (
        <div>
            <label className="paper-wasp-field">
                <span>Columns</span>
                <select onChange={e => onChange({columns: e.target.value})} value={columns}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </label>
        </div>
    );
}

export {GridEditor};
