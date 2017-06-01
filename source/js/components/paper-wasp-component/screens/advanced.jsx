// @flow

type Props = {
    className: string,
    id: string,
    onChange: Function
};

function AdvancedScreen({className, id, onChange}: Props) {
    return (
        <div>

            <label className="paper-wasp-field">
                <span>CSS Classes</span>
                <input
                    onChange={e => onChange({className: e.target.value})}
                    type="text"
                    value={className} />
            </label>

            <label className="paper-wasp-field">
                <span>CSS ID</span>
                <input
                    onChange={e => onChange({id: e.target.value})}
                    type="text"
                    value={id} />
            </label>

        </div>
    );
}

export default AdvancedScreen;
